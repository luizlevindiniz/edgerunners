import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});

export const viewport: Viewport = {
	initialScale: 1,
	width: "device-width",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

const siteConfig = {
	name: "EdgeRunners",
	description:
		"A running calendar for everyone who loves to run. Find your best track and join us.",
	url: "https://edgerunners.com.br",
} as const;

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Running", "Run", "EdgeRunners"],
	authors: [{ name: "Luiz Diniz" }],
	creator: "EdgeRunners",
	publisher: "EdgeRunners",
	applicationName: siteConfig.name,
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		site: "@edgerunners",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@edgerunners",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: siteConfig.url,
	},
	category: "sports",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
				<div id="app-outlet" className="flex min-h-full w-full justify-center">
					{children}
				</div>
			</body>
		</html>
	);
}
