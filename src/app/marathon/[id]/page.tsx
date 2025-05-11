import { createClient } from "@/app/config/supabase/server";
import { notFound } from "next/navigation";
import { DetailedCard } from "@/components/Card/DetailedCard";

export default async function MarathonDetails({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const supabase = await createClient();

	const { id } = await params;

	const { data: marathon, error } = await supabase
		.from("marathons")
		.select("*")
		.eq("id", id)
		.single();

	if (error || !marathon) {
		notFound();
	}

	return <DetailedCard marathon={marathon} />;
}
