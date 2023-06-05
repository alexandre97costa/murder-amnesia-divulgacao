import React, { useEffect } from "react";
import dev from "./dev";

import Header from "./Components/Header";

function App() {

	useEffect(() => {
		dev.log("✅ App()");
		dev.log(
			"%cÉ normal que as mensagens apareçam 2x!",
			"background-color: brown; color: gold; padding: 0 0.5rem;",
			"\nhttps://reactjs.org/docs/strict-mode.html"
		);
	}, []);

	return (
		<div className="text-bg-dark vh-100">
		<div className="container">
			<Header/>

			<div className="row text-bg-light">
			a
			</div>
		</div>
		</div>
	);
}

export default App;
