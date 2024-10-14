function ocultarInfo(){
	document.getElementById("informacion").style.display = "none";
}


function mostrarInfo(mensaje){
	document.getElementById("informacion").style.display = "block";
}

function sizeMinimo(id,minimo){
	let elemento;
	elemento = document.getElementById(id).value;
	if(elemento.length < minimo){
		return false;
	}else{
		return true;
	}
}

function sizeMaximo(id,maximo){
	let elemento;
	elemento = document.getElementById(id).value;
	if(elemento.length > maximo){
		return false;
	}else{
		return true;
	}
}

function mostrarMensaje(mensaje){



}

function comprobarFormulario(){



	
}