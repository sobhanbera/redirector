import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import {
	DEFAULT_PORTFOLIO_WEBSITE,
	REDIRECTOR_JSON_DATA_URL,
} from "../constants";

// this is a dynamic route and this will redirect the user to link if the dynamic link is valid
// or else this will act as its landing page
export default function Home() {
	const router = useRouter();
	// since the path contains / in it so we have to remove it first
	const path = router.asPath.toLowerCase().replace("/", "");
	// just to show the actual redirection link for few seconds till we are not doing it actually...
	const [finalLink, setFinalLink] = useState("Redirecting you very soon...");

	useEffect(() => {
		fetch(REDIRECTOR_JSON_DATA_URL, {
			cache: "no-cache",
		})
			.then((res) => res.json())
			.then((res) => {
				const link = res[path];

				if (link) {
					setFinalLink(`Redirecting you to ${link}`);
					window.location.href = link;
				} else {
					setFinalLink(
						`Redirecting you to ${DEFAULT_PORTFOLIO_WEBSITE}`
					);
					// by default always redirect to portfolio website or github profile
					window.location.href = DEFAULT_PORTFOLIO_WEBSITE;
				}
			})
			.catch((_err) => {
				setFinalLink(`Redirecting you to ${DEFAULT_PORTFOLIO_WEBSITE}`);
				// by default always redirect to portfolio website or github profile
				window.location.href = DEFAULT_PORTFOLIO_WEBSITE;
			});
	}, [path]);

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

			<p>{finalLink}</p>
		</div>
	);
}
