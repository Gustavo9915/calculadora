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

function ecuacion1(){
    let a = parseFloat(prompt("Ingresa el valor de A:"));
    let b = parseFloat(prompt("Ingresa el valor de B:"));

    if (a == 0){
        pantalla.value = "No es ecuacion";
        return;
    }

    let x = -b /a;
    pantalla.value = "x =" + x;
}

function ecuacion2(){
    let a = parseFloat(prompt("Ingresa el valor de A:"));
    let b = parseFloat(prompt("Ingresa el valor de B:"));
    let c = parseFloat(prompt("Ingresa el valor de C:"));

    let discriminante = b*b -4*a*c;

    if(discriminante < 0){
        pantalla.value = "Sin solucion real";
        return;
    }

    let x1 = (-b + Math.sqrt(discriminante)) / (2*a);
    let x2 = (-b + Math.sqrt(discriminante)) / (2*a);

    pantalla.value = `x1=${x1}, x2=${x2}`;
}