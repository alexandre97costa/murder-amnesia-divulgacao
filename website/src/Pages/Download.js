import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import dev from "../dev";

import Header from "../Components/Header";
import Footer from "../Components/Footer";


function Download() {


	return (
		<div className="vh-100">
			<div className="container">
				<Header />

				<div className="row text-bg-light">
					a<br/>
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Download;
