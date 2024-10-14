var def_test = Array(

    // Array('Entidad','Campo','Numero Descripcion Test',Resultado esperado,'Mensaje'),
    // Array('personas','nombre_persona','1','tamaño < 6',false,'tamaño minino incorrecto'),
    // Array('personas','nombre_persona','2','tamaño > 50',false,'tamaño maximo incorrecto')


    //-----------------------------------------------------------
    //programa

    //id_programa
    Array('programa', 'id_programa', '0', 'Vacio', false, 'El ID no puede estar vacío.'),
    Array('programa', 'id_programa', '1', 'tamaño < 1 ', false, 'El ID debe ser mayor a 1.'),
    Array('programa', 'id_programa', '2', 'tamaño > 6', false, 'El ID debe ser menor a 6.'),
    Array('programa', 'id_programa', '3', 'Valor no numerico', false, 'Deben ser digitos.'),
    Array('programa', 'id_programa', '4', 'Digitos min 1 max 6', true, 'El ID del programa es valido.'),

    //nombre_programa
    Array('programa', 'nombre_programa', '5', 'Vacio', false, 'El nombre del programa no puede estar vacío.'),
    Array('programa', 'nombre_programa', '6', 'tamaño < 1 ', false, 'El nombre del programa debe ser mayor a 1.'),
    Array('programa', 'nombre_programa', '7', 'tamaño > 6', false, 'El nombre del programa debe ser menor a 6.'),
    Array('programa', 'nombre_programa', '8', 'Valor numerico', false, 'El nombre del programa no puede contener dígitos'),
    Array('programa', 'nombre_programa', '9', 'Caracter especial', false, 'El nombre del programa no puede contener un caracter especial.'),
    Array('programa', 'nombre_programa', '10', 'alfabéticos con acentos, ñ y espacios min 6 max 60', true, 'El nombre del programa del programa es valido.'),

    //acronimo_programa
    Array('programa', 'acronimo_programa', '11', 'Vacio', false, 'El acronimo no puede estar vacío.'),
    Array('programa', 'acronimo_programa', '12', 'tamaño < 3', false, 'El acronimo debe ser mayor a 3.'),
    Array('programa', 'acronimo_programa', '13', 'tamaño > 20', false, 'El acronimo debe ser menor a 20.'),
    Array('programa', 'acronimo_programa', '14', 'Valor numerico', false, 'El acronimo no puede contener un numero.'),
    Array('programa', 'acronimo_programa', '15', 'Acento', false, 'El acronimo no puede contener acentos.'),
    Array('programa', 'acronimo_programa', '16', 'Espacio', false, 'El acronimo no puede contener espacios en blanco.'),
    Array('programa', 'acronimo_programa', '17', 'Alfabeticos sin acentos ni espacios min 3 max 20', true, 'El acronimo del programa es valido'),

    //nombre_original_programa
    Array('programa', 'nombre_original_programa', '18', 'Vacio', false, 'El nombre original del programa no puede estar vacío.'),
    Array('programa', 'nombre_original_programa', '19', 'tamaño < 6', false, 'El nombre original del programa no puede ser menor a 6.'),
    Array('programa', 'nombre_original_programa', '20', 'tamaño > 60', false, 'El nombre original del programa no puede ser mayor a 60.'),
    Array('programa', 'nombre_original_programa', '21', 'Valor numerico', false, 'El nombre original del programa no puede contener numeros.'),
    Array('programa', 'nombre_original_programa', '22', 'Caracter especial', false, 'El nombre original del programa no puede contener un caracter especial.'),
    Array('programa', 'nombre_original_programa', '23', 'Alfabeticos con acentos, ñ y espacios min 6 max 60', true, 'El nombre original del programa es valido.'),

    //autor_programa
    Array('programa', 'autor_programa', '24', 'Vacio', false, 'El autor del programa no puede estar vacío.'),
    Array('programa', 'autor_programa', '25', 'tamaño < 6', false, 'El autor del programa debe ser mayor a 6.'),
    Array('programa', 'autor_programa', '26', 'tamaño > 50', false, 'El autor del programa debe ser menor a 50.'),
    Array('programa', 'autor_programa', '27', 'Valor numerico', false, 'El autor del programa no puede contener numeros.'),
    Array('programa', 'autor_programa', '28', 'Caracter especial', false, 'El autor del programa no puede contener un caracter especial.'),
    Array('programa', 'autor_programa', '29', 'Alfabeticos con acentos, ñ y espacios min 6 max 50', true, 'El autor del programa es valido.'),

    //autor_original_programa
    Array('programa', 'autor_original_programa', '30', 'Vacio', false, 'El autor original del programa no puede estar vacío.'),
    Array('programa', 'autor_original_programa', '31', 'tamaño < 6', false, 'El autor original del programa original no puede ser menor a 6.'),
    Array('programa', 'autor_original_programa', '32', 'tamaño > 50', false, 'El autor original del programa original no puede ser mayor a 50.'),
    Array('programa', 'autor_original_programa', '33', 'Valor numerico', false, 'El autor original del programa original no puede contener numeros.'),
    Array('programa', 'autor_original_programa', '34', 'Caracter especial', false, 'El autor original del programa original no puede contener un caracter especial.'),
    Array('programa', 'autor_original_programa', '35', 'Alfabeticos con acentos, ñ y espacios min 6 max 50', true, 'El autor original del programa original es valido.'),

    //ano_programa
    Array('programa', 'ano_programa', '36', 'Vacio', false, 'El año del programa no puede estar vacío.'),
    Array('programa', 'ano_programa', '37', 'tamaño < 4', false, 'El año del programa no puede ser menor a 4'),
    Array('programa', 'ano_programa', '38', 'tamaño > 4', false, 'El año del programa no puede ser mayor a 4'),
    Array('programa', 'ano_programa', '39', 'Valor no numerico', false, 'El año del programa debe ser un numero.'),
    Array('programa', 'ano_programa', '40', 'ano_programa>ano_actual', false, 'El año del programa no puede ser mayor al año actual.'),
    Array('programa', 'ano_programa', '41', 'Digitos 4 min 4 max, año no superior actual', true, 'El año del programa es valido.'),

    //ano_original_programa
    Array('programa', 'ano_original_programa', '42', 'Vacio', false, 'El año original del programa no puede estar vacío.'),
    Array('programa', 'ano_original_programa', '43', 'tamaño < 4', false, 'El año original del programa no puede ser menor a 4'),
    Array('programa', 'ano_original_programa', '44', 'tamaño > 4', false, 'El año original del programa no puede ser mayor a 4'),
    Array('programa', 'ano_original_programa', '45', 'Valor no numerico', false, 'El año original del programa debe ser un numero.'),
    Array('programa', 'ano_original_programa', '46', 'ano_original_programa>ano_actual', false, 'El año original del programa no puede ser mayor al año actual.'),
    Array('programa', 'ano_original_programa', '47', 'Digitos 4 min 4 max, año no superior actual', true, 'El año original del programa es valido.'),

    //requisitos_programa
    Array('programa', 'requisitos_programa', '48', 'Vacio', false, 'Los requisitos del programa no puede estar vacío.'),
    Array('programa', 'requisitos_programa', '49', 'tamaño < 6', false, 'El tamaño de los requisitos debe ser mayor a 6.'),
    Array('programa', 'requisitos_programa', '50', 'tamaño > 300', false, 'El tamaño de los requisitos debe ser mayor a 300.'),
    Array('programa', 'requisitos_programa', '51', 'Valor numerico', false, 'Los requisitos del programa no pueden contener numeros.'),
    Array('programa', 'requisitos_programa', '52', 'Caracter especial', false, 'Los requisitos del programa no puede contener caracteres especial.'),
    Array('programa', 'requisitos_programa', '53', 'Alfabeticos con acentos, ñ, espacios y signos de puntuacion min 6 max 300', true, 'Los requisitos del programa son validos.'),

    //poblacion_desde_programa
    Array('programa', 'poblacion_desde_programa', '54', 'Vacio', false, 'La poblacion desde programa no puede estar vacío.'),
    Array('programa', 'poblacion_desde_programa', '55', 'tamaño < 1', false, 'El tamaño de la poblacion desde programa no puede ser menor a 1.'),
    Array('programa', 'poblacion_desde_programa', '56', 'tamaño > 2', false, 'El tamaño de la poblacion desde programa no puede ser mayor a 2.'),
    Array('programa', 'poblacion_desde_programa', '57', 'Valor no numerico', false, 'La poblacion desde programa debe ser un numero.'),
    Array('programa', 'poblacion_desde_programa', '58', 'Digitos min 1 max 2', true, 'La poblacion desde programa es valida.'),

    //poblacion_hasta_programa
    Array('programa', 'poblacion_hasta_programa', '59', 'Vacio', false, 'La poblacion hasta programa no puede estar vacío.'),
    Array('programa', 'poblacion_hasta_programa', '60', 'tamaño < 1', false, 'El tamaño de la poblacion hasta programa no puede ser menor a 1.'),
    Array('programa', 'poblacion_hasta_programa', '61', 'tamaño > 2', false, 'El tamaño de la poblacion hasta programa no puede ser mayor a 2.'),
    Array('programa', 'poblacion_hasta_programa', '62', 'Valor no numerico', false, 'La poblacion hasta programa debe ser un numero.'),
    Array('programa', 'poblacion_hasta_programa', '63', 'Digitos min 1 max 2', true, 'La poblacion hasta programa es valida.'),

    //unidad_poblacion
    Array('programa', 'unidad_poblacion', '64', 'Vacio', false, 'La unidad poblacion no puede estar vacío.'),
    Array('programa', 'unidad_poblacion', '65', 'unidad_poblacion != ("MESES" || "AÑOS")', false, 'La unidad de poblacion debe ser "MESES" o "AÑOS".'),
    Array('programa', 'unidad_poblacion', '66', 'unidad_poblacion == ("MESES" || "AÑOS")', true, 'La unidad de poblacion es valida.'),

    //tipo_programa
    Array('programa', 'tipo_programa', '67', 'Vacio', false, 'El tipo de programa no puede estar vacío.'),
    Array('programa', 'tipo_programa', '68', 'tipo_programa != ("EVALUACIÓN || "INTERVENCIÓN || "EVALUACIÓN E INTERVENCIÓN")', false, 'El tipo de programa solo puede tener valores: "EVALUACIÓN","INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN".'),
    Array('programa', 'tipo_programa', '69', 'tipo_programa == ("EVALUACIÓN || "INTERVENCIÓN || "EVALUACIÓN E INTERVENCIÓN")', true, 'El tipo de programa es valido.'),

    //tiempo_aplicacion_programa
    Array('programa', 'tiempo_aplicacion_programa', '70', 'Vacio', false, 'El tiempo de aplicacion del programa no puede estar vacío.'),
    Array('programa', 'tiempo_aplicacion_programa', '71', 'tamaño < 1', false, 'El tamaño del tiempo de aplicacion del programa debe ser mayor a 1 digito.'),
    Array('programa', 'tiempo_aplicacion_programa', '72', 'tamaño > 4', false, 'El tamaño del tiempo de aplicacion del programa debe ser menor a 4 digitos.'),
    Array('programa', 'tiempo_aplicacion_programa', '73', 'Valor no numerico', false, 'El tiempo de aplicacion del programa debe ser un numero.'),
    Array('programa', 'tiempo_aplicacion_programa', '74', 'Digitos min 1 max 4', true, 'El tiempo de aplicacion del programa es valido.'),

    //descrip_interp_programa
    Array('programa', 'descrip_interp_programa', '75', 'Vacio', false, 'La descripcion e interpretacion del programa no puede estar vacío.'),
    Array('programa', 'descrip_interp_programa', '76', 'tamaño < 100', false, 'El tamaño de la descripcion e interpretacion del programa debe ser mayor a 100 caracteres.'),
    Array('programa', 'descrip_interp_programa', '77', 'tamaño > 5000', false, 'El tamaño de la descripcion e interpretacion del programa debe ser menor a 5000 caracteres.'),
    Array('programa', 'descrip_interp_programa', '78', 'Valor numerico', false, 'La descripcion e interpretacion del programa no puede contener numeros.'),
    Array('programa', 'descrip_interp_programa', '79', 'Caracter especial', false, 'La descripcion e interpretacion del programa no puede contener un caracter especial.'),
    Array('programa', 'descrip_interp_programa', '80', 'Alfabeticos con acentos, ñ, espacios, signos de puntuacion y retornos de carro min 100 max 5000', true, 'La descripcion e interpretacion del programa es correcto.'),

    //fichero_programa
    Array('programa', 'fichero_programa', '81', 'Vacio', false, 'El fichero del programa no puede estar vacío.'),
    Array('programa', 'fichero_programa', '82', 'tamaño < 7', false, 'El tamaño del fichero del programa debe ser mayor a 7.'),
    Array('programa', 'fichero_programa', '83', 'tamaño > 60', false, 'El tamaño del fichero del programa debe ser menor a 60.'),
    Array('programa', 'fichero_programa', '84', 'Contiene acento', false, 'El fichero del programa no puede contener acentos.'),
    Array('programa', 'fichero_programa', '85', 'Contiene ñ', false, 'El fichero del programa no puede contener la letra ñ.'),
    Array('programa', 'fichero_programa', '86', 'Contiene espacio', false, 'El fichero del programa no puede contener un espacio.'),
    Array('programa', 'fichero_programa', '87', 'Alfabeticos sin acentos ni ñ ni espacios min 7 max 60', true, 'El fichero del programa es valido.'),

    //enlace_programa
    Array('programa', 'enlace_programa', '88', 'Vacio', false, 'El enlacen no puede estar vacío.'),
    Array('programa', 'enlace_programa', '89', 'tamaño < 10', false, 'El tamaño del enlace debe ser mayor a 10.'),
    Array('programa', 'enlace_programa', '90', 'tamaño > 100', false, 'El tamaño del enlace debe ser menor a 100.'),
    Array('programa', 'enlace_programa', '91', 'Acento', false, 'El enlace no puede contener un acento.'),
    Array('programa', 'enlace_programa', '92', 'Contiene ñ', false, 'El enlace no puede contener ñ.'),
    Array('programa', 'enlace_programa', '93', 'Contiene espacio', false, 'El enlace no puede contener un espacio.'),
    Array('programa', 'enlace_programa', '94', 'Caracter especial diferente a ":","/" o "."', false, 'El enlace solo puede contener los caracteres especiales ":","/" o ".".'),
    Array('programa', 'enlace_programa', '95', 'Alfabeticos y : y / y . sin acentos ni ñ ni espacios min 10 max 100', true, 'El enlace es valido.'),

    //formato_programa
    Array('programa', 'formato_programa', '96', 'Vacio', false, 'El formato del programa no puede estar vacío.'),
    Array('programa', 'formato_programa', '97', 'formato_programa != ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")', false, 'El formato del programa solo admite los valores "PAPEL", "ELECTRONICO" o "PAPEL Y ELECTRONICO".'),
    Array('programa', 'formato_programa', '98', 'formato_programa == ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")', true, 'El formato del programa es valido.'),

    //modo_correccion_programa
    Array('programa', 'modo_correccion_programa', '99', 'Vacio', false, 'El modo corrección del programa no puede estar vacío.'),
    Array('programa', 'modo_correccion_programa', '100', 'modo_correccion_programa != ("PAPEL || "ELECTRÓNICO" || "PAPEL Y ELECTRÓNICO")', false, 'El modo correccion del programa solo admite los valores "PAPEL", "ELECTRONICO" o "PAPEL Y ELECTRONICO".'),
    Array('programa', 'modo_correccion_programa', '101', 'modo_correccion_programa == ("PAPEL || "ELECTRÓNICO" || "PAPEL Y ELECTRÓNICO")', true, 'El modo correccion del programa es valido.'),

    //modo_aplicacion_programa
    Array('programa', 'modo_aplicacion_programa', '102', 'Vacio', false, 'El modo aplicación del programa no puede estar vacío.'),
    Array('programa', 'modo_aplicacion_programa', '103', 'modo_aplicacion_programa != ("INDIVIDUAL || "COLECTIVO" || "INDIVIDUAL Y COLECTIVO")', false, 'El modo aplicacion del programa solo admite los valores "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO    ".'),
    Array('programa', 'modo_aplicacion_programa', '104', 'modo_aplicacion_programa == ("INDIVIDUAL || "COLECTIVO" || "INDIVIDUAL Y COLECTIVO")', true, 'El modo aplicacion del programa es valido.'),

    //imagen_programa
    Array('programa', 'imagen_programa', '105', 'Vacio', false, 'La imagen del programa no puede estar vacío.'),
    Array('programa', 'imagen_programa', '106', 'tamaño < 7', false, 'La imagen del programa debe ser mayor a 7.'),
    Array('programa', 'imagen_programa', '107', 'tamaño > 60', false, 'La imagen del programa debe ser menor a 60.'),
    Array('programa', 'imagen_programa', '108', 'acento', false, 'La imagen del programa no puede contener acentos.'),
    Array('programa', 'imagen_programa', '109', 'Contiene ñ', false, 'La imagen del programa no puede contener ñ.'),
    Array('programa', 'imagen_programa', '110', 'Contiene espacio', false, 'La imagen del programa no puede contener espacios.'),
    Array('programa', 'imagen_programa', '111', 'Alfabeticos sin acentos ni ñ ni espacios min 7 max 60', true, 'La imagen del programa es valida.'),

    //-----------------------------------------------------------
    //publicacion

    //id_programa
    Array('publicacion', 'id_publicacion', '112', 'Vacio', false, 'El ID no puede estar vacío.'),
    Array('publicacion', 'id_publicacion', '113', 'tamaño < 1 ', false, 'El ID debe ser mayor a 1.'),
    Array('publicacion', 'id_publicacion', '114', 'tamaño > 6', false, 'El ID debe ser menor a 6.'),
    Array('publicacion', 'id_publicacion', '115', 'Valor no numerico', false, 'Deben ser digitos.'),
    Array('publicacion', 'id_publicacion', '116', 'Digitos min 1 max 6', true, 'El ID es valido.'),

    //titulo_publicacion
    Array('publicacion', 'titulo_publicacion', '117', 'Vacio', false, 'El titulo no puede estar vacío.'),
    Array('publicacion', 'titulo_publicacion', '118', 'tamaño < 6', false, 'El titulo no puede ser menor a 6.'),
    Array('publicacion', 'titulo_publicacion', '119', 'tamaño > 80', false, 'El titulo no puede ser mayor a 80.'),
    Array('publicacion', 'titulo_publicacion', '120', 'Valor numerico', false, 'El titulo no puede contener números.'),
    Array('publicacion', 'titulo_publicacion', '121', 'Alfabéticos con acentos, ñ y espacios min 6 max 80', true, 'El titulo es valido.'),

    //autor_publicacion
    Array('publicacion', 'autor_publicacion', '122', 'Vacio', false, 'El titulo no puede estar vacío.'),
    Array('publicacion', 'autor_publicacion', '123', 'tamaño < 6', false, 'El titulo no puede ser menor a 6.'),
    Array('publicacion', 'autor_publicacion', '124', 'tamaño > 40', false, 'El titulo no puede ser mayor a 80.'),
    Array('publicacion', 'autor_publicacion', '125', 'Valor numerico', false, 'El titulo no puede contener números.'),
    Array('publicacion', 'autor_publicacion', '126', 'Alfabéticos con acentos, ñ y espacios min 6 max 40', true, 'El titulo es valido.'),

    //fecha_publicacion
    Array('publicacion', 'fecha_publicacion', '127', 'Vacio', false, 'La fecha publicacion no puede estar vacío.'),
    Array('publicacion', 'fecha_publicacion', '128', 'Formato Inválido', false, 'La fecha publicacion debe ser de tipo dd/mm/aaaa'),
    Array('publicacion', 'fecha_publicacion', '129', 'dd/mm/aaaa', true, 'La fecha publicacion es válida.'),

    //area_publicacion
    Array('publicacion', 'area_publicacion', '130', 'Vacio', false, 'El área publicación no puede estar vacío.'),
    Array('publicacion', 'area_publicacion', '131', 'tamaño < 1 ', false, 'El área publicación debe ser mayor a 1.'),
    Array('publicacion', 'area_publicacion', '132', 'tamaño > 6', false, 'El área publicación debe ser menor a 6.'),
    Array('publicacion', 'area_publicacion', '133', 'Valor no numerico', false, 'Deben ser digitos.'),
    Array('publicacion', 'area_publicacion', '134', 'Digitos min 1 max 6', true, 'El área publicación es valido.'),

    //texto_publicacion
    Array('publicacion', 'texto_publicacion', '135', 'Vacio', false, 'El texto publicación no puede estar vacío.'),
    Array('publicacion', 'texto_publicacion', '136', 'tamaño < 30', false, 'El texto publicación no puede ser menor a 30.'),
    Array('publicacion', 'texto_publicacion', '137', 'tamaño > 8000', false, 'El texto publicación no puede ser mayor a 8000.'),
    Array('publicacion', 'texto_publicacion', '138', 'Cualquier ascii min 30 max 8000', true, 'El texto publicación es válido.'),

    //imagen_publicacion
    Array('publicacion', 'imagen_publicacion', '139', 'Vacio', false, 'La imagen de la publicación no puede estar vacío.'),
    Array('publicacion', 'imagen_publicacion', '140', 'tamaño < 7', false, 'La imagen de la publicación debe ser mayor a 7.'),
    Array('publicacion', 'imagen_publicacion', '141', 'tamaño > 50', false, 'La imagen de la publicación debe ser menor a 50.'),
    Array('publicacion', 'imagen_publicacion', '142', 'acento', false, 'La imagen de la publicación no puede contener acentos.'),
    Array('publicacion', 'imagen_publicacion', '143', 'Contiene ñ', false, 'La imagen de la publicación no puede contener ñ.'),
    Array('publicacion', 'imagen_publicacion', '144', 'Contiene espacio', false, 'La imagen de la publicación no puede contener espacios.'),
    Array('publicacion', 'imagen_publicacion', '145', 'Alfabeticos sin acentos ni ñ ni espacios min 7 max 60', true, 'La imagen de la publicación es valida.'),




);