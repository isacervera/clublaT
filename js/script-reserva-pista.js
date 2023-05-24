// Obtener elementos DOM
const pagoSelect = document.getElementById('pago');
const jugadoresDiv = document.getElementById('jugadores');
const nombresDiv = document.getElementById('nombres_jugadores');
const dosjugadores = document.getElementById('2players');
const numjugadores = document.getElementById('num_jugadores');
const inputNombres = document.querySelectorAll("#nombres_jugadores input");
const pistasSelec = document.getElementById('pistasSelec');



pagoSelect.addEventListener('change', (event) => {
    const seleccion = event.target.value;

    if (seleccion === 'completo') {
        jugadoresDiv.classList.add('d-none');
        nombresDiv.classList.add('d-none');
    } else if (seleccion === 'parcial') {
        jugadoresDiv.classList.remove('d-none');
        nombresDiv.classList.remove('d-none');
    }
});
pistasSelec.addEventListener('change', (event) => {
    const pista = event.target.value;
    if (pista === "padel") {
        dosjugadores.classList.add('d-none');
        numjugadores.value = 4;
        inputNombres.forEach((input) => {
            input.removeAttribute("disabled");
        });
    } else {
        dosjugadores.classList.remove('d-none');
    }
});
numjugadores.addEventListener('change', (event) => {
    const jugadores = parseInt(event.target.value);
    console.log(jugadores);
    if (jugadores === 2) {
        inputNombres.forEach((input, index) => {
            if (index < 2) {
                input.removeAttribute("disabled");
            } else {
                input.setAttribute("disabled", true);
            }
        });
    } else if (jugadores === 4) {
        inputNombres.forEach((input) => {
            input.removeAttribute("disabled");
        });
    } else {
        inputNombres.forEach((input) => {
            input.setAttribute("disabled", true);
        });

    }

});