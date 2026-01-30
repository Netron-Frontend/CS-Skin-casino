// app/layout.tsx
import React from 'react';
import Header from "./Header/Header.tsx";

interface RootLayoutProps {
		children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
		return (
				<>
					<Header />
					<main>{children}</main>
					{/*<Footer />*/}
				</>
		);
}
