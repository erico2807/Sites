import "./back/style.scss"
import "./back/script.js"
import Home from "./Pages/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Profilubersicht from "./Pages/Profilubersicht.jsx";

function App() {


	return (
		<main className="Main-Page">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/Profile" element={<Profilubersicht/>}/>
			</Routes>

		</main>

	)};

export default App
