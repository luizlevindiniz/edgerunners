import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
