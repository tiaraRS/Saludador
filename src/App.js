const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const idioma = document.querySelector("#idioma-input");

const form = document.querySelector("#saludador-form");

var fechaHoraActual = new Date();
var horaActual = fechaHoraActual.toLocaleTimeString('it-IT');

function getSaludoSegunTiempo(hora, mensajeMañana, mensajeTarde, mensajeNoche){
    saludoSegunTiempo = mensajeMañana;
    if (hora > '12:00:00' && hora < '18:30:00'){
        saludoSegunTiempo = mensajeTarde;
    }else if (hora > '18:30:00' && hora < '23:59:59'){
        saludoSegunTiempo = mensajeNoche;
    }
    return saludoSegunTiempo;
}

function getTituloPersonalSegunEdad(edad, mayor30F, mayor30M, mayor16F, mayor16M){
    var tituloPersonal = "";
    if(edad.value > 30){
        if(genero.value == "femenino"){
            tituloPersonal = tituloPersonal + mayor30F;  
        }else{  
            tituloPersonal = tituloPersonal + mayor30M;  
        }
    } else if (edad.value > 16) {
        if(genero.value == "femenino"){
            tituloPersonal = tituloPersonal + mayor16F;  
        }else{  
            tituloPersonal = tituloPersonal + mayor16M;  
        }
    }
    return tituloPersonal;
}

form.addEventListener("submit", event =>{
    if(idioma.value == "español"){
        console.log("in");
        mensaje = "Hola, " + getSaludoSegunTiempo(horaActual,"buenos días ","buenas tardes ","buenas noches ");
        mensaje = mensaje + getTituloPersonalSegunEdad(edad,"señora ","señor ","señorita ", "joven ");
    }
    else{
        mensaje = "Hello, " + getSaludoSegunTiempo(horaActual,"good morning ","good afternoon ","good night ");
        mensaje = mensaje + getTituloPersonalSegunEdad(edad,"Mrs. ","Mr. ","Miss ", "Mr. ");
    }
    
    alert(mensaje + nombre.value); 
})
