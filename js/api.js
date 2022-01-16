import * as UI from './interfaz.js';

 class API {

            constructor(artista, cancion){
                this.artista = artista;
                this.cancion = cancion;

                this.consultarApi();
            }


            consultarApi(){
                const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
                
                
                fetch(url).then( respuesta => respuesta.json())
                              .then( datos =>{
                                    const { lyrics }=datos;     
                                    
                                    if (datos.lyrics) {
                                          UI.DiivResultado.textContent = lyrics;
                                    UI.HedingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
                                    }else{
                                        UI.DivMensaje.textContent = 'Cancion no encontrada , pruebe con otra';
                                        UI.DivMensaje.classList.add('error');

                                        setTimeout(() => {
                                            UI.DivMensaje.textContent = '';
                                        UI.DivMensaje.classList.remove('error');
                                        }, 3000);
                                    }
                                  
                              })
                
            }

 }



export default API;