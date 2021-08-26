const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");

var fechaHoraActual = new Date();
var horaActual = fechaHoraActual.toLocaleTimeString('it-IT');

function getSaludoSegunTiempo(hora){
    saludoSegunTiempo = "buenos días ";
    if (hora > '12:00:00' && hora < '18:30:00'){
        saludoSegunTiempo = "buenas tardes ";
    }else if (hora > '18:30:00' && hora < '23:59:59'){
        saludoSegunTiempo = "buenos noches ";
    }
    return saludoSegunTiempo;
}


const form = document.querySelector("#saludador-form");

form.addEventListener("submit", event =>{
    mensaje = "Hola, " + getSaludoSegunTiempo(horaActual);
    if(edad.value > 30){
        if(genero.value == "femenino"){
            mensaje = mensaje + "señora ";  
        }else{  
            mensaje = mensaje + " señor ";  
        }
    } else if (edad.value > 16) {
        if(genero.value == "femenino"){
            mensaje = mensaje + "señorita ";  
        }else{  
            mensaje = mensaje + "joven ";  
        }
    }
    alert(mensaje + nombre.value); 
})
