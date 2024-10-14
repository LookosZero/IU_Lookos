function comprobar_dni() {
    const dniInput = document.getElementById('id_dni');
    const dniValue = dniInput.value;
    const dniError = document.getElementById('dniError');

    // Expresión regular para verificar que el DNI tenga 8 dígitos y una letra
    const regex = /^\d{8}[A-Za-z]$/;

    if (dniValue === "") {
        alert("DNI vacío.");
        dniError.textContent = "Por favor, escribe un DNI.";
        return false;
    }

    if (dniValue.length !== 9) {
        alert("El DNI debe tener 8 dígitos seguidos por una letra.");
        dniError.textContent = "El DNI debe tener 8 dígitos seguidos por una letra.";
        dniInput.value = "";
        dniInput.focus();
        return false;
    }

    if (!regex.test(dniValue)) {
        alert("El DNI no está bien escrito.");
        dniError.textContent = "El DNI no está bien escrito.";
        dniInput.value = "";
        dniInput.focus();
        return false;
    }

    dniError.textContent = "";
    return true;
}
function comprobar_nombre_persona() {
    const nombreInput = document.getElementById('id_nombre_persona');
    const nombre = nombreInput.value;
    const patron = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ\s']+$/; // Expresión regular que permite espacios y apóstrofes

    var nombreError = document.getElementById("nombreError");

    if (nombre === "") {
        alert("Nombre vacío.");
        nombreError.textContent = "Por favor, escribe un nombre.";
        return false;
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
        nombreInput.value = "";
        nombreInput.focus();
        return false;
    }

    if (nombre.length > 50) {
        alert("El nombre es demasiado largo");
        nombreError.textContent = "El nombre es demasiado largo";
        nombreInput.value = "";
        nombreInput.focus();
        return false;
    }

    if (!patron.test(nombre)) {
        alert("El nombre no está bien escrito");
        nombreError.textContent = "El nombre no está bien escrito.";
        nombreInput.value = "";
        nombreInput.focus();
        return false;
    }

    nombreError.textContent = "";
    return true;
}
    function comprobar_apellido_persona(){
        var nombreInput = document.getElementById("id_apellidos_persona");
        var nombre = nombreInput.value;
        const patron = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+ [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
        var nombreError = document.getElementById("apellidosError");
        if (nombre === "") {
            alert("apellido vacío.");
            nombreError.textContent = "Por favor, escribe un apellido.";
            return false;
                }
        if(nombre.length < 3){
            alert("El apellido debe ser superior a 3");
            nombreError.textContent = "El apellido debe tener al menos 3 caracteres.";
            nombreInput.value = "";
            nombreInput.focus();
            return false;
        }
        if(nombre.length>50){
            alert("El apellido es demasiado largo");
            nombreError.textContent ="El apellido es demasiado largo";
            nombreInput.value ="";
            nombreInput.focus();
            return false;
        }
        if(!patron.test(nombre)){
            alert("El apellido no está bien escrito");
            nombreError.textContent = "El apellido no está bien escrito.";
                nombreInput.value= "";
                nombreInput.focus();
                return false;
            }
            nombreError.textContent = "";
        return true;
    }
    function comprobar_fechanac_persona() {
        const fechaNacimientoInput = document.getElementById('id_fechaNacimiento_persona');
        const fechaNacimientoValue = fechaNacimientoInput.value;
        const fechNacError = document.getElementById('fechNacError');
    
        if (fechaNacimientoValue === "") {
            alert("Fecha de nacimiento vacía.");
            fechNacError.textContent = "Por favor, selecciona una fecha de nacimiento.";
            return false;
        }
    
        // Convierte la cadena de fecha en un objeto Date
        const fechaNacimiento = new Date(fechaNacimientoValue);
        const fechaActual = new Date();
    
        // Verifica si la fecha es válida y no es mayor que la fecha actual
        if (isNaN(fechaNacimiento) || fechaNacimiento > fechaActual) {
            alert("La fecha de nacimiento no es válida o es futura.");
            fechNacError.textContent = "La fecha de nacimiento no es válida o es futura.";
            fechaNacimientoInput.value = "";
            fechaNacimientoInput.focus();
            return false;
        }
    
        fechNacError.textContent = "";
        return true;
    }
    
    
function comprobar_direccion_persona() {
    const codigoPostalInput = document.getElementById('id_direccion_persona');
    const codigoPostalValue = codigoPostalInput.value;
    const codigoPostalError = document.getElementById('direccionError');

    // Expresión regular para verificar que el código postal contenga solo números
    const regex = /^[0-9]+$/;

    if (codigoPostalValue === "") {
        alert("Código postal vacío.");
        codigoPostalError.textContent = "Por favor, escribe un código postal.";
        return false;
    }

    if (codigoPostalValue.length !== 5) {
        alert("El código postal debe tener exactamente 5 dígitos.");
        codigoPostalError.textContent = "El código postal debe tener exactamente 5 dígitos.";
        codigoPostalInput.value = "";
        codigoPostalInput.focus();
        return false;
    }

    if (!regex.test(codigoPostalValue)) {
        alert("El código postal no está bien escrito.");
        codigoPostalError.textContent = "El código postal solo puede contener números.";
        codigoPostalInput.value = "";
        codigoPostalInput.focus();
        return false;
    }
    codigoPostalError.textContent = "";
    return true;
}


function comprobar_telefono_persona() {
    const telefonoInput = document.getElementById('id_telefono_persona');
    const telefonoValue = telefonoInput.value;
    const telefonoError = document.getElementById('telefonoError');

    // Expresión regular para verificar que el número de teléfono contenga solo números
    const regex = /^[0-9]+$/;

    if (telefonoValue === "") {
        alert("Número de teléfono vacío.");
        telefonoError.textContent = "Por favor, escribe un número de teléfono.";
        return false;
    }

    if (telefonoValue.length !== 9) {
        alert("El número de teléfono debe tener exactamente 9 dígitos.");
        telefonoError.textContent = "El número de teléfono debe tener exactamente 9 dígitos.";
        telefonoInput.value = "";
        telefonoInput.focus();
        return false;
    }

    if (!regex.test(telefonoValue)) {
        alert("El número de teléfono no está bien escrito.");
        telefonoError.textContent = "El número de teléfono solo puede contener números.";
        telefonoInput.value = "";
        telefonoInput.focus();
        return false;
    }

    telefonoError.textContent = "";
    return true;
}
function comprobar_email_persona() {
    var emailInput = document.getElementById("id_email_persona");
    var email = emailInput.value;
    var emailError = document.getElementById("emailError");
    if (email === "") {
        alert("Escribe un email.");
                emailError.textContent = "Por favor, escribe un correo.";
                return false;
            }
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!patron.test(email)) {
        alert("El email no es válido.");
        emailError.textContent = "El email debe ser válido.";
        emailInput.value = "";
        emailInput.focus();
        return false;
    }
    emailError.textContent = "";
    return true;
}
function comprobar_foto_persona() {
    var inputFile = document.getElementById("id_foto_persona");
    var fileName = inputFile.value;
    var fotoError = document.getElementById("fotoError");

    if (fileName === "") {
        alert("Inserta una foto.");
        fotoError.textContent = "Por favor, selecciona una foto.";
        return false;
    }

     // Obtener la extensión del archivo
            var fileExtension = fileName.split('.').pop().toLowerCase();
            
            // Array de extensiones de archivo de imagen per    mitidas
            var allowedExtensions = ["jpg", "jpeg", "png", "gif"];
            
            // Verificar si la extensión del archivo está en la lista de extensiones permitidas
            if (allowedExtensions.indexOf(fileExtension) === -1) {
                alert("Por favor, selecciona un archivo de imagen válido (JPG, JPEG, PNG, GIF).");
                fotoError.textContent = "El formato de imagen no es válido";
                inputFile.value = ""; // Limpiar el campo de entrada de archivo
                inputFile.focus();
                return false;
            }
            

    fotoError.textContent = "";
    return true;
}
function comprobar_formulario(){
    var DNIValido = comprobar_dni();
    var nombreValido = comprobar_nombre();
    var apellidoValido = comprobar_apellido();
    var fechaValida = comprobar_fechanac();
    var direccionaValida = comprobar_direccion();
    var telefonoValido = comprobar_telefono();
    var emailValido = comprobar_email();
    var fotoValida = comprobar_foto();

    // Verificar si todas las validaciones son exitosas
    if (DNIValido &&  nombreValido && apellidoValido && fechaValida && direccionaValida && telefonoValido && emailValido && fotoValida) {
        return true; // Permitir el envío del formulario
    } else {
        return false; // Evitar el envío del formulario
    }
}


