class Gestion_publicacion extends GestionEntidad {

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD() {

        //this.resetearformpublicacion()
        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();

        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        //document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').setAttribute("readonly", "");

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_imagen_publicacion()');
        document.getElementById("label_imagen_publicacion").style.display = 'none';
        document.getElementById("imagen_publicacion").style.display = 'none';
        document.getElementById("link_imagen_publicacion").style.display = 'none';

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
        //     });


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
        //this.resetearformpublicacion();
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly", "");

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('link_imagen_publicacion').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/' + imagen_publicacion);
        document.getElementById('imagen_publicacion').setAttribute("readonly", true);

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_imagen_publicacion()');

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
        //this.resetearformpublicacion();
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute('readonly', true);

        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;
        document.getElementById('titulo_publicacion').setAttribute('readonly', true);

        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;
        document.getElementById('autor_publicacion').setAttribute('readonly', true);

        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;
        document.getElementById('fecha_publicacion').setAttribute('readonly', true);

        document.getElementById('area_publicacion').value = datostupla.area_publicacion;
        document.getElementById('area_publicacion').setAttribute('readonly', true);

        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;
        document.getElementById('texto_publicacion').setAttribute('readonly', true);

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly", true);
        document.getElementById("link_imagen_publicacion").href += datostupla.imagen_publicacion;

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';

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
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";

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
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion_SEARCH()');

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion_SEARCH()');

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');

        document.getElementById('imagen_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById('link_imagen_publicacion').style.display = 'none';

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

        let valor = this.comprobar_id_publicacion();
        let valor2 = this.comprobar_titulo_publicacion();
        let valor3 = this.comprobar_autor_publicacion();
        let valor4 = this.comprobar_fecha_publicacion();
        let valor5 = this.comprobar_area_publicacion();
        let valor6 = this.comprobar_texto_publicacion();
        let valor7 = this.comprobar_imagen_publicacion();


        let resultado = (
            valor &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
    }

    static comprobar_submit_SEARCH() {

        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor2 = this.comprobar_titulo_publicacion_SEARCH();
        let valor3 = this.comprobar_autor_publicacion_SEARCH();
        let valor4 = this.comprobar_fecha_publicacion_SEARCH();
        let valor5 = this.comprobar_area_publicacion_SEARCH();
        let valor6 = this.comprobar_texto_publicacion_SEARCH();
        let valor7 = this.comprobar_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    //this.resetearformpublicacion();
                    this.recargarform();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async EDIT() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
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

    static async DELETE() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
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
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
            .then((respuesta) => {
                //this.resetearformpublicacion();
                this.recargarform();
                let publicacion = new Gestion_publicacion('publicacion', respuesta['resource'], Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion')); publicacion.mostrartabla();
                if (respuesta['code'] == 'RECORDSET_VACIO') {
                    document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
                }
            });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos

    static comprobar_id_publicacion() {

        // if (validacionesatomicas.esVacio('id_publicacion')) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_vacio');
        //     return false;
        // }

        // if (validacionesatomicas.size_minimo('id_publicacion', 1)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_min');
        //     return false;
        // }

        // if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
        //     return false;
        // }

        // const expr = /^\d+$/;

        // if (expr.test(document.getElementById('id_publicacion').value)) {
        // } else {
        //     DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_digitos');
        //     return false;
        // }

        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }

    static comprobar_id_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
            //llamar funcion muestra errores
            DOM_class.mostrarerrorvalor('id_publicacion');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }

    //---------------

    static comprobar_titulo_publicacion() {

        if (validacionesatomicas.esVacio('titulo_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_vacio');
            return false;
        }

        if (validacionesatomicas.size_minimo('titulo_publicacion', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('titulo_publicacion').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }

    static comprobar_titulo_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            return false;
        }

        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }

    //---------------

    static comprobar_autor_publicacion() {

        if (validacionesatomicas.esVacio('autor_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_vacio');
            return false;
        }

        if (validacionesatomicas.size_minimo('autor_publicacion', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            return false;
        }

        const expr = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

        if (expr.test(document.getElementById('autor_publicacion').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_alfabetico');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }

    static comprobar_autor_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }

    //---------------

    static comprobar_fecha_publicacion() {
        
        if(document.getElementById('fecha_publicacion').value==""){
            DOM_class.mostrardivmensajeserrordebajo("fecha_publicacion","KO_fecha_publicacion_vacio");
            return false;
        }
        
        var elemento = document.getElementById('fecha_publicacion').value;
        var nuevaFecha = new Date(elemento);
        var fechaActual = new Date();
        
        fechaActual.setHours(0,0,0,0);
        nuevaFecha.setHours(0,0,0,0);
        
        if (nuevaFecha < fechaActual) {
            DOM_class.mostrardivmensajeserrordebajo("fecha_publicacion","KO_fecha_publicacion");
            return false;}
        DOM_class.mostrarexitovalor("fecha_publicacion");
        return true;
    }

    static comprobar_fecha_publicacion_SEARCH() {

        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    //---------------

    static comprobar_area_publicacion() {

        if (validacionesatomicas.esVacio('area_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_vacio');
            return false;
        }

        if (validacionesatomicas.size_minimo('area_publicacion', 1)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            return false;
        }

        const expr = /^\d+$/;

        if (expr.test(document.getElementById('area_publicacion').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    static comprobar_area_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            return false;
        }

        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    //---------------

    static comprobar_texto_publicacion() {

        if (validacionesatomicas.esVacio('texto_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_vacio');
            return false;
        }

        if (validacionesatomicas.size_minimo('texto_publicacion', 30)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_min');
            return false;
        }

        if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
            return false;
        }

        const expr = /^[\x00-\x7F]+$/;

        if (expr.test(document.getElementById('texto_publicacion').value)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_ascii');
            return false;
        }

        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    static comprobar_texto_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
            return false;
        }

        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    //---------------

    static comprobar_imagen_publicacion() {

        let imagen = document.getElementById('nuevo_imagen_publicacion').files[0].name;

        if (!validacionesatomicas.size_max_fichero('nuevo_imagen_publicacion', 20000)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_tam_max');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        const extensionesValidas = ['jpg', 'jpeg'];
        let extension = imagen.split('.').pop().toLowerCase();
        if (!extensionesValidas.includes(extension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_extension_invalida');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        let imagenSinExtension = imagen.replace(/\.[^/.]+$/, ''); // Eliminar extensión
        const exprNombre = /^[A-Za-z]+$/;
        if (!exprNombre.test(imagenSinExtension)) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_alfabetico');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        if (imagenSinExtension === null || imagenSinExtension.length === 0) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_vacio');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        if (imagenSinExtension.length < 7) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_tam_min');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        if (imagenSinExtension.length > 60) {
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_imagen_publicacion_tam_max');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;
    }

    static comprobar_imagen_publicacion_SEARCH() {

        let imagen = document.getElementById('imagen_publicacion').value;
        let imagenSinExtension = imagen.replace(/\.[^/.]+$/, ''); // Eliminar extensión

        if (imagenSinExtension.length > 50) {
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion', 'KO_imagen_publicacion_tam_max');
            DOM_class.mostrarerrorvalor('imagen_publicacion');
            return false;
        }

        DOM_class.mostrarexitovalor('imagen_publicacion');
        return true;
    }

    static recargarform() {

        document.getElementById("IU_form").innerHTML = '';

        document.getElementById("IU_form").innerHTML = `

        <label id="label_id_publicacion" class="label_id_publicacion"></label>
        <input type='text' id='id_publicacion' name='id_publicacion'></input>
        <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
        <br>

        <label id="label_titulo_publicacion" class="label_titulo_publicacion"></label>
        <input type='text' id='titulo_publicacion' name='titulo_publicacion'></input>
        <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
        <br>

        <label id="label_autor_publicacion" class="label_autor_publicacion"></label>
        <input type='text' id='autor_publicacion' name='autor_publicacion'></input>
        <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
        <br>

        <label id="label_fecha_publicacion" class="label_fecha_publicacion"></label>
        <input type='date' id='fecha_publicacion' name='fecha_publicacion'></input>
        <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
        <br>

        <label id="label_area_publicacion" class="label_area_publicacion"></label>
        <input type='text' id='area_publicacion' name='area_publicacion'></input>
        <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
        <br>

        <label id="label_texto_publicacion" class="label_texto_publicacion"></label>
        <input type='text' id='texto_publicacion' name='texto_publicacion'></input>
        <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
        <br>

        <label id="label_imagen_publicacion" class="label_imagen_publicacion"></label>
        <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
        <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_publicacion" class="label_nuevo_imagen_publicacion"></label>
        <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input>
        <div id="div_error_imagen_publicacion" class="errorcampo"><a id="error_nuevo_imagen_publicacion"></a></div>
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