import { Marathon } from "@/types";
import Image from "next/image";
interface MarathonCardProps {
	marathon: Marathon;
}

export function MarathonCard({ marathon }: Readonly<MarathonCardProps>) {
	const startingDate = new Date(marathon.starting_date);
	const endingDate = new Date(marathon.ending_date);

	return (
		<div className="card bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden max-w-[600px]">
			{marathon.thumbnail_url && (
				<div className="h-72 w-full overflow-hidden rounded-t-lg">
					<Image
						src={marathon.thumbnail_url}
						alt={marathon.name ?? "Marathon image"}
						width={500}
						height={500}
						className="h-full w-full object-cover"
						priority
					/>
				</div>
			)}

			<div className="p-4">
				<div className="flex justify-between items-start mb-2">
					<h2 className="text-xl font-semibold text-gray-800">
						{marathon.name ?? "Unnamed Marathon"}
					</h2>
					<span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
						{marathon.price.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
				</div>

				<div className="mb-3 text-sm text-gray-600">
					<p>
						{startingDate.toLocaleDateString("pt-BR")}
						{` - ${endingDate.toLocaleDateString("pt-BR")}`}
					</p>
					{marathon.promoter && (
						<p className="text-gray-500 italic">
							Organizado por: {marathon.promoter}
						</p>
					)}
				</div>

				{marathon.tracks && marathon.tracks.length > 0 && (
					<div className="flex flex-wrap gap-2 mb-3">
						{marathon.tracks.map((track) => (
							<span
								key={track}
								className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
							>
								{track}
							</span>
						))}
					</div>
				)}

				{marathon.description && (
					<p className="text-gray-700 mb-4 line-clamp-3">
						{marathon.description}
					</p>
				)}

				<button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
					Mais informações
				</button>
			</div>
		</div>
	);
}
