export default function contactFormValidation(valores){
    let errores={};

    //validar el nombre de usuario
    if(!valores.nombre || valores.nombre.trim()===''){
        errores.nombre=true;
    }
    if(!valores.apellido || valores.apellido.trim()===''){
        errores.apellido=true;
    }
    if(!valores.email || valores.email.trim()==='' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email=true;
    }
    if(!valores.mensaje || valores.mensaje.trim()===''){
        errores.mensaje=true;
    }
    return errores;

}