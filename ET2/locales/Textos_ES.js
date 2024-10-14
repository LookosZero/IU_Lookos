let textos_ES = {

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'',
    'SQL_KO':'',
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'id_programa_es_nulo_KO':'No se ha enviado el ID',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'ERROR_UPLOAD_foto_programa_KO':'La foto de programa debe tener extension jpg o jpeg y tamaño menor de 200000',
    'controlador_invalido':'',
    'action_invalido':'',


    //atributos programa
    'id_programa': 'Identificación Programa',
    'nombre_programa': 'Nombre Programa',
    'acronimo_programa': 'Acrónimo Programa',
    'nombre_original_programa': 'Nombre Original Programa',
    'autor_programa': 'Autor Programa',
    'autor_original_programa': 'Autor Original Programa',
    'ano_programa': 'Año Programa',
    'ano_original_programa': 'Año Original Porgrama',
    'requisitos_programa': 'Requisitos Programa',
    'poblacion_desde_programa': 'Poblacion Desde Programa',
    'poblacion_hasta_programa': 'Poblacion Hasta Programa',
    'unidad_poblacion': 'Unidad Poblacion',
    'tipo_programa': 'Tipo Programa',
    'tiempo_aplicacion_programa': 'Tiempo Aplicación Programa',
    'descrip_interp_programa': 'Descripción Interpretación Programa',
    'fichero_programa': 'Fichero Programa',
    'enlace_programa': 'Enlace Programa',
    'formato_programa': 'Formato Programa',
    'modo_correccion_programa': 'Modo Corrección Programa',
    'modo_aplicacion_programa': 'Modo Aplicación Programa',
    'imagen_programa': 'Imagen Programa',

    //label atributos programa

    'label_id_programa':'Introduzca Identificación : ',
    'label_nombre_programa':'Introduzca Nombre : ',
    'label_acronimo_programa':'Introduzca Acronimo : ',
    'label_nombre_original_programa':'Introduzca Nombre Original : ',
    'label_autor_programa':'Introduzca Autor : ',
    'label_autor_original_programa':'Introduzca Autor Original : ',
    'label_ano_programa':'Introduzca Año : ',
    'label_ano_original_programa':'Introduzca Año Original : ',
    'label_acronimo_programa':'Introduzca Acronimo : ',
    'label_requisitos_programa':'Introduzca Requisitos : ',
    'label_poblacion_desde_programa':'Introduzca Poblacion Desde Programa : ',
    'label_poblacion_hasta_programa':'Introduzca Poblacion Hasta Programa : ',
    'label_unidad_poblacion':'Introduzca Unidad Poblacion : ',
    'label_tipo_programa':'Introduzca Tipo Programa : ',
    'label_tiempo_aplicacion_programa':'Introduzca Tiempo Aplicacion : ',
    'label_descrip_interp_programa':'Introduzca Descripción e Interpretación del Programa : ',
    'label_fichero_programa':'Introduzca Fichero Programa : ',
    'label_enlace_programa':'Introduzca Enlace Programa : ',
    'label_formato_programa':'Introduzca Formato Programa : ',
    'label_modo_correccion_programa':'Introduzca Modo Corrección Programa : ',
    'label_modo_aplicacion_programa':'Introduzca Modo Aplicación Programa : ',
    'label_imagen_programa':'Introduzca Imagen Programa : ',
    'label_nuevo_imagen_programa':'Introduzca Nueva Imagen Programa : ',

    // titulo general pagina programa
    
    'titulo_pagina_programa':'Gestión de Programas',

    // titulos formularios acciones

    "titulo_form_ADD_programa":"Incorporar un programa",
    "titulo_form_EDIT_programa":"Modicar programa",
    "titulo_form_DELETE_programa":"Confirmar borrar un programa",
    "titulo_form_SEARCH_programa":"Buscar un programa",
    "titulo_form_SHOWCURRENT_programa":"Ver detalle de un programa",

    // errores de formato de persona en front

    //id_programa
    "KO_id_programa_vacio": "El ID del programa no puede estar vacío.",
    "KO_id_programa_tam_min": "El ID del programa debe ser mayor a 1.",
    "KO_id_programa_tam_max": "El ID del programa debe ser menor a 6.",
    "KO_id_programa_digitos": "El ID del programa deben ser digitos.",

    //nombre_programa
    "KO_nombre_programa_vacio": "El nombre del programa no puede estar vacío.",
    "KO_nombre_programa_tam_min": "El nombre del programa debe ser mayor a 6.",
    "KO_nombre_programa_tam_max": "El nombre del programa debe ser menor a 60.",
    "KO_nombre_programa_alfabetico": "El nombre del programa solo puede contener letras.",

    //acronimo_programa
    "KO_acronimo_programa_vacio": "El acrónimo del programa no puede estar vacío.",
    "KO_acronimo_programa_tam_min": "El acrónimo del programa debe ser mayor a 3.",
    "KO_acronimo_programa_tam_max": "El acrónimo del programa debe ser menor a 20.",
    "KO_acronimo_programa_alfabetico": "El acrónimo del programa solo puede contener letras sin acentos ni espacios.",

    //nombre_original_programa
    "KO_nombre_original_programa_vacio": "El nombre original del programa no puede estar vacío.",
    "KO_nombre_original_programa_tam_min": "El nombre original del programa debe ser mayor a 6.",
    "KO_nombre_original_programa_tam_max": "El nombre original del programa debe ser menor a 60.",
    "KO_nombre_original_programa_alfabetico": "El nombre original del programa solo puede contener letras.",

    //autor_programa
    "KO_autor_programa_vacio": "El autor del programa no puede estar vacío.",
    "KO_autor_programa_tam_min": "El autor del programa debe ser mayor a 6.",
    "KO_autor_programa_tam_max": "El autor del programa debe ser menor a 50.",
    "KO_autor_programa_alfabetico": "El autor del programa solo puede contener letras.",

    //autor_original_programa
    "KO_autor_original_programa_vacio": "El autor del programa no puede estar vacío.",
    "KO_autor_original_programa_tam_min": "El autor del programa debe ser mayor a 6.",
    "KO_autor_original_programa_tam_max": "El autor del programa debe ser menor a 50.",
    "KO_autor_original_programa_alfabetico": "El autor del programa solo puede contener letras.",

    //ano_programa
    "KO_ano_programa_vacio": "El año del programa no puede estar vacío.",
    "KO_ano_programa_tam_min": "El año del programa debe ser de 4 dígitos.",
    "KO_ano_programa_tam_max": "El año del programa debe ser de 4 dígitos.",
    "KO_ano_programa_digitos": "El año del programa deben ser dígitos.",
    "KO_ano_programa_mayor_actual": "El año del programa no puede ser mayor al año actual.",

    //ano_original_programa
    "KO_ano_original_programa_vacio": "El año original del programa no puede estar vacío.",
    "KO_ano_original_programa_tam_min": "El año original del programa debe ser de 4 dígitos.",
    "KO_ano_original_programa_tam_max": "El año original del programa debe ser de 4 dígitos.",
    "KO_ano_original_programa_digitos": "El año original del programa deben ser dígitos.",
    "KO_ano_original_programa_mayor_actual": "El año original del programa no puede ser mayor al año actual.",

    //requisitos_programa
    "KO_requisitos_programa_vacio": "Los requisitos del programa no pueden estar vacíos.",
    "KO_requisitos_programa_tam_min": "Los requisitos del programa debe ser mayor a 6.",
    "KO_requisitos_programa_tam_max": "Los requisitos del programa debe ser mernor a 300.",
    "KO_requisitos_programa_caracter_no_permitido": "Para los requisitos del programa solo se permiten caracteres alfabéticos con ñ, espacios y signos de puntuación.",

    //poblacion_desde_programa
    "KO_poblacion_desde_programa_vacio": "La población desde programa no puede estar vacía.",
    "KO_poblacion_desde_programa_tam_min": "La población desde programa debe ser mayor a 1.",
    "KO_poblacion_desde_programa_tam_max": "La población desde programa debe ser menor a 2.",
    "KO_poblacion_desde_programa_digitos": "La población desde programa solo puede contener dígitos.",

    //poblacion_hasta_programa
    "KO_poblacion_hasta_programa_vacio": "La población hasta programa no puede estar vacía.",
    "KO_poblacion_hasta_programa_tam_min": "La población hasta programa debe ser mayor a 1.",
    "KO_poblacion_hasta_programa_tam_max": "La población hasta programa debe ser menor a 2.",
    "KO_poblacion_hasta_programa_digitos": "La población hasta programa solo puede contener dígitos.",

    //unidad_poblacion
    "KO_unidad_poblacion_vacio": "La unidad de población no puede estar vacía.",
    "KO_unidad_poblacion_invalido": "La unidad de población no permite ese valor.",

    //tipo_programa
    "KO_tipo_programa_vacio": "El tipo de programa no puede estar vacío.",
    "KO_tipo_programa_invalido": "El tipo de programa no permite ese valor.",

    //tiempo_aplicacion_programa
    "KO_tiempo_aplicacion_programa_vacio": "El tiempo de aplicación del programa no puede estar vacío.",
    "KO_tiempo_aplicacion_programa_tam_min": "El tiempo de aplicación del programa debe ser mayor a 1.",
    "KO_tiempo_aplicacion_programa_tam_max": "El tiempo de aplicación del programa debe ser menor a 4.",
    "KO_tiempo_aplicacion_programa_digitos": "El tiempo de aplicación del programa deben ser dígitos.",

    //descrip_interp_programa
    "KO_descrip_interp_programa_vacio": "La descripción e interpretación del programa no puede estar vacío.",
    "KO_descrip_interp_programa_tam_min": "La descripción e interpretación del programa debe ser mayor a 100.",
    "KO_descrip_interp_programa_tam_max": "La descripción e interpretación del programa debe ser menor a 5000",
    "KO_descrip_interp_programa_caracter_no_permitido": "La descripción e interpretación del programa solo permite letras con ñ, espacios, signos de puntuación y retornos de carro.",

    //fichero_programa
    "KO_fichero_programa_extension_invalida": "El fichero del programa solo acepta extensiones .pdf, .doc o .docx",
    "KO_fichero_programa_alfabetico": "El fichero del programa solo acepta letras sin ñ, ni acentos ni espacios.",
    "KO_fichero_programa_vacio": "El fichero del programa no puede estar vacío.",
    "KO_fichero_programa_tam_min": "El fichero del programa debe ser mayor a 7.",
    "KO_fichero_programa_tam_max": "El fichero del programa debe ser menor a 60.",

    //enlace_programa
    "KO_enlace_programa_vacio": "El enlace del programa no puede estar vacío.",
    "KO_enlace_programa_tam_min": "El enlace del programa debe ser mayor a 10.",
    "KO_enlace_programa_tam_max": "El enlace del programa debe ser menor a 100.",
    "KO_enlace_programa_caracter_no_permitido": "El enlace del programa no puede contener acentos, ñ ni espacios.",

    //formato_programa
    "KO_formato_programa_vacio": "El formato del programa no puede estar vacío.",
    "KO_formato_programa_invalido": "El formato del programa no permite ese valor.",

    //modo_correccion_programa
    "KO_modo_correccion_programa_vacio": "El modo corrección del programa no puede estar vacío.",
    "KO_modo_correccion_programa_invalido": "El modo corrección del programa no permite ese valor.",

    //modo_aplicacion_programa
    "KO_modo_aplicacion_programa_vacio": "El modo aplicación del programa no puede estar vacío.",
    "KO_modo_aplicacion_programa_invalido": "El modo aplicación no permite ese valor.",

    //imagen_programa
    "KO_imagen_programa_extension_invalida": "La extensión de la imagen solo puede ser .jpg o .jpeg",
    "KO_imagen_programa_alfabetico": "La imagen solo acepta letras sin ñ, ni acentos ni espacos.",
    "KO_imagen_programa_vacio": "La imagen no puede estar vacía.",
    "KO_imagen_programa_vacio": "La imagen no puede estar vacía.",
    "KO_imagen_programa_tam_min": "La imagen debe ser mayor a 7.",
    "KO_imagen_programa_tam_max": "La imagen debe ser menor a 60",


    //-------------------Publicacion--------------------------
    
    //Atributos Publicacion
    "id_publicacion": "Identificación Publicacion",
    "titulo_publicacion": "Título Publicacion",
    "autor_publicacion": "Autor Publicacion",
    "fecha_publicacion": "Fecha Publicacion",
    "area_publicacion": "Área Publicacion",
    "texto_publicacion": "Texto Publicacion",
    "imagen_publicacion": "Imagen Publicacion",

    //Label publicacion
    'label_id_publicacion':'Introduzca Identificación : ',
    'label_titulo_publicacion':'Introduzca Título : ',
    'label_autor_publicacion':'Introduzca Autor : ',
    'label_fecha_publicacion':'Introduzca Fecha : ',
    'label_area_publicacion':'Introduzca Área : ',
    'label_texto_publicacion':'Introduzca Texto : ',
    'label_imagen_publicacion':'Introduzca Imagen : ',
    'label_nuevo_imagen_publicacion':'Introduzca Nueva Imagen : ',

    // titulo general pagina publicacion
    
    'titulo_pagina_publicacion':'Gestión de publicaciones',

    // titulos formularios acciones

    "titulo_form_ADD_publicacion":"Incorporar una publicacion",
    "titulo_form_EDIT_publicacion":"Modicar publicacion",
    "titulo_form_DELETE_publicacion":"Confirmar borrar una publicacion",
    "titulo_form_SEARCH_publicacion":"Buscar una publicacion",
    "titulo_form_SHOWCURRENT_publicacion":"Ver detalle de una publicacion",

    // errores de formato de persona en front

    //id_publicacion
    "KO_id_publicacion_vacio":"El ID de la publicación no puede estar vacío.",
    "KO_id_publicacion_tam_min'":"El ID de la publicación debe ser mayor a 1 dígito.",
    "KO_id_publicacion_tam_max":"El ID de la publicación debe ser menor a 6 dígitos.",
    "KO_id_publicacion_digitos":"El ID de la publicación solo pueden ser dígitos.",

    //titulo_publicacion
    "KO_titulo_publicacion_vacio":"El título de la publicación no puede estar vacío.",
    "KO_titulo_publicacion_tam_min'":"El título de la publicación debe ser mayor a 6 caracteres.",
    "KO_titulo_publicacion_tam_max":"El título de la publicación debe ser menor a 80 caracteres.",
    "KO_titulo_publicacion_alfabetico":"El título de la publicación solo admite letras, con ñ, con espacios y con acentos.",

    //autor_publicacion
    "KO_autor_publicacion_vacio":"El autor de la publicación no puede estar vacío.",
    "KO_autor_publicacion_tam_min":"El autor de la publicación debe ser mayor a 6 caracteres.",
    "KO_autor_publicacion_tam_max":"El autor de la publicación debe ser menor a 40 caracteres.",
    "KO_autor_publicacion_alfabetico":"El autor de la publicación solo admite letras, con ñ, con espacios y con acentos.",

    //fecha_publicacion
    "KO_fecha_publicacion":"La fecha no puede ser inferior a la actual.",

    //area_publicacion
    "KO_area_publicacion_vacio":"El área publicación no puede estar vacío.",
    "KO_area_publicacion_tam_min":"El área publicación debe ser mayor a 1 dígito.",
    "KO_area_publicacion_tam_max":"El área publicación debe ser menor a 6 dígitos.",
    "KO_area_publicacion_digitos":"El área publicación solo pueden ser dígitos. ",

    //texto_publicacion
    "KO_texto_publicacion_vacio":"El área publicación no puede estar vacío.",
    "KO_texto_publicacion_tam_min":"El área publicación no puede se menor a 30.",
    "KO_texto_publicacion_tam_max":"El área publicación no puede ser mayor a 8000.",
    "KO_texto_publicacion_ascii":"El área publicación solo admite cualquier ascii.",

    //imagen_publicacion
    "KO_imagen_publicacion_extension_invalida":"La imagen de la publicación solo admite .jpg o .jpeg",
    "KO_imagen_publicacion_alfabetico":"La imagen de la publicación solo admite alfabéticos sin acentos, ni ñ, ni espacios en blanco.",
    "KO_imagen_publicacion_vacio":"La imagen de la publicación no puede estar vacío.",
    "KO_imagen_publicacion_tam_min":"La imagen de la publicación debe ser mayor a 7 caracteres.",
    "KO_imagen_publicacion_tam_max":"La imagen de la publicación debe ser menor a 50 caracteres.",




};

let traduccion = textos_ES;