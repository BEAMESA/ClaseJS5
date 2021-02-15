'use strict';


// Para crear un elemento al final del texto

const parrafo = document.createElement('p');

const contenido = document.createTextNode('este es mi nuevo parrafo');

parrafo.appendChild(contenido);

document.body.appendChild(parrafo);