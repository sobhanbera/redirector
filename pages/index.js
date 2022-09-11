import { useEffect } from "react";

import Head from "next/head";
import { DEFAULT_PORTFOLIO_WEBSITE } from "../constants";

export default function Home() {
	// this is the default landing page
	// and this page will redirect anybody to a predefined link
	useEffect(() => {
		window.location.href = DEFAULT_PORTFOLIO_WEBSITE;
	}, []);

	return (
		<div>
			<Head>
				<title>Sobhan Bera's Route Redirector</title>
				<meta
					name="description"
					content="Sobhan Bera | Portfolio Redirector"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<p>Redirecting you to portfolio website very soon...</p>
		</div>
	);
}
