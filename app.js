let nombres = [];



//Funcion del boton agregar amigo//
function agregarAmigo (){
    let nombre = document.getElementById("amigo").value;
    //condicion de campo vacio
    if (nombre === ""){
        asignarTexto("h2" ,"No puedes dejar el campo vacio");
        return;
    }else{
    nombres.push(nombre);
    asignarTexto("h2" ,`Agregaste a ${nombre}`);
    limpiarCaja("amigo");
    actualizarAmigos();

    console.log(nombres);
    return;
    }
} 


function actualizarAmigos() {
    let listaNombres = document.getElementById("listaAmigos");

    listaNombres.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

function sortearAmigo(){
    if(nombres.length === 0){
        asignarTexto("h2", "La lista se encuentra vacia")
        return;
    } else {
        let randomizador = Math.floor(Math.random()*nombres.length)
        let resultadoRandomizador = nombres [randomizador];
        asignarTexto("h2", `El nombre seleccionado es ${resultadoRandomizador}`);
        return;

    }
}


function limpiarCaja(variable){
    document.getElementById(variable).value = ""
}
function asignarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

asignarTexto("h2", "Digite el nombre de sus amigos");
