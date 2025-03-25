import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title:
		'Samdhatu | Discover the effect of Ayurveda on your health | Learn Ayurvedic principles',
	description:
		'An AI application that recommends food with Ayurvedic Knowledge!',
	openGraph: {
		title:
			'Samdhatu | Discover the effect of Ayurveda on your health | Learn Ayurvedic principles',
		description:
			'An AI application that recommends food with Ayurvedic Knowledge!',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
