import "../back/style.scss"
import "../back/script.js"

function Home() {


	return (
		<>
			<div name="scanlines"></div>

			<div class="intro-wrap">
				<div class="noise"></div>
				<div class="noise noise-moving"></div>

				<div class="play" data-splitting>Profilname</div>
				<div class="time">Sehenwurdigkeitssucher</div>
				<div class="recordSpeed">Punkte:  </div>
			</div>
		</>
	)
};

export default Home
