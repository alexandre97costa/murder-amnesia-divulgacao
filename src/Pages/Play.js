import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import dev from "../dev";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import Game from '../../teste/index.html'


function Play() {


	return (
		<div className="vh-100">
			<div className="container">
				<Header />

				<div className="row text-bg-light">
					{/* <Game /> */}
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Play;
