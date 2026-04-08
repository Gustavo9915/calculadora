const pantalla = document.getElementById(`pantalla`);
function agregar(valor){
    pantalla.value += valor;
}
function limpiar(){
    pantalla.value = ``;
}
function borrar(){
    pantalla.value = pantalla.value.slice(0, -1);
}
function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch(error){
        pantalla.value = `Error`;
    }
}
function raiz(){
    try{
        pantalla.value = Math.sqrt(pantalla.value);
    }catch{
        pantalla.value = `Error`
    }
}
function porcentaje(){
    try{
        pantalla.value = pantalla.value / 100;
    }catch{
        pantalla.value = `Error`
    }
}
function cuadrado(){
    try{
        pantalla.value = Math.pow(pantalla.value, 2);
    }catch{
        pantalla.value = `Error`
    }
}
function cubo(){
    try{
        pantalla.value = Math.pow(pantalla.value, 3);
    }catch{
        pantalla.value = `Error`
    }
  
}