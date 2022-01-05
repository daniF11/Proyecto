  
let percha = [
"Polo Gris",
"Ceda Gris",
"Camisa F",
"Ceda Negra",
"Polo Negra",
"En éste día no se debería trabajar!"
];


let dias = [
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado"
];

function fLunes(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/camisagris.jpg";
    let mensaje = `El día <b>${dias[0]}</b>, corresponde <b>${percha[0]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;
    
}
function fMartes(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/buzogris.jpg";
    let mensaje = `El día <b>${dias[1]}</b>, corresponde <b>${percha[1]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fMiercoles(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/formal.jpg";
    let mensaje = `El día <b>${dias[2]}</b>, corresponde <b>${percha[2]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fJueves(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/buzonegro.jpg";
    let mensaje = `El día <b>${dias[3]}</b>, corresponde <b>${percha[3]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fViernes(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/camisanegra.jpg";
    let mensaje = `El día <b>${dias[4]}</b>, corresponde <b>${percha[4]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fSabado(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/dormir.png";
    let mensaje = `El día <b>${dias[5]}</b>, <b style='color:red'>NO</b> se debería trabajar <b>V:</b> .`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;



}








