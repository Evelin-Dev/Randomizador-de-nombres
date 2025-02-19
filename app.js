let nombres = [];



//Funcion del boton agregar amigo//
function agregarAmigo (){
    let nombre = document.getElementById("amigo").value;
   
    nombres.push(nombre);
    alert(`Agregaste a ${nombre}`)
    console.log(nombres)
} 
