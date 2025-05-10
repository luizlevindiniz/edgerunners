"use client";

import { Marathon } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface DetailedCardProps {
	marathon: Marathon;
}

export function DetailedCard({ marathon }: Readonly<DetailedCardProps>) {
	const router = useRouter();
	const startingDate = new Date(marathon.starting_date);
	const endingDate = new Date(marathon.ending_date);

	return (
		<main className="container mx-auto p-4 max-w-4xl">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				{marathon.thumbnail_url && (
					<div className="h-96 w-full relative">
						<div className="absolute top-0 right-0 w-full h-full z-10">
							<button
								onClick={() => router.push(`/`)}
								className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors text-lg font-medium cursor-pointer"
							>
								Voltar
							</button>
						</div>
						<Image
							src={marathon.thumbnail_url}
							alt={marathon.name ?? "Marathon image"}
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}

				<div className="p-6">
					<div className="flex justify-between items-start mb-4">
						<h1 className="text-3xl font-bold text-gray-900">
							{marathon.name}
						</h1>
						<span className="bg-blue-100 text-blue-800 text-lg font-medium px-4 py-2 rounded">
							{marathon.price.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>

					<div className="mb-6">
						<div className="flex items-center gap-2 text-gray-600 mb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"
								/>
							</svg>
							<p className="text-lg">
								{startingDate.toLocaleDateString("pt-BR")}
								{` - ${endingDate.toLocaleDateString("pt-BR")}`}
							</p>
						</div>

						{marathon.promoter && (
							<div className="flex items-center gap-2 text-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
								</svg>
								<p className="text-lg">Organizado por: {marathon.promoter}</p>
							</div>
						)}
					</div>

					{marathon.tracks && marathon.tracks.length > 0 && (
						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-3 text-gray-900">
								Trilhas Disponíveis
							</h2>
							<div className="flex flex-wrap gap-2">
								{marathon.tracks.map((track) => (
									<span
										key={track}
										className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
									>
										{track}
									</span>
								))}
							</div>
						</div>
					)}

					{marathon.description && (
						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-3 text-gray-900">
								Sobre a Corrida
							</h2>
							<p className="text-gray-700 leading-relaxed">
								{marathon.description}
							</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
