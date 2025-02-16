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
		<main className="container mx-auto p-4">
			<h1 className="font-roboto-mono mb-6 text-3xl font-bold ">
				Calendário de Corridas
			</h1>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{marathons.map((marathon) => (
					<MarathonCard key={marathon.id} marathon={marathon} />
				))}
			</section>
		</main>
	);
}
