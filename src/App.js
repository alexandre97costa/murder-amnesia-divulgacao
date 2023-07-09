import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import dev from "./dev";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Play from "./Pages/Play";
import Download from "./Pages/Download";

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
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route path="/play" element={<Play/>} />
				<Route path="/download" element={<Download/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
