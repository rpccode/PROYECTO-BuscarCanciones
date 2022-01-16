import *  as UI from "./interfaz.js";
import  API   from "./api.js";


UI.formulariobuscar.addEventListener('submit', buscarCancion);



function buscarCancion(e){
    e.preventDefault();



    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === ''|| cancion === '') {

        UI.DivMensaje.textContent = 'Error... Todos los campos son Obligatorios';
        UI.DivMensaje.classList.add('error');

        setTimeout(() => {
                UI.DivMensaje.textContent = '';
                UI.DivMensaje.classList.remove('error');
        }, 3000);
    }

    ///Consultar  Api

   const busqueda  =  new API(artista, cancion);

        
}