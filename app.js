let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';


function intentoDeUsuario() {
    alert('El boton fue oprimido');
}

function selecionCiudadBrasil() {
     let ciudad = prompt('Escoge una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}

function alertaDeAmor() {
    alert(`Yo amo JS`);
}

function vamosASumar() {
    let suma1 = parseInt(prompt('Escoge un numero'));
    let suma2 = parseInt(prompt('Escoge el segundo numero'));
    let resultado = suma1 + suma2
    alert(`Tu resultado es ${suma1} + ${suma2} = ${resultado}`);
}