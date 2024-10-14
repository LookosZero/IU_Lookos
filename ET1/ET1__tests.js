<script type="text/javascript">
def_test_ = Array(
    //id_programa
    Array('id_programa',1,'tamaño<1',false,'El ID del programa no puede ser menor a 1.'),
    Array('id_programa',2,'tamaño>6',false,'El ID del programa no puede ser mayor a 6'),
    Array('id_programa',3,'Valor no numerico',false,'Deben ser numeros.'),
    Array('id_programa',4,'Digitos min 1 max 6',true,'El ID del programa es valido.'),

    //nombre_programa
    Array('nombre_programa',1,'tamaño<6',false,'El nombre del programa no puede ser menor a 6.'),
    Array('nombre_programa',2,'tamaño>60',false,'El nombre del programa no puede ser mayor a 60.'),
    Array('nombre_programa',3,'Valor numerico',false,'El nombre del programa no puede contener numeros.'),
    Array('nombre_programa',4,'Caracter especial',false,'El nombre del programa no puede contener un caracter especial.'),
    Array('nombre_programa',5,'Alfabeticos con acentos, ñ y espacios min 6 max 60',true,'El nombre del programa es valido.'),

    //acronimo_programa
    Array('acronimo_programa',1,'tamaño<3',false,'El acronimo no puede ser menor a 3.'),
    Array('acronimo_programa',2,'tamaño>20',false,'El acronimo no puede ser mayor a 20.'),
    Array('acronimo_programa',3,'Valor numerico',false,'El acronimo no puede contener un numero.'),
    Array('acronimo_programa',4,'Acento',false,'El acronimo no puede contener acentos.'),
    Array('acronimo_programa',5,'Espacio',false,'El acronimo no puede contener espacios en blanco.'),
    Array('acronimo_programa',6,'Alfabeticos sin acentos ni espacios min 3 max 20',true,'El acronimo del programa es valido'),

    //nombre_original_programa
    Array('nombre_original_programa',1,'tamaño<6',false,'El nombre original del programa no puede ser menor a 6.'),
    Array('nombre_original_programa',2,'tamaño>60',false,'El nombre original del programa no puede ser mayor a 60.'),
    Array('nombre_original_programa',3,'Valor numerico',false,'El nombre original del programa no puede contener numeros.'),
    Array('nombre_original_programa',4,'Caracter especial',false,'El nombre original del programa no puede contener un caracter especial.'),
    Array('nombre_original_programa',5,'Alfabeticos con acentos, ñ y espacios min 6 max 60',true,'El nombre original del programa es valido.'),

    //autor_programa
    Array('autor_programa',1,'tamaño<6',false,'El autor del programa no puede ser menor a 6.'),
    Array('autor_programa',2,'tamaño>50',false,'El autor del programa no puede ser mayor a 50.'),
    Array('autor_programa',3,'Valor numerico',false,'El autor del programa no puede contener numeros.'),
    Array('autor_programa',4,'Caracter especial',false,'El autor del programa no puede contener un caracter especial.'),
    Array('autor_programa',5,'Alfabeticos con acentos, ñ y espacios min 6 max 50',true,'El autor del programa es valido.'),

    //autor_original_programa
    Array('autor_original_programa',1,'tamaño<6',false,'El autor del programa original no puede ser menor a 6.'),
    Array('autor_original_programa',2,'tamaño>50',false,'El autor del programa original no puede ser mayor a 50.'),
    Array('autor_original_programa',3,'Valor numerico',false,'El autor del programa original no puede contener numeros.'),
    Array('autor_original_programa',4,'Caracter especial',false,'El autor del programa original no puede contener un caracter especial.'),
    Array('autor_original_programa',5,'Alfabeticos con acentos, ñ y espacios min 6 max 50',true,'El autor del programa original es valido.'),

    //ano_programa
    Array('ano_programa',1,'tamaño<4',false,'El año del programa no puede ser menor a 4'),
    Array('ano_programa',2,'tamaño>4',false,'El año del programa no puede ser mayor a 4'),
    Array('ano_programa',3,'Valor no numerico',false,'El año del programa debe ser un numero.'),
    Array('ano_programa',4,'ano_programa>ano_actual',false,'El año del programa no puede ser mayor al año actual.'),
    Array('ano_programa',5,'Digitos 4 min 4 max, año no superior actual',true,'El año del programa es valido.'),

    //ano_original_programa
    Array('ano_original_programa',1,'tamaño<4',false,'El año original del programa no puede ser menor a 4'),
    Array('ano_original_programa',2,'tamaño>4',false,'El año original del programa no puede ser mayor a 4'),
    Array('ano_original_programa',3,'Valor no numerico',false,'El año original del programa debe ser un numero.'),
    Array('ano_original_programa',4,'ano_original_programa>ano_actual',false,'El año original del programa no puede ser mayor al año actual.'),
    Array('ano_original_programa',5,'Digitos 4 min 4 max, año no superior actual',true,'El año original del programa es valido.'),

    //requisitos_programa
    Array('requisitos_programa',1,'tamaño<6',false,'El tamaño de los requisitos debe ser mayor a 6.'),
    Array('requisitos_programa',2,'tamaño>300',false,'El tamaño de los requisitos debe ser mayor a 300.'),
    Array('requisitos_programa',3,'Valor numerico',false,'Los requisitos del programa no pueden contener numeros.'),
    Array('requisitos_programa',4,'Caracter especial',false,'Los requisitos del programa no puede contener caracteres especial.'),
    Array('requisitos_programa',5,'Alfabeticos con acentos, ñ, espacios y signos de puntuacion min 6 max 300',true,'Los requisitos del programa son validos.'),

    //poblacion_desde_programa
    Array('poblacion_desde_programa',1,'tamaño<1',false,'El tamaño de la poblacion desde programa no puede ser menor a 1.'),
    Array('poblacion_desde_programa',2,'tamaño>2',false,'El tamaño de la poblacion desde programa no puede ser mayor a 2.'),
    Array('poblacion_desde_programa',3,'Valor no numerico',false,'La poblacion desde programa debe ser un numero.'),
    Array('poblacion_desde_programa',4,'Digitos min 1 max 2',true,'La poblacion desde programa es valida.'),

    //poblacion_hasta_programa
    Array('poblacion_hasta_programa',1,'tamaño<1',false,'El tamaño de la poblacion hasta programa no puede ser menor a 1.'),
    Array('poblacion_hasta_programa',2,'tamaño>2',false,'El tamaño de la poblacion hasta programa no puede ser mayor a 2.'),
    Array('poblacion_hasta_programa',3,'Valor no numerico',false,'La poblacion hasta programa debe ser un numero.'),
    Array('poblacion_hasta_programa',4,'Digitos min 1 max 2',true,'La poblacion hasta programa es valida.'),

    //unidad_poblacion
    Array('unidad_poblacion',1,'unidad_poblacion != ("MESES" || "AÑOS")',false,'La unidad de poblacion debe ser "MESES" o "AÑOS".'),
    Array('unidad_poblacion',2,'unidad_poblacion == ("MESES" || "AÑOS")',true,'La unidad de poblacion es valida.'),

    //tipo_programa
    Array('tipo_programa',1,'tipo_programa != ("EVALUACIÓN || "INTERVENCIÓN || "EVALUACIÓN E INTERVENCIÓN")',false,'El tipo de programa solo puede tener valores: "EVALUACIÓN","INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN".'),
    Array('tipo_programa',2,'tipo_programa == ("EVALUACIÓN || "INTERVENCIÓN || "EVALUACIÓN E INTERVENCIÓN")',true,'El tipo de programa es valido.'),

    //tiempo_aplicacion_programa
    Array('tiempo_aplicacion_programa',1,'tamaño<1',false,'El tamaño del tiempo de aplicacion del programa debe ser mayor a 1 digito.'),
    Array('tiempo_aplicacion_programa',2,'tamaño>4',false,'El tamaño del tiempo de aplicacion del programa debe ser menor a 4 digitos.'),
    Array('tiempo_aplicacion_programa',3,'Valor no numerico',false,'El tiempo de aplicacion del programa debe ser un numero.'),
    Array('tiempo_aplicacion_programa',4,'Digitos min 1 max 4',true,'El tiempo de aplicacion del programa es valido.'),

    //descrip_interp_programa
    Array('descrip_interp_programa',1,'tamaño<100',false,'El tamaño de la descripcion e interpretacion del programa debe ser mayor a 100 caracteres.'),
    Array('descrip_interp_programa',2,'tamaño>5000',false,'El tamaño de la descripcion e interpretacion del programa debe ser menor a 5000 caracteres.'),
    Array('descrip_interp_programa',3,'Valor numerico',false,'La descripcion e interpretacion del programa no puede contener numeros.'),
    Array('descrip_interp_programa',4,'Caracter especial',false,'La descripcion e interpretacion del programa no puede contener un caracter especial.'),
    Array('descrip_interp_programa',5,'Alfabeticos con acentos, ñ, espacios, signos de puntuacion y retornos de carro min 100 max 5000',true,'La descripcion e interpretacion del programa es correcto.'),

    //fichero_programa
    Array('fichero_programa',1,'tamaño<7',false,'El tamaño del fichero del programa debe ser mayor a 7.'),
    Array('fichero_programa',2,'tamaño>60',false,'El tamaño del fichero del programa debe ser menor a 60.'),
    Array('fichero_programa',3,'Contiene acento',false,'El fichero del programa no puede contener acentos.'),
    Array('fichero_programa',4,'Contiene ñ',false,'El fichero del programa no puede contener la letra ñ.'),
    Array('fichero_programa',5,'Contiene espacio',false,'El fichero del programa no puede contener un espacio.'),
    Array('fichero_programa',6,'Alfabeticos sin acentos ni ñ ni espacios min 7 max 60',true,'El fichero del programa es valido.'),

    //enlace_programa
    Array('enlace_programa',1,'tamaño<10',false,'El tamaño del enlace debe ser mayor a 10.'),
    Array('enlace_programa',2,'tamaño>100',false,'El tamaño del enlace debe ser menor a 100.'),
    Array('enlace_programa',3,'Acento',false,'El enlace no puede contener un acento.'),
    Array('enlace_programa',4,'Contiene ñ',false,'El enlace no puede contener ñ.'),
    Array('enlace_programa',5,'Contiene espacio',false,'El enlace no puede contener un espacio.'),
    Array('enlace_programa',6,'Caracter especial diferente a ":","/" o "."',false,'El enlace solo puede contener los caracteres especiales ":","/" o ".".'),
    Array('enlace_programa',7,'Alfabeticos y : y / y . sin acentos ni ñ ni espacios min 10 max 100',true,'El enlace es valido.'),

    //formato_programa
    Array('formato_programa',1,'formato_programa != ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")',false,'El formato del programa solo admite los valores "PAPEL", "ELECTRONICO" o "PAPEL Y ELECTRONICO".'),
    Array('formato_programa',2,'formato_programa == ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")',true,'El formato del programa es valido.'),

    //modo_correccion_programa
    Array('modo_correccion_programa',1,'modo_correccion_programa != ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")',false,'El modo correccion del programa solo admite los valores "PAPEL", "ELECTRONICO" o "PAPEL Y ELECTRONICO".'),
    Array('modo_correccion_programa',2,'modo_correccion_programa == ("PAPEL || "ELECTRONICO" || "PAPEL Y ELECTRONICO")',true,'El modo correccion del programa es valido.'),

    //modo_aplicacion_programa
    Array('modo_aplicacion_programa',1,'modo_aplicacion_programa != ("INDIVIDUAL || "COLECTIVO" || "INDIVIDUAL Y COLECTIVO")',false,'El modo aplicacion del programa solo admite los valores "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO    ".'),
    Array('modo_aplicacion_programa',2,'modo_aplicacion_programa == ("INDIVIDUAL || "COLECTIVO" || "INDIVIDUAL Y COLECTIVO")',true,'El modo aplicacion del programa es valido.'),

    //imagen_programa
    Array('imagen_programa',1,'tamaño<7',false,'La imagen del programa debe ser mayor a 7.'),
    Array('imagen_programa',2,'tamaño>60',false,'La imagen del programa debe ser menor a 60.'),
    Array('imagen_programa',3,'acento',false,'La imagen del programa no puede contener acentos.'),
    Array('imagen_programa',4,'Contiene ñ',false,'La imagen del programa no puede contener ñ.'),
    Array('imagen_programa',5,'Contiene espacio',false,'La imagen del programa no puede contener espacios.'),
    Array('imagen_programa',6,'Alfabeticos sin acentos ni ñ ni espacios min 7 max 60',true,'La imagen del programa es valida.'),
);
</script> 