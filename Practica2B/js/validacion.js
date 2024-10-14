function ocultarInfo() {
    var infoDiv = document.getElementById("infoDiv");
    infoDiv.style.display = "none";
}

function mostrarMensajeInfo(mensaje) {
    var infoDiv = document.getElementById("infoDiv");
    var infoMensaje = document.getElementById("infoMensaje");

    if (mensaje === "") {
        infoDiv.style.display = "none";
    } else {
        infoMensaje.textContent = mensaje;
        infoDiv.style.display = "block";
    }
}

function comprobarLetras(id){
	let elemento = document.getElementById(id).value;
	
	let patron = /^[a-zA-Z]+$/;

	return patron.test(elemento);

}


function comprobarLetrasNumeros(id){
	let elemento = document.getElementById(id).value;
	
	let patron = /^[a-zA-Z0-9]+$/;

	return patron.test(elemento);

}

function validarNombre(){

	errorNombre.textContent = "";
	let nombre = document.getElementById("nombre").value.trim();


	if(nombre.length < 1){
		errorNombre.textContent = "El nombre debe ser mayor a 1 letra.";
		return false;
	}

	if(nombre.length > 30){
		errorNombre.textContent = "El nombre debe ser menor a 30 letras.";
		return false;
	}
	if(!comprobarLetras("nombre")){
		errorNombre.textContent = "Solo se permiten letras.";
		return false;
	}

	return true;
}

function validarPasswd() {
	errorPasswd.textContent = "";
	let elemento = document.getElementById("passwd").value;

	let contieneNumero = /^[0-9]/.test(elemento);
	let contieneCaracterEspecial = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(elemento);


	if(!contieneNumero){
		errorPasswd.textContent = "Debe contener un numero.";
		return false;
	}
	if(!contieneCaracterEspecial){
		errorPasswd.textContent = "Debe contener un caracter especial.";
		return false;
	}
	if(elemento.length < 5){
		errorPasswd = "Debe ser mayor a 5 letras.";
		return false;
	}
	if(elemento.length > 20){
		errorPasswd = "Debe ser menor a 20 letras.";
		return false;
	}

	return true;
}

function validarImagen(){
	let extensionPermitida = /(\.jpg|\.png)$/i;
	let elemento = document.getElementById("fichero").value;

	if (extensionPermitida.test(nombreArchivo)) {
  		return true;
	} else {
  		return false;
	}
}

function validarTexto(){
	if(!sizeMinimo("texto"),10){
		alert("El texto debe ser mayor a 10.")
		return false;
	}

	return true;
}

function validarFormulario(){
	return(
		validarNombre() &&
		validarPasswd() &&
		validarImagen() &&
		validarTexto()
	);
}