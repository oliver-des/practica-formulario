//VARIABLES
const formulario = document.querySelector('#formularioRegistro')

const nombre = document.querySelector('#nombre')
const apellidos = document.querySelector('#apellidos')
const regexNombreApellidos = /^[a-zñáéíóú]{3,}( [a-zñáéíóú]{3,})*$/i

const edad = document.querySelector('#edad')
const regexEdad = /^[1-9]{1,2}$/








//EVENTOS
formulario.addEventListener("submit", function (ev) {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const edadValida = validarEdad();

    if (!nombreValido || !apellidoValido || !edadValida) {
        ev.preventDefault();
    }
})










//FUNCIONES 
/* 1- Crear función que valide nombre */
function validarNombre() {

    if (nombre.value == '') {
        alert('El campo nombre es obligatorio');
        return false;
    } else if (!regexNombreApellidos.test(nombre.value)) {
        alert('Por favor introduzca un nombre valido');
        return false;
    } else {
        return true
    }
}

/* 2- Crear funcion que valide apellido */
function validarApellido() {

    if (apellidos.value == '') {
        alert('El campo apellidos es obligatorio');
        return false;
    } else if (!regexNombreApellidos.test(apellidos.value)) {
        alert('Por favor introduzca un apellido valido');
        return false;
    } else {
        return true
    }
}

/* 3- Crear funcion que valide edad */
function validarEdad() {
    const valorEdad = Number(edad.value);
    const minimo = Number(edad.min);
    const maximo = Number(edad.max);

    if (edad.value == '') {
        alert('El campo edad es obligatorio');
        return false;
    } else if (!regexEdad.test(edad.value)) {
        alert('Por favor introduzca una edad valida');
        return false;
    } else if (valorEdad < minimo || valorEdad > maximo) {
        alert('Por favor introduzca una edad valida')
        return false;
    } else {
        return true
    }
}
