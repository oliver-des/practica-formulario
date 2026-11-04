/* TODO
- Mantener novalidate y comprobar en tu JavaScript que la edad esté entre edad.min y edad.max.
- El submit nunca se ejecuta...
- Acabar
*/



//VARIABLES
const formulario = document.querySelector('#formularioRegistro')

const nombre = document.querySelector('#nombre')
const apellidos = document.querySelector('#apellidos')
const regexNombreApellidos = /^[a-zñáéíóú]{3,}( [a-zñáéíóú]{3,})*$/gmi

const edad = document.querySelector('#edad')
const regexEdad = /^[1-9]{1,2}$/gm








//EVENTOS
formulario.addEventListener("submit", function (ev) {
    ev.preventDefault(); //previene la accion predeterminada del formulario(enviar)
    //console.log('Nombre ', nombre.value)----> prueba
    validarNombre()
    validarApellido()
    validarEdad()
})










//FUNCIONES 
/* 1- Crear función que valide nombre */
function validarNombre() {

    if (nombre.value == '') {
        alert('El campo nombre es obligatorio')
    } else if (!regexNombreApellidos.test(nombre.value)) {
        alert('Por favor introduzca un nombre valido')
    }
}

/* 2- Crear funcion que valide apellido */
function validarApellido() {

    if (apellidos.value == '') {
        alert('El campo apellidos es obligatorio')
    } else if (!regexNombreApellidos.test(apellidos.value)) {
        alert('Por favor introduzca un apellido valido')
    }
}

/* 3- Crear funcion que valide edad */
function validarEdad() {
    if (edad.value == '') {
        alert('El campo edad es obligatorio')
    } else if (!regexEdad.test(edad.value)) {
        alert('Por favor introduzca una edad valida')
    }

}
