

// const element = document.getElementById('boton');

// element.addEventListener('click', showMsg);

// function showMsg () {
//     console.log ('Función ejecutada');
// };



// Cuando se hace click en guardar aparece un alert

// const elemento = document.getElementById ('guardar');
// elemento.addEventListener('click', alerta);
// function alerta () {
//     alert ('el documento esta guardado');
// };


// cuando se pone el foco sobre el input del nombre el fondo se pondra de color

// const foco = document.getElementById('fondocolor');
// foco.addEventListener ('focusin', pint);
// function pint () {
//     foco.style.backgroundColor = '#ff0000';
// }


// cuando le quitemos el foco volver a cambiar de color

// const foco = document.getElementById('fondocolor');
// foco.addEventListener ('focusout', back);
// function back () {
//     foco.style.backgroundColor = 'white';
// }


// cuando escribamos voales en minuscula se pintaran de un color y  cuando esten en mayuscula de otro

const colores = document.getElementById ('letras');
colores.addEventListener ('keypress', color);
function color () {
    console.log (event)
    if (event.key === 'a' || event.key === 'e' || event.key === 'i' || event.key === 'o' || event.key === 'u') {
        colores.style.color = 'red'
    } else {
        colores.style.color = 'yellow'
}
}



// otra forma de los eventos ON escribir en el html onclick i declarar un nombre para la función

function alerta () {
    alert ('hola');
};


