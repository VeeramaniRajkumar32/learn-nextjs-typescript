import type { Metadata } from "next";
import Header from "../components/Header";
import { Inter } from "next/font/google";
// import Monaco from "next/font/local/";
import "./globals.css";

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
				<main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
					{children}
				</main>
			</body>
		</html>
	);
}
