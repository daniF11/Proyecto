  
let actividad = [
"CCTV",
"Alarmas",
"Redes de Datos",
"Redes Eléctricas",
"Desarrollo de Sofware",
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
    elemento.src = "img/cctv.png";
    let mensaje = `El día <b>${dias[0]}</b>, corresponde <b>${actividad[0]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;
    
}
function fMartes(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/alarmas.png";
    let mensaje = `El día <b>${dias[1]}</b>, corresponde <b>${actividad[1]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fMiercoles(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/reddatos.png";
    let mensaje = `El día <b>${dias[2]}</b>, corresponde <b>${actividad[2]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fJueves(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/redelectrica.png";
    let mensaje = `El día <b>${dias[3]}</b>, corresponde <b>${actividad[3]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fViernes(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/desarrollosoftware.png";
    let mensaje = `El día <b>${dias[4]}</b>, corresponde <b>${actividad[4]}</b>.`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;

}
function fSabado(){
    let elemento = document.getElementById("logo");
    elemento.src = "img/descanso.png";
    let mensaje = `El día <b>${dias[5]}</b>, <b style='color:red'>NO</b> se trabaja, día libre! ​🎉​😎​ .`;
    let descripcion= document.getElementById("descripcion");
    descripcion.innerHTML= mensaje;



}








