// app/layout.tsx
import React from 'react';
import Header from "./Header/Header.tsx";
import Main from './Main/Main.tsx';

interface RootLayoutProps {
		children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
		return (
				<>
					<Header />
					<Main>{children}</Main>
					{/*<Footer />*/}
				</>
		);
}
