class Gestion_programa extends GestionEntidad {

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD() {

        //this.resetearformprograma()
        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();

        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        // se coloca el onblur del id_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').setAttribute("readonly", "");

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');

        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');

        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa()');

        document.getElementById('autor_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_programa()');

        document.getElementById('autor_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_original_programa()');

        document.getElementById('ano_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_programa()');

        document.getElementById('ano_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_original_programa()');

        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa()');

        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa()');

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa()');

        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion()');

        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa()');

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa()');

        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa()');

        document.getElementById('nuevo_fichero_programa').setAttribute('onblur', 'Gestion_programa.comprobar_fichero_programa()');
        document.getElementById("label_fichero_programa").style.display = 'none';
        document.getElementById("fichero_programa").style.display = 'none';
        document.getElementById("link_fichero_programa").style.display = 'none';

        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa()');

        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa()');

        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa()');

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa()');

        document.getElementById('nuevo_imagen_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nuevo_imagen_programa()');
        document.getElementById("label_imagen_programa").style.display = 'none';
        document.getElementById("imagen_programa").style.display = 'none';
        document.getElementById("link_imagen_programa").style.display = 'none';

        // await this.peticionBackGeneral('', 'area', 'SEARCH')
        //     .then((respuesta) => {
        //         console.log(respuesta);
        //         let listaareas = respuesta['resource'];
        //         listaareas.forEach(element => {
        //             let opcion = document.createElement('option');
        //             opcion.value = element['id_area'];
        //             opcion.innerHTML = element['nombre_area'];
        //             document.getElementById('area').append(opcion);
        //         });
        // });

        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static async createForm_EDIT(datostupla) {
        //this.resetearformprograma();
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        // se coloca el onblur del id_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').value = datostupla.id_programa;
        document.getElementById('id_programa').setAttribute("readonly", "");

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;

        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;

        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa()');
        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;

        document.getElementById('autor_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_programa()');
        document.getElementById('autor_programa').value = datostupla.autor_programa;

        document.getElementById('autor_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_original_programa()');
        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;

        document.getElementById('ano_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_programa()');
        document.getElementById('ano_programa').value = datostupla.ano_programa;

        document.getElementById('ano_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_original_programa()');
        document.getElementById('ano_original_programa').value = datostupla.ano_original_programa;

        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa()');
        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;

        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa()');
        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa()');
        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;

        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion()');
        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;

        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa()');
        document.getElementById('tipo_programa').value = datostupla.tipo_programa;

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa()');
        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;

        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa()');
        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;

        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('link_fichero_programa').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/' + fichero_programa);
        document.getElementById('fichero_programa').setAttribute("readonly", true);

        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa()');
        document.getElementById('enlace_programa').value = datostupla.enlace_programa;

        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa()');
        document.getElementById('formato_programa').value = datostupla.formato_programa;

        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa()');
        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa()');
        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;

        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('link_imagen_programa').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/' + imagen_programa);
        document.getElementById('imagen_programa').setAttribute("readonly", true);

        document.getElementById('nuevo_imagen_programa').setAttribute('onblur', 'Gestion_programa.comprobar_imagen_programa()');

        // await this.peticionBackGeneral('', 'area', 'SEARCH')
        //     .then((respuesta) => {
        //         console.log(respuesta);
        //         let listaareas = respuesta['resource'];
        //         listaareas.forEach(element => {
        //             let opcion = document.createElement('option');
        //             opcion.value = element['id_area'];
        //             opcion.innerHTML = element['nombre_area'];
        //             document.getElementById('area').append(opcion);
        //         });
        // });

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static async createForm_DELETE(datostupla) {
        // resetear el formulario
        //this.resetearformprograma();
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        // se coloca el onblur del id_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').value = datostupla.id_programa;
        document.getElementById('id_programa').setAttribute('readonly', true);

        // se coloca el onblur del nombre_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;
        document.getElementById('nombre_programa').setAttribute('readonly', true);

        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;
        document.getElementById('acronimo_programa').setAttribute('readonly', true);

        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;
        document.getElementById('nombre_original_programa').setAttribute('readonly', true);

        document.getElementById('autor_programa').value = datostupla.autor_programa;
        document.getElementById('autor_programa').setAttribute('readonly', true);

        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;
        document.getElementById('autor_original_programa').setAttribute('readonly', true);

        document.getElementById('ano_programa').value = datostupla.ano_programa;
        document.getElementById('ano_programa').setAttribute('readonly', true);

        document.getElementById('ano_original_programa').value = datostupla.ano_original_programa;
        document.getElementById('ano_original_programa').setAttribute('readonly', true);

        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;
        document.getElementById('requisitos_programa').setAttribute('readonly', true);

        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;
        document.getElementById('poblacion_desde_programa').setAttribute('readonly', true);

        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;
        document.getElementById('poblacion_hasta_programa').setAttribute('readonly', true);

        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;
        document.getElementById('unidad_poblacion').setAttribute('readonly', true);

        document.getElementById('tipo_programa').value = datostupla.tipo_programa;
        document.getElementById('tipo_programa').setAttribute('readonly', true);

        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;
        document.getElementById('tiempo_aplicacion_programa').setAttribute('readonly', true);

        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;
        document.getElementById('descrip_interp_programa').setAttribute('readonly', true);

        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('fichero_programa').setAttribute("readonly", true);
        document.getElementById("link_fichero_programa").href += datostupla.fichero_programa;

        document.getElementById("label_nuevo_fichero_programa").style.display = 'none';
        document.getElementById("nuevo_fichero_programa").style.display = 'none';

        document.getElementById('enlace_programa').value = datostupla.enlace_programa;
        document.getElementById('enlace_programa').setAttribute('readonly', true);

        document.getElementById('formato_programa').value = datostupla.formato_programa;
        document.getElementById('formato_programa').setAttribute('readonly', true);

        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;
        document.getElementById('modo_correccion_programa').setAttribute('readonly', true);

        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;
        document.getElementById('modo_aplicacion_programa').setAttribute('readonly', true);

        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('imagen_programa').setAttribute("readonly", true);
        document.getElementById("link_imagen_programa").href += datostupla.imagen_programa;

        document.getElementById("label_nuevo_imagen_programa").style.display = 'none';
        document.getElementById("nuevo_imagen_programa").style.display = 'none';

        // await this.peticionBackGeneral('', 'area', 'SEARCH')
        //     .then((respuesta) => {
        //         console.log(respuesta);
        //         let listaareas = respuesta['resource'];
        //         listaareas.forEach(element => {
        //             let opcion = document.createElement('option');
        //             opcion.value = element['id_area'];
        //             opcion.innerHTML = element['nombre_area'];
        //             document.getElementById('area').append(opcion);
        //         });
        // });

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        //GestionEntidad.ponercamposreadonly();

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(datostupla) {

        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);

        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_programa";

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();

        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick", "DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();


    }

    static async createForm_SEARCH() {

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

        // se coloca el onblur del id_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa_SEARCH()');

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa_SEARCH()');

        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa_SEARCH()');

        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa_SEARCH()');

        document.getElementById('autor_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_programa_SEARCH()');

        document.getElementById('autor_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_original_programa_SEARCH()');

        document.getElementById('ano_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_programa_SEARCH()');

        document.getElementById('ano_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_original_programa_SEARCH()');

        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa_SEARCH()');

        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa_SEARCH()');

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa_SEARCH()');

        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion_SEARCH()');

        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa_SEARCH()');

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa_SEARCH()');

        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa_SEARCH()');

        document.getElementById('fichero_programa').setAttribute('onblur', 'Gestion_programa.comprobar_fichero_programa_SEARCH()');

        document.getElementById("label_nuevo_fichero_programa").style.display = 'none';
        document.getElementById("nuevo_fichero_programa").style.display = 'none';
        document.getElementById('link_fichero_programa').style.display = 'none';

        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa_SEARCH()');

        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa_SEARCH()');

        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa_SEARCH()');

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa_SEARCH()');

        document.getElementById('imagen_programa').setAttribute('onblur', 'Gestion_programa.comprobar_imagen_programa_SEARCH()');

        document.getElementById("label_nuevo_imagen_programa").style.display = 'none';
        document.getElementById("nuevo_imagen_programa").style.display = 'none';
        document.getElementById('link_imagen_programa').style.display = 'none';


        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit() {

        let valor = this.comprobar_id_programa();
        let valor2 = this.comprobar_nombre_programa();
        let valor3 = this.comprobar_acronimo_programa();
        let valor4 = this.comprobar_nombre_original_programa();
        let valor5 = this.comprobar_autor_programa();
        let valor6 = this.comprobar_autor_original_programa();
        let valor7 = this.comprobar_ano_programa();
        let valor8 = this.comprobar_ano_original_programa();
        let valor9 = this.comprobar_requisitos_programa();
        let valor10 = this.comprobar_poblacion_desde_programa();
        let valor11 = this.comprobar_poblacion_hasta_programa();
        let valor12 = this.comprobar_unidad_poblacion();
        let valor13 = this.comprobar_tipo_programa();
        let valor14 = this.comprobar_tiempo_aplicacion_programa();
        let valor15 = this.comprobar_descrip_interp_programa();
        let valor16 = this.comprobar_fichero_programa();
        let valor17 = this.comprobar_enlace_programa();
        let valor18 = this.comprobar_formato_programa();
        let valor19 = this.comprobar_modo_correccion_programa();
        let valor20 = this.comprobar_modo_aplicacion_programa();
        let valor21 = this.comprobar_imagen_programa();

        let resultado = (
            valor &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 &&
            valor17 &&
            valor18 &&
            valor19 &&
            valor20 &&
            valor21
        );

        return resultado;
    }

    static comprobar_submit_SEARCH() {

        let valor = this.comprobar_id_programa_SEARCH();
        let valor2 = this.comprobar_nombre_programa_SEARCH();
        let valor3 = this.comprobar_acronimo_programa_SEARCH();
        let valor4 = this.comprobar_nombre_original_programa_SEARCH();
        let valor5 = this.comprobar_autor_programa_SEARCH();
        let valor6 = this.comprobar_autor_original_programa_SEARCH();
        let valor7 = this.comprobar_ano_programa_SEARCH();
        let valor8 = this.comprobar_ano_original_programa_SEARCH();
        let valor9 = this.comprobar_requisitos_programa_SEARCH();
        let valor10 = this.comprobar_poblacion_desde_programa_SEARCH();
        let valor11 = this.comprobar_poblacion_hasta_programa_SEARCH();
        let valor12 = this.comprobar_unidad_poblacion_SEARCH();
        let valor13 = this.comprobar_tipo_programa_SEARCH();
        let valor14 = this.comprobar_tiempo_aplicacion_programa_SEARCH();
        let valor15 = this.comprobar_descrip_interp_programa_SEARCH();
        let valor16 = this.comprobar_fichero_programa_SEARCH();
        let valor17 = this.comprobar_enlace_programa_SEARCH();
        let valor18 = this.comprobar_formato_programa_SEARCH();
        let valor19 = this.comprobar_modo_correccion_programa_SEARCH();
        let valor20 = this.comprobar_modo_aplicacion_programa_SEARCH();
        let valor21 = this.comprobar_imagen_programa_SEARCH();

        let resultado = (
            valor &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 &&
            valor17 &&
            valor18 &&
            valor19 &&
            valor20 &&
            valor21
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD() {
        await this.peticionBackGeneral('IU_form', 'programa', 'ADD')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    //this.resetearformprograma();
                    this.recargarform();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async EDIT() {
        await this.peticionBackGeneral('IU_form', 'programa', 'EDIT')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.recargarform();
                    this.SEARCH()
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async DELETE() {
        await this.peticionBackGeneral('IU_form', 'programa', 'DELETE')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.recargarform();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async SEARCH() {
        await this.peticionBackGeneral('IU_form', 'programa', 'SEARCH')
            .then((respuesta) => {
                //this.resetearformprograma();
                this.recargarform();
                let programa = new Gestion_programa('programa', respuesta['resource'], Array('id_programa', 'nombre_programa', 'acronimo_programa')); programa.mostrartabla();
                if (respuesta['code'] == 'RECORDSET_VACIO') {
                    document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
                }
            });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos

    static comprobar_id_programa() {

        // if (validacionesatomicas.esVacio('id_programa')) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_programa', 'KO_id_programa_vacio');
        //     return false;
        // }

        // if (validacionesatomicas.size_minimo('id_programa', 1)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_programa', 'KO_id_programa_tam_min');
        //     return false;
        // }

        // if (validacionesatomicas.size_maximo('id_programa', 6)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_programa', 'KO_id_programa_tam_max');
        //     return false;
        // }

        // const expr = /^\d+$/;

        // if (expr.test(document.getElementById('id_programa').value)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_programa', 'KO_id_programa_digitos');
        //     return false;
        // }

        DOM_class.mostrarexitovalor('id_programa');
        return true;
    }

    static comprobar_id_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('id_programa', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_programa', 'KO_id_programa_tam_max');
            //llamar funcion muestra errores
            DOM_class.mostrarerrorvalor('id_programa');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('id_programa');
        return true;
    }

    //---------------

    static comprobar_nombre_programa() {

        if (validacionesatomicas.esVacio('nombre_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa', 'KO_nombre_programa_vacio');
            DOM_class.mostrarerrorvalor('nombre_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('nombre_programa', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa', 'KO_nombre_programa_tam_min');
            DOM_class.mostrarerrorvalor('nombre_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_programa', 60)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa', 'KO_nombre_programa_tam_max');
            DOM_class.mostrarerrorvalor('nombre_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('nombre_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa', 'KO_nombre_programa_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_programa');
        return true;
    }

    static comprobar_nombre_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('nombre_programa', 60)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa', 'KO_nombre_programa_tam_max');
            DOM_class.mostrarerrorvalor('nombre_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_programa');
        return true;
    }

    //---------------

    static comprobar_acronimo_programa() {

        if (validacionesatomicas.esVacio('acronimo_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa', 'KO_acronimo_programa_vacio');
            DOM_class.mostrarerrorvalor('acronimo_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('acronimo_programa', 3)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa', 'KO_acronimo_programa_tam_min');
            DOM_class.mostrarerrorvalor('acronimo_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('acronimo_programa', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa', 'KO_acronimo_programa_tam_max');
            DOM_class.mostrarerrorvalor('acronimo_programa');
            return false;
        }

        const expr = /^[A-Za-z]+$/;
        if (expr.test(document.getElementById('acronimo_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa', 'KO_acronimo_programa_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;
    }

    static comprobar_acronimo_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('acronimo_programa', 20)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa', 'KO_acronimo_programa_tam_max');
            DOM_class.mostrarerrorvalor('acronimo_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;
    }

    //---------------

    static comprobar_nombre_original_programa() {

        if (validacionesatomicas.esVacio('nombre_original_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa', 'KO_nombre_original_programa_vacio');
            DOM_class.mostrarerrorvalor('nombre_original_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('nombre_original_programa', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa', 'KO_nombre_original_programa_tam_min');
            DOM_class.mostrarerrorvalor('nombre_original_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_original_programa', 60)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa', 'KO_nombre_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('nombre_original_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('nombre_original_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa', 'KO_nombre_original_programa_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    }

    static comprobar_nombre_original_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('nombre_original_programa', 60)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa', 'KO_nombre_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('nombre_original_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    }

    //---------------

    static comprobar_autor_programa() {

        if (validacionesatomicas.esVacio('autor_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_programa', 'KO_autor_programa_vacio');
            DOM_class.mostrarerrorvalor('autor_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('autor_programa', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_programa', 'KO_autor_programa_tam_min');
            DOM_class.mostrarerrorvalor('autor_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_programa', 50)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_programa', 'KO_autor_programa_tam_max');
            DOM_class.mostrarerrorvalor('autor_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('autor_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_programa', 'KO_autor_programa_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_programa');
        return true;
    }

    static comprobar_autor_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('autor_programa', 50)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_programa', 'KO_autor_programa_tam_max');
            DOM_class.mostrarerrorvalor('autor_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_programa');
        return true;

    }

    //---------------

    static comprobar_autor_original_programa() {

        if (validacionesatomicas.esVacio('autor_original_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa', 'KO_autor_original_programa_vacio');
            DOM_class.mostrarerrorvalor('autor_original_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('autor_original_programa', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa', 'KO_autor_original_programa_tam_min');
            DOM_class.mostrarerrorvalor('autor_original_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_original_programa', 50)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa', 'KO_autor_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('autor_original_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('autor_original_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa', 'KO_autor_original_programa_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;

    }

    static comprobar_autor_original_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('autor_original_programa', 50)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa', 'KO_autor_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('autor_original_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;

    }

    //---------------

    static comprobar_ano_programa() {

        if (validacionesatomicas.esVacio('ano_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_vacio');
            DOM_class.mostrarerrorvalor('ano_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('ano_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_tam_min');
            DOM_class.mostrarerrorvalor('ano_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_tam_max');
            DOM_class.mostrarerrorvalor('ano_programa');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('ano_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_digitos');
            return false;
        }

        if (document.getElementById('ano_programa').value <= 2023) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_mayor_actual');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }

    static comprobar_ano_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('ano_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_programa', 'KO_ano_programa_tam_max');
            DOM_class.mostrarerrorvalor('ano_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }

    //---------------

    static comprobar_ano_original_programa() {

        if (validacionesatomicas.esVacio('ano_original_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_vacio');
            DOM_class.mostrarerrorvalor('ano_original_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('ano_original_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_tam_min');
            DOM_class.mostrarerrorvalor('ano_original_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_original_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('ano_original_programa');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('ano_original_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_digitos');
            return false;
        }

        if (document.getElementById('ano_original_programa').value <= 2023) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_mayor_actual');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;

    }

    static comprobar_ano_original_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('ano_original_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa', 'KO_ano_original_programa_tam_max');
            DOM_class.mostrarerrorvalor('ano_original_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
    }

    //---------------

    static comprobar_requisitos_programa() {

        if (validacionesatomicas.esVacio('requisitos_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa', 'KO_requisitos_programa_vacio');
            DOM_class.mostrarerrorvalor('requisitos_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('requisitos_programa', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa', 'KO_requisitos_programa_tam_min');
            DOM_class.mostrarerrorvalor('requisitos_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('requisitos_programa', 300)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa', 'KO_requisitos_programa_tam_max');
            DOM_class.mostrarerrorvalor('requisitos_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s\.,;:"'()\[\]{}!?—_-]+$/
        if (expr.test(document.getElementById('requisitos_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa', 'KO_requisitos_programa_caracter_no_permitido');
            return false;
        }

        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;
    }

    static comprobar_requisitos_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('requisitos_programa', 300)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa', 'KO_requisitos_programa_tam_max');
            DOM_class.mostrarerrorvalor('requisitos_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;
    }

    //---------------

    static comprobar_poblacion_desde_programa() {

        if (validacionesatomicas.esVacio('poblacion_desde_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa', 'KO_poblacion_desde_programa_vacio');
            DOM_class.mostrarerrorvalor('poblacion_desde_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('poblacion_desde_programa', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_min');
            DOM_class.mostrarerrorvalor('poblacion_desde_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_desde_programa', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_max');
            DOM_class.mostrarerrorvalor('poblacion_desde_programa');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('poblacion_desde_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa', 'KO_poblacion_desde_programa_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;
    }

    static comprobar_poblacion_desde_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('poblacion_desde_programa', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_max');
            DOM_class.mostrarerrorvalor('poblacion_desde_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;
    }

    //---------------

    static comprobar_poblacion_hasta_programa() {

        if (validacionesatomicas.esVacio('poblacion_hasta_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa', 'KO_poblacion_hasta_programa_vacio');
            DOM_class.mostrarerrorvalor('poblacion_hasta_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('poblacion_hasta_programa', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_min');
            DOM_class.mostrarerrorvalor('poblacion_hasta_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_hasta_programa', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_max');
            DOM_class.mostrarerrorvalor('poblacion_hasta_programa');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('poblacion_hasta_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa', 'KO_poblacion_hasta_programa_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;

    }

    static comprobar_poblacion_hasta_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('poblacion_hasta_programa', 2)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_max');
            DOM_class.mostrarerrorvalor('poblacion_hasta_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;

    }

    //---------------

    static comprobar_unidad_poblacion() {

        let valor = document.getElementById('unidad_poblacion').value;

        if (validacionesatomicas.esVacio('unidad_poblacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion', 'KO_unidad_poblacion_vacio');
            DOM_class.mostrarerrorvalor('unidad_poblacion');
            return false;
        }

        if(valor == 'MESES' || valor == 'AÑOS'){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion', 'KO_unidad_poblacion_invalido');
            DOM_class.mostrarerrorvalor('unidad_poblacion');
            return false;
        }

        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;
    }

    static comprobar_unidad_poblacion_SEARCH() {
        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;
    }

    //---------------

    static comprobar_tipo_programa() {

        let valor = document.getElementById('tipo_programa').value;

        if (validacionesatomicas.esVacio('tipo_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa', 'KO_tipo_programa_vacio');
            DOM_class.mostrarerrorvalor('tipo_programa');
            return false;
        }

        if(valor == 'EVALUACIÓN' || valor == 'INTERVENCIÓN' || valor == 'EVALUACIÓN E INTERVENCIÓN'){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa', 'KO_tipo_programa_invalido');
            DOM_class.mostrarerrorvalor('tipo_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('tipo_programa');
        return true;
    }

    static comprobar_tipo_programa_SEARCH() {

        DOM_class.mostrarexitovalor('tipo_programa');
        return true;
    }

    //---------------

    static comprobar_tiempo_aplicacion_programa() {

        if (validacionesatomicas.esVacio('tiempo_aplicacion_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_vacio');
            DOM_class.mostrarerrorvalor('tiempo_aplicacion_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('tiempo_aplicacion_programa', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_min');
            DOM_class.mostrarerrorvalor('tiempo_aplicacion_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_max');
            DOM_class.mostrarerrorvalor('tiempo_aplicacion_programa');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('tiempo_aplicacion_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;
    }

    static comprobar_tiempo_aplicacion_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa', 4)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_max');
            DOM_class.mostrarerrorvalor('tiempo_aplicacion_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;
    }

    //---------------

    static comprobar_descrip_interp_programa() {

        if (validacionesatomicas.esVacio('descrip_interp_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa', 'KO_descrip_interp_programa_vacio');
            DOM_class.mostrarerrorvalor('descrip_interp_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('descrip_interp_programa', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa', 'KO_descrip_interp_programa_tam_min');
            DOM_class.mostrarerrorvalor('descrip_interp_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('descrip_interp_programa', 5000)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa', 'KO_descrip_interp_programa_tam_max');
            DOM_class.mostrarerrorvalor('descrip_interp_programa');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s\.,;:"'\r\n]+$/;

        if (expr.test(document.getElementById('descrip_interp_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa', 'KO_descrip_interp_programa_caracter_no_permitido');
            return false;
        }

        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;
    }

    static comprobar_descrip_interp_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('descrip_interp_programa', 5000)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa', 'KO_descrip_interp_programa_tam_max');
            DOM_class.mostrarerrorvalor('descrip_interp_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;
    }

    //---------------

    static comprobar_fichero_programa() {

        let fichero = document.getElementById('nuevo_fichero_programa').files[0].name;

        if (!validacionesatomicas.size_max_fichero('nuevo_fichero_programa', 2000000)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_tam_max');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        const extensionesValidas = ['pdf', 'doc', 'docx'];
        let extension = fichero.split('.').pop().toLowerCase();
        if (!extensionesValidas.includes(extension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_extension_invalida');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        let ficheroSinExtension = fichero.replace(/\.[^/.]+$/, ''); // Eliminar extensión
        const exprNombre = /^[A-Za-z]+$/;
        if (!exprNombre.test(ficheroSinExtension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_alfabetico');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        if (ficheroSinExtension === null || ficheroSinExtension.length === 0) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_vacio');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        if (ficheroSinExtension.length < 7) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_tam_min');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        if (ficheroSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa', 'KO_fichero_programa_tam_max');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_fichero_programa');
        return true;
    }

    static comprobar_fichero_programa_SEARCH() {

        let fichero = document.getElementById('fichero_programa').value;
        let ficheroSinExtension = fichero.replace(/\.[^/.]+$/, ''); // Eliminar extensión

        if (ficheroSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('fichero_programa', 'KO_fichero_programa_tam_max');
            DOM_class.mostrarerrorvalor('fichero_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    }

    //---------------

    static comprobar_enlace_programa() {

        if (validacionesatomicas.esVacio('enlace_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa', 'KO_enlace_programa_vacio');
            DOM_class.mostrarerrorvalor('enlace_programa');
            return false;
        }

        if (validacionesatomicas.size_minimo('enlace_programa', 10)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa', 'KO_enlace_programa_tam_min');
            DOM_class.mostrarerrorvalor('enlace_programa');
            return false;
        }

        if (validacionesatomicas.size_maximo('enlace_programa', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa', 'KO_enlace_programa_tam_max');
            DOM_class.mostrarerrorvalor('enlace_programa');
            return false;
        }

        const expr = /^[A-Za-z\/\.:]+$/;
        if (expr.test(document.getElementById('enlace_programa').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa', 'KO_enlace_programa_caracter_no_permitido');
            return false;
        }

        DOM_class.mostrarexitovalor('enlace_programa');
        return true;
    }

    static comprobar_enlace_programa_SEARCH() {

        if (validacionesatomicas.size_maximo('enlace_programa', 100)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa', 'KO_enlace_programa_tam_max');
            DOM_class.mostrarerrorvalor('enlace_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('enlace_programa');
        return true;
    }

    //---------------

    static comprobar_formato_programa() {

        let valor = document.getElementById('formato_programa').value;

        if (validacionesatomicas.esVacio('formato_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('formato_programa', 'KO_formato_programa_vacio');
            DOM_class.mostrarerrorvalor('formato_programa');
            return false;
        }

        if(valor == 'PAPEL' || valor == 'ELECTRÓNICO' || valor == 'PAPEL Y ELECTRÓNICO'){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('formato_programa', 'KO_formato_programa_invalido');
            DOM_class.mostrarerrorvalor('formato_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('formato_programa');
        return true;
    }

    static comprobar_formato_programa_SEARCH() {

        DOM_class.mostrarexitovalor('formato_programa');
        return true;
    }

    //---------------

    static comprobar_modo_correccion_programa() {

        let valor = document.getElementById('modo_correccion_programa').value;

        if (validacionesatomicas.esVacio('modo_correccion_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa', 'KO_modo_correccion_programa_vacio');
            DOM_class.mostrarerrorvalor('modo_correccion_programa');
            return false;
        }

        if(valor == 'PAPEL' || valor == 'ELECTRÓNICO' || valor == 'PAPEL Y ELECTRÓNICO'){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa', 'KO_modo_correccion_programa_invalido');
            DOM_class.mostrarerrorvalor('modo_correccion_programa');
            return false;
        }


        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;
    }

    static comprobar_modo_correccion_programa_SEARCH() {

        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;
    }

    //---------------

    static comprobar_modo_aplicacion_programa() {

        let valor = document.getElementById('modo_aplicacion_programa').value;

        if (validacionesatomicas.esVacio('modo_aplicacion_programa')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa', 'KO_modo_aplicacion_programa_vacio');
            DOM_class.mostrarerrorvalor('modo_aplicacion_programa');
            return false;
        }

        if(valor == 'INDIVIDUAL' || valor == 'COLECTIVO' || valor == 'INDIVIDUAL Y COLECTIVO'){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa', 'KO_modo_aplicacion_programa_invalido');
            DOM_class.mostrarerrorvalor('modo_aplicacion_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;
    }

    static comprobar_modo_aplicacion_programa_SEARCH() {

        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;
    }

    //---------------

    static comprobar_nuevo_imagen_programa(){
        let imagen = document.getElementById('imagen_programa').value;

        // if (!validacionesatomicas.size_max_fichero(imagen.id, 2000000)) {
        //     DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_tam_max');
        //     DOM_class.mostrarerrorvalor('imagen_programa');
        //     return false;
        // }

        const extensionesValidas = ['jpg', 'jpeg'];
        let extension = imagen.split('.').pop().toLowerCase();
        if (!extensionesValidas.includes(extension)) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_extension_invalida');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        let imagenSinExtension = imagen.replace(/\.[^/.]+$/, ''); // Eliminar extensión
        const exprNombre = /^[A-Za-z]+$/;
        if (!exprNombre.test(imagenSinExtension)) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_alfabetico');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension === null || imagenSinExtension.length === 0) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_vacio');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension.length < 7) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_tam_min');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_tam_max');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('imagen_programa');
        return true;

    }

    static comprobar_imagen_programa() {

        let imagen = document.getElementById('nuevo_imagen_programa').files[0].name;

        if (!validacionesatomicas.size_max_fichero('nuevo_imagen_programa', 20000)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_tam_max');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        const extensionesValidas = ['jpg', 'jpeg'];
        let extension = imagen.split('.').pop().toLowerCase();
        if (!extensionesValidas.includes(extension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_extension_invalida');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        let imagenSinExtension = imagen.replace(/\.[^/.]+$/, ''); // Eliminar extensión
        const exprNombre = /^[A-Za-z]+$/;
        if (!exprNombre.test(imagenSinExtension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_alfabetico');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension === null || imagenSinExtension.length === 0) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_vacio');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension.length < 7) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_tam_min');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        if (imagenSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa', 'KO_imagen_programa_tam_max');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_programa');
        return true;
    }

    static comprobar_imagen_programa_SEARCH() {

        let imagen = document.getElementById('imagen_programa').value;
        let imagenSinExtension = imagen.replace(/\.[^/.]+$/, ''); // Eliminar extensión

        if (imagenSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_programa', 'KO_imagen_programa_tam_max');
            DOM_class.mostrarerrorvalor('imagen_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    }

    static recargarform() {

        document.getElementById("IU_form").innerHTML = '';

        document.getElementById("IU_form").innerHTML = `

        <label id="label_id_programa" class="label_id_programa"></label>
        <input type='text' id='id_programa' name='id_programa'></input>
        <div id="div_error_id_programa" class="errorcampo"><a id="error_id_programa"></a></div>
        <br>

        <label id="label_nombre_programa" class="label_nombre_programa"></label>
        <input type='text' id='nombre_programa' name='nombre_programa'></input>
        <div id="div_error_nombre_programa" class="errorcampo"><a id="error_nombre_programa"></a></div>
        <br>

        <label id="label_acronimo_programa" class="label_acronimo_programa"></label>
        <input type='text' id='acronimo_programa' name='acronimo_programa'></input>
        <div id="div_error_acronimo_programa" class="errorcampo"><a id="error_acronimo_programa"></a></div>
        <br>

        <label id="label_nombre_original_programa" class="label_nombre_original_programa"></label>
        <input type='text' id='nombre_original_programa' name='nombre_original_programa'></input>
        <div id="div_error_nombre_original_programa" class="errorcampo"><a id="error_nombre_original_programa"></a></div>
        <br>

        <label id="label_autor_programa" class="label_autor_programa"></label>
        <input type='text' id='autor_programa' name='autor_programa'></input>
        <div id="div_error_autor_programa" class="errorcampo"><a id="error_autor_programa"></a></div>
        <br>

        <label id="label_autor_original_programa" class="label_autor_original_programa"></label>
        <input type='text' id='autor_original_programa' name='autor_original_programa'></input>
        <div id="div_error_autor_original_programa" class="errorcampo"><a id="error_autor_original_programa"></a></div>
        <br>

        <label id="label_ano_programa" class="label_ano_programa"></label>
        <input type='text' id='ano_programa' name='ano_programa'></input>
        <div id="div_error_ano_programa" class="errorcampo"><a id="error_ano_programa"></a></div>
        <br>

        <label id="label_ano_original_programa" class="label_ano_original_programa"></label>
        <input type='text' id='ano_original_programa' name='ano_original_programa'></input>
        <div id="div_error_ano_original_programa" class="errorcampo"><a id="error_ano_original_programa"></a></div>
        <br>

        <label id="label_requisitos_programa" class="label_requisitos_programa"></label>
        <textarea id="requisitos_programa" rows="30" cols="50" name="requisitos_programa"></textarea>
        <div id="div_error_requisitos_programa" class="errorcampo"><a id="error_requisitos_programa"></a></div>
        <br>

        <label id="label_poblacion_desde_programa" class="label_poblacion_desde_programa"></label>
        <input type='text' id='poblacion_desde_programa' name='poblacion_desde_programa'></input>
        <div id="div_error_poblacion_desde_programa" class="errorcampo"><a id="error_poblacion_desde_programa"></a></div>
        <br>

        <label id="label_poblacion_hasta_programa" class="label_poblacion_hasta_programa"></label>
        <input type='text' id='poblacion_hasta_programa' name='poblacion_hasta_programa'></input>
        <div id="div_error_poblacion_hasta_programa" class="errorcampo"><a id="error_poblacion_hasta_programa"></a></div>
        <br>

        <label id="label_unidad_poblacion" class="label_unidad_poblacion"></label>
        <select name="unidad_poblacion" id="unidad_poblacion">
            <option value="">--</option>
            <option value="MESES">MESES</option>
            <option value="AÑOS">AÑOS</option>
        </select>
        <div id="div_error_unidad_poblacion" class="errorcampo"><a id="error_unidad_poblacion"></a></div>
        <br>

        <label id="label_tipo_programa" class="label_tipo_programa"></label>
        <select name="tipo_programa" id="tipo_programa">
            <option value="">--</option>
            <option value="EVALUACIÓN">EVALUACIÓN</option>
            <option value="INTERVENCIÓN">INTERVENCIÓN</option>
            <option value="EVALUACIÓN E INTERVENCIÓN">EVALUACIÓN E INTERVENCIÓN</option>
        </select>
        <div id="div_error_tipo_programa" class="errorcampo"><a id="error_tipo_programa"></a></div>
        <br>

        <label id="label_tiempo_aplicacion_programa" class="label_tiempo_aplicacion_programa"></label>
        <input type='text' id='tiempo_aplicacion_programa' name='tiempo_aplicacion_programa'></input>
        <div id="div_error_tiempo_aplicacion_programa" class="errorcampo"><a id="error_tiempo_aplicacion_programa"></a></div>
        <br>

        <label id="label_descrip_interp_programa" class="label_descrip_interp_programa"></label>
        <textarea id="descrip_interp_programa" rows="50" cols="30" name="descrip_interp_programa"></textarea>
        <div id="div_error_descrip_interp_programa" class="errorcampo"><a id="error_descrip_interp_programa"></a></div>
        <br>

        <label id="label_fichero_programa" class="label_fichero_programa"></label>
        <input type='text' id='fichero_programa' name='fichero_programa'></input>
        <a id="link_fichero_programa" href="http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_fichero_programa" class="label_nuevo_fichero_programa">Nuevo fichero programa</label>
        <input type='file' id='nuevo_fichero_programa' name='nuevo_fichero_programa'></input>
        <div id="div_error_fichero_programa" class="errorcampo"><a id="error_nuevo_fichero_programa"></a></div>
        <br>

        <label id="label_enlace_programa" class="label_enlace_programa"></label>
        <input type='text' id='enlace_programa' name='enlace_programa'></input>
        <div id="div_error_enlace_programa" class="errorcampo"><a id="error_enlace_programa"></a></div>
        <br>

        <label id="label_formato_programa" class="label_formato_programa"></label>
        <select name="formato_programa" id="formato_programa">
            <option value="">--</option>
            <option value="PAPEL">PAPEL</option>
            <option value="ELECTRÓNICO">ELECTRÓNICO</option>
            <option value="PAPEL Y ELECTRÓNICO">PAPEL Y ELECTRÓNICO</option>
        </select>
        <div id="div_error_formato_programa" class="errorcampo"><a id="error_formato_programa"></a></div>
        <br>

        <label id="label_modo_correccion_programa" class="label_modo_correccion_programa"></label>
        <select name="modo_correccion_programa" id="modo_correccion_programa">
            <option value="">--</option>
            <option value="PAPEL">PAPEL</option>
            <option value="ELECTRÓNICO">ELECTRÓNICO</option>
            <option value="PAPEL Y ELECTRÓNICO">PAPEL Y ELECTRÓNICO</option>
        </select>
        <div id="div_error_modo_correccion_programa" class="errorcampo"><a id="error_modo_correccion_programa"></a></div>
        <br>

        <label id="label_modo_aplicacion_programa" class="label_modo_aplicacion_programa"></label>
        <select name="modo_aplicacion_programa" id="modo_aplicacion_programa">
            <option value="">--</option>
            <option value="INDIVIDUAL">INDIVIDUAL</option>
            <option value="COLECTIVO">COLECTIVO</option>
            <option value="INDIVIDUAL Y COLECTIVO">INDIVIDUAL Y COLECTIVO</option>
        </select>
        <div id="div_error_modo_aplicacion_programa" class="errorcampo"><a id="error_modo_aplicacion_programa"></a></div>
        <br>
        
        <label id="label_imagen_programa" class="label_imagen_programa"></label>
        <input type='text' id='imagen_programa' name='imagen_programa'></input>
        <a id="link_imagen_programa" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_programa" class="label_nuevo_imagen_programa"></label>
        <input type='file' id='nuevo_imagen_programa' name='nuevo_imagen_programa'></input>
        <div id="div_error_imagen_programa" class="errorcampo"><a id="error_nuevo_imagen_programa"></a></div>
        <br>

        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i = 0; i < campos.length; i++) {
            if (eval(document.getElementById('div_error_' + campos[i].id))) {
                document.getElementById('div_error_' + campos[i].id).style.display = 'none';
            }
        }
        setLang();
    }

}