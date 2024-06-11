
function validar(){
    validarVacio("nombre");
    validarVacio("apellido")
    validarVacio("email");
    validarLongitud,validarLongitud("telefono");
    validarVacio("direccion");
    validarVacio("usuario");
}
function validarVacio(idCampo){
    //REcupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //Recuperar valor del campo
    let valor = elemento.value;
    console.log(valor);
    let eParrafo = document.getElementById("p"+idCampo);
    if(valor.trim()==""){
        console.log("No hay nada")
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    }else{
        console.log("algo Hay")
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}
function validarLongitud(idCampo){
        let elemento = document.getElementById(idCampo);
        console.log(elemento);
        //Recuperar valor del campo
        let valor = elemento.value;
        console.log(valor);
        console.log(isNaN(valor))
        let eParrafo = document.getElementById("p"+idCampo);
        if(isNaN(valor)){//true si es un caracter
            eParrafo.innerText = "Debes ingresar un numero";
            eParrafo.style.display = "block";
        }
        else{
            if(valor.trim().length == 9 || valor.trim().length == 0 ){
                console.log("algo Hay")
                elemento.style.borderColor = "green";
                eParrafo.style.display = "none";
            }else{
                
                console.log("No hay nada")
                elemento.style.borderColor = "red";
                eParrafo.style.display = "block";
           
            }
        }
        
}
function cambiarContraste(){
    let eBody = document.body;
    let fondo = eBody.style.backgroundColor;
    let eform = document.getElementById("form");
    let elabels=document.getElementsByClassName("labels");
    let etitulos=document.getElementsByClassName("titulo");
    let eheader= document.getElementById("headers")

    
    if(fondo == "white"){
        eBody.style.backgroundColor = "black";
        for (let index = 0; index < elabels.length; index++) {
            const element = elabels[index];
            element.style.color = "white";
        }
        eform.style.backgroundColor="grey";

        for (let index = 0; index < etitulos.length; index++) {
            const element = etitulos[index];
            element.style.color = "white";
        }

        eheader.style.backgroundColor="grey";
    }else{
        eBody.style.backgroundColor = "white";
        for (let index = 0; index < elabels.length; index++) {
            const element = elabels[index];
            element.style.color = "black";
        }
        eform.style.backgroundColor="white";

        
        for (let index = 0; index < etitulos.length; index++) {
            const element = etitulos[index];
            element.style.color = "black";
        }
        

    }
    
}

function cambiarFuenteTamano(){
    const element = document.getElementById("tituloheader")
    element.classList.toggle(".cambiofuente1")
    element.classList.toggle(".cambiofuente2")
}
