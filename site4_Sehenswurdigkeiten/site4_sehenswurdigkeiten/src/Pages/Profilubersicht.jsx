import React, { useState } from 'react';
import "../back/style.scss";
import "../back/script.js";
import "../style/prof.css";
import Punkte from "../components/Point.jsx";
import NavbarProf from "../components/NavBarProf";

const Profilubersicht = () => {
	/* Anmeldungszustand!!!=> falls false--> dann ameldung verlangen*/
	const [name, setName] = useState("Eric");
	const [userName, setUserName] = useState("");
	const [point, setPoint] = useState(0);
	const [location, setLocation] = useState("");
	


	return (
		<>

			<div className="intro-wrap">
				<NavbarProf/>
				<div className="Profilub"> Welcome back {name} </div>
				<div className="Profilbody">
					<p className="Punkteubersicht">Current Score</p>
					<div className="PWert">
						<Punkte/>
					</div>
					
				</div>
				
				<div className="Profilbody">
					<p className="lastactivitys"> Last Activities</p>
					
					
				</div>


				

				
				
			</div>
		</>
	)
};
export default Profilubersicht;