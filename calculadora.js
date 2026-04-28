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
         let resultado = eval(pantalla.value);
         pantalla.value = resultado;
         particulas(e);
    }catch{
        pantalla.value = "error"
    }
}
let colores = ["#1e1e2f", "#2c2c3e", "#3a3a55", "#222831"];
let i = 0;
setInterval(() => {
    document.body.style.background = colores[i];
    i = (i + 1) % colores.length;
}, 3000);
window.onload = () =>{
    const calc = document.querySelector(".calcular");
    calc.style.transform = "scale(0)";
    calc.style.opacity = "0";
    setTimeout(() => {
        calc.style.transition = "0.5s ease";
        calc.style.transform = "scale(1)";
        calc.style.opacity = "1";
    }, 100);
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

function absoluto(){
    pantalla.value = Math.abs(pantalla.value);
}

function raiz3(){
    pantalla.value = Math.cbrt(pantalla.value);
}

function aRadianes(grados){
    return grados * Math.PI / 100;
}
function seno(){
    let valor  = parseFloat(pantalla.value);
    pantalla.value = Math.sin(aRadianes(valor));
}
function coseno(){
    let valor = parseFloat(pantalla.value);
    pantalla.value = Math.cos(aRadianes(valor));
}
function tangente(){
    let valor = parseFloat(pantalla.value);
    pantalla.value = Math.tan(aRadianes(valor));
}
function agregarPI(){
    pantalla.value += Math.PI
}

function inverso(){
    pantalla.value = 1 / pantalla.value;
}
function exp(){
    pantalla.value = Math.exp(pantalla.value);
}
let memoria = 0;
function guardar(){
    memoria = parseFloat(pantalla.value);
}

function recuperar(){
    memoria.value = memoria;
}

function limpiarMemoria(){
    memoria = 0;
}

function cambiarSigno(){
    pantalla.value = -pantalla.value
}

function resolverSistema(metodo){
    let a1 = parseFloat (prompt("Ecuacion 1 : a"));
    let b1 = parseFloat(prompt("Ecuacion 1: b"));
    let c1 = parseFloat(prompt("Ecuacion 1 : c"));

    let a2 = parseFloat (prompt("Ecuacion 2 : a"));
    let b2 = parseFloat(prompt("Ecuacion 2: b"));
    let c2 = parseFloat(prompt("Ecuacion 2 : c"));

    let D = a1 * b2 - a2 * b1;
    if(D == 0){
        pantalla.value = "sin solucion unica";
        return;
    }

    let Dx = c1 * b2 - c2 * b1;
    let Dy = a1 * c2 - a2 * c1;

    let x = Dx / D
    let y = Dy / D

    if(metodo === "cramer"){
        pantalla.value = `cramer → x=${x}, y=${y} `;
    }

    else if(metodo === sustitucion){
        pantalla.value = `sustitucion → x=${x} y=${y}`;
    }

    else if(metodo === igualacion){
        pantalla.value = `igualacion → x=${x} y=${y}`;
    }
}

function combinacion(){
    let n = parseInt(prompt("n :"));
    let r = parseInt(prompt("r :"));

    function fact(x){
        let res = 1;
        for( let i = 1; i <= x; i++) res *= i;
        return res;
    }
    pantalla.value = fact(n) / fact(r) * fact(n - r);
}

function permunacion(){
    let n = parseInt(prompt("n :"));
    let r = parseInt(prompt("r :"));

    function fact(x){
        let res = 1;
        for( let i = 1; i <= x; i++) res *= i;
        return res;
    }
    pantalla.value = fact(n) / fact(n - r);
}

function modulo(){
    let a = parseFloat(prompt("Numero 1:"));
    let b = parseFloat(prompt("Numero 2:"));

    pantalla.value = a % b;
}
function redondeo(){
    let mun = parseFloat(pantalla.value);

    if (isNaN(mun)){
        pantalla.value = "Error";
        return;
    }
    pantalla.value = Math.round(mun);
}
let ultimoResultado = 0;
function calcular(){
    try{
        let res = eval(pantalla.value);
        ultimoResultado = res;
        pantalla.value = res; 
    }catch{
        pantalla.value = "Error"
    }
}
function usarAns(){
    pantalla.value += ultimoResultado;
}

function borrarHistorial(){
    document.getElementById("historial").innerHTML = "";
}
function copiar(){
    navigator.clipboard.writeText(pantalla.value);
}
function toggleSigno(){
    if (pantalla.value.startsWith("-")){
        pantalla.value = pantalla.value.slice(1);
    }else{
        pantalla.value = "-" + pantalla.value;
    }
}
function terminoGeneral() {
  let tipo = prompt("Tipo: aritmetica (a) o geometrica (g)");
  let n = parseInt(prompt("¿Qué término quieres (n)?"));

  if (tipo === "a") {
    let a1 = parseFloat(prompt("Primer término (a1):"));
    let d = parseFloat(prompt("Diferencia (d):"));

    let an = a1 + (n - 1) * d;
    pantalla.value = "a" + n + " = " + an;

  } else if (tipo === "g") {
    let a1 = parseFloat(prompt("Primer término (a1):"));
    let r = parseFloat(prompt("Razón (r):"));

    let an = a1 * Math.pow(r, (n - 1));
    pantalla.value = "a" + n + " = " + an;

  } else {
    pantalla.value = "Error";
  }
}