"use client";
import { Marathon } from "@/types";
import { MarathonCard } from "./Card/Card";
import { useState } from "react";

interface HomeProps {
	marathons: Marathon[];
}

const options = [
	{ label: "Todas", value: "all" },
	{ label: "Maratona", value: "Marathon" },
	{ label: "Meia-Maratona", value: "Half Marathon" },
	{ label: "10K", value: "10K" },
	{ label: "5K", value: "5K" },
];

export function Home({ marathons }: Readonly<HomeProps>) {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");
	const filteredMarathons = marathons.filter((marathon) =>
		marathon.name?.toLowerCase().includes(search.toLowerCase()),
	);

	const filteredMarathonsByFilter = filteredMarathons.filter((marathon) =>
		filter === "all" ? true : marathon.tracks?.includes(filter),
	);

	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<div className="flex flex-row gap-2 items-center justify-center w-full">
				<input
					type="text"
					placeholder="Pesquisar"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full p-2 rounded-md border border-gray-300 max-w-md"
				/>
				<div className="flex  gap-2 items-center justify-center">
					<select
						name="filter"
						id="filter"
						className="p-2 rounded-md border border-gray-300"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					>
						{options.map((option) => (
							<option
								key={option.value}
								value={option.value}
								className="text-black"
							>
								{option.label}
							</option>
						))}
					</select>
				</div>
			</div>
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{filteredMarathonsByFilter.map((marathon) => (
					<MarathonCard key={marathon.id} marathon={marathon} />
				))}
			</section>
		</div>
	);
}
