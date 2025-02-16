export default function Home() {
	return (
		<main>
			<h1 className="font-roboto-mono mb-2 text-2xl">
				Calendario de corridas{" "}
			</h1>
			<section className="flex flex-col gap-1.5">
				<div className="card">
					<h2>Corrida 1</h2>
					<p>Descrição da corrida 1</p>
				</div>
				<div className="card">
					<h2>Corrida 2</h2>
					<p>Descrição da corrida 2</p>
				</div>
				<div className="card">
					<h2>Corrida 3</h2>
					<p>Descrição da corrida 3</p>
				</div>
			</section>
		</main>
	);
}
