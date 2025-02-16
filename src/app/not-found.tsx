import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full bg-gray-700 flex flex-col items-center justify-center p-4">
			<div className="max-w-lg w-full bg-gray-500 rounded-lg shadow-md p-8 text-center">
				<div className="space-y-6">
					<h1 className="text-9xl font-bold text-blue-300">404</h1>

					<div className="space-y-2">
						<h2 className="text-2xl font-semibold text-gray-800">
							Página Não Encontrada
						</h2>
						<p className="text-gray-600">
							A corrida que você está procurando desapareceu no horizonte...
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/"
							className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
						>
							Página Inicial
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
