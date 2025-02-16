type SupabaseConfig = {
	url: string;
	anonKey: string;
};

export function getSupabaseConfig(): SupabaseConfig {
	const supabaseUrl: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey: string | undefined =
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Supabase URL or ANON_KEY is missing for the current environment.",
		);
	}
	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Supabase URL or ANON_KEY is missing for the current environment.",
		);
	}

	return { url: supabaseUrl, anonKey: supabaseAnonKey };
}
