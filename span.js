

// document.getElementsById ('boton').className = 'custom'

// document.getElementsById ('boton').remove("mystyle");





// function ocultar () {
//     document.getElementById('adicional').classList.remove ('oculto') 
// }


const boton = document.getElementById('boton'); 
boton,addEventListener('click', mostrar);

function mostrar () {
    document.getElementById('adicional').classList.remove('oculto')
};