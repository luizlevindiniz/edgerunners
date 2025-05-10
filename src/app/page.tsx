import { Marathon } from "@/types";
import { createClient } from "./config/supabase/server";
import { Home } from "@/components/Home";

export default async function HomePage() {
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
			<Home marathons={marathons} />
		</main>
	);
}
