import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import dev from "../dev";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {


	return (
		<div className="vh-100 ">
			<div className="container ">
				<Header />

				<div className="row">
					video aqui
				</div>

				<div className="row">
					História
				</div>

				<div className="row">
					Objetivos
				</div>

				<div className="row">
					Download
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Home;
