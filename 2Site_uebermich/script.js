document.addEventListener("DOMContentLoaded", function() {
    // Variable für die Geschwindigkeit
    let geschwindigkeit = 0.5;

    // Partikel initialisieren
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            shape: { type: "circle" },
            size: { value: 3 },
            move: { speed: geschwindigkeit }, // Geschwindigkeit aus der Variable
            color: { value: "#ffffff" }
        }
    });

    // Funktion, um die Geschwindigkeit zu ändern
    window.aktualisiereGeschwindigkeit = function(neueGeschwindigkeit) {
        geschwindigkeit = neueGeschwindigkeit;

        // Partikel neu initialisieren mit der neuen Geschwindigkeit
        particlesJS("particles-js", {
            particles: {
                number: { value: 100 },
                shape: { type: "circle" },
                size: { value: 3 },
                move: { speed: geschwindigkeit }, // Neue Geschwindigkeit
                color: { value: "#ffffff" }
            }
        });
    };
});

const lieberbutton = document.getElementById("B1");
const boeserbutton = document.getElementById("B2");

function starteDownload(dateiname) {
    const link = document.createElement("a");
    link.href = dateiname;
    link.download = "ISTDASEINVIRUS";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function pretender() {
    const speed = 5;
    const verzögerung = 500;
    window.aktualisiereGeschwindigkeit(5); // Neue Geschwindigkeit: 5
    for (let index = 2; index <= 50; index++) {
        setTimeout(function() {
            window.aktualisiereGeschwindigkeit(index * speed); // Neue Geschwindigkeit: 5
        }, (index - 1) * verzögerung);
    }
}

boeserbutton.addEventListener("click", function() {
    pretender();

});

lieberbutton.addEventListener("click", function() {
    window.aktualisiereGeschwindigkeit(1);
});