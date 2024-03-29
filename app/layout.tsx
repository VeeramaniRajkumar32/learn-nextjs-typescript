import type { Metadata } from "next";
import Header from "../components/Header";
import { Inter } from "next/font/google";
// import Monaco from "next/font/local/";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// const monaco = Monaco({
// 	src: './Monaco 400.ttf',
// 	display: 'swap',
//   })

export const metadata: Metadata = {
  title: "Veera Next App",
  description: "Generated by Veera next app",
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
					<main className="relative h-screen overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 dark:bg-gray-800">
						{children}
					</main>
				<Footer />
			</body>
		</html>
	);
}
