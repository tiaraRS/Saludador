const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");

const form = document.querySelector("#saludador-form");

form.addEventListener("submit", event =>{
    mensaje = "Hola ";
    if(edad.value > 30){
        if(genero.value == "femenino"){
            mensaje = mensaje + "señora ";  
        }else{  
            mensaje = mensaje + "señor ";  
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
