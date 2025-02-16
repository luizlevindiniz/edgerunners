import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

import { getSupabaseConfig } from "./config";

export async function updateSession(request: NextRequest) {
	try {
		let supabaseResponse = NextResponse.next({
			request,
		});

		const { url, anonKey } = getSupabaseConfig();
		const supabase = createServerClient(url, anonKey, {
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) =>
						request.cookies.set(name, value),
					);
					supabaseResponse = NextResponse.next({
						request,
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options),
					);
				},
			},
		});

		// IMPORTANT: Avoid writing any logic between createServerClient and
		// supabase.auth.getUser(). A simple mistake could make it very hard to debug
		// issues with users being randomly logged out.

		const {
			data: { user },
		} = await supabase.auth.getUser();

		console.log("User", user);

		if (!user && !request.nextUrl.pathname.startsWith("/login")) {
			// no user, potentially respond by redirecting the user to the login page
			const url = request.nextUrl.clone();
			url.pathname = "/login";
			return NextResponse.redirect(url);
		}

		return supabaseResponse;
	} catch (error) {
		console.error("Error updating session", error);
		return NextResponse.error();
	}
}
