import "../back/style.scss"
import "../back/script.js"
import Punkte from "../components/Point.jsx"
import NavbarMenu from "../components/NavBar.jsx"
function Home() {


	return (
		<>
			<div name="scanlines"></div>

			<div className="intro-wrap">
				<div className="noise"></div>
				<div className="noise noise-moving">

				</div>

				<div className="play" > </div>
				<NavbarMenu />
				<div className="recordSpeed">
					<Punkte/>
				</div>
			</div>
		</>
	)
};

export default Home;
