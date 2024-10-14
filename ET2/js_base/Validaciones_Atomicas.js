class validacionesatomicas{

    constructor(){

    }

    static esVacio(id) {
        const campo = document.getElementById(id).value;
        if (campo === null || campo.length === 0) {
          return false; // El campo está vacío
        } else {
          return true; // El campo no está vacío
        }
    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_max_fichero(id,maxBytes){
        let input = document.getElementById(id);

        if(input.files && input.files[0]){
            let fileSize = input.files[0].size;

            if(fileSize <= maxBytes){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

    
}