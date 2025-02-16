import { Marathon } from "@/types";
import { createClient } from "./config/supabase/server";
import { MarathonCard } from "@/components/Card/Card";

export default async function Home() {
	const supabase = await createClient();

	const { data, error } = await supabase.from("marathons").select("*");

	if (error) {
		console.error(error);
		return <div>Erro ao buscar as corridas</div>;
	}

	const marathons = data as Marathon[];

	if (marathons.length === 0) {
		return <div>Nenhuma corrida encontrada</div>;
	}

	return (
		<main>
			<h1 className="font-roboto-mono mb-2 text-2xl">
				Calendario de corridas{" "}
			</h1>
			<section className="flex flex-col gap-4">
				{marathons.map((marathon) => (
					<MarathonCard key={marathon.id} marathon={marathon} />
				))}
			</section>
		</main>
	);
}
