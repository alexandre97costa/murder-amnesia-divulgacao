import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import dev from "../dev";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Hero from "../Components/Hero";
import Objetivos from "../Components/Objetivos";
import Historia from "../Components/Historia";
import Download from "../Components/Download";
import Trailer from "../Components/Trailer";

function Home() {


	return (
		<div className="container">
			<Header />

			<div className="row align-items-center vh-100 bg-image">
				<Hero />
			</div>

			<div className="row align-items-center vh-100" id="historia">
				<Historia />
			</div>

			<div className="row align-items-center text-center" id="objetivos">
				<Objetivos />
			</div>

			<div className="row align-items-center mt-5 text-center" id="trailer">
				<Trailer />
			</div>

			<div className="row align-items-center text-center mt-5" id="download">
				<Download />
			</div>

			<Footer />	
		</div>
	);
}

export default Home;
