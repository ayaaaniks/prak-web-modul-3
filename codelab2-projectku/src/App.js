import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import AboutUs from "./pages/aboutus";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
	return (
		<BrowserRouter>
			<div>
				<h1>Navbar</h1>
				<Navbar />
				<Hero />
				<Routes>
					<Route path="/pages/home" element={<Home />} />
					<Route path="/pages/aboutus" element={<AboutUs />} />
					<Route path="/pages/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
