import {useState,useEffect} from 'react';
const useValidation = (initialState,validar,fn) => {
    const [valores,setValores]=useState(initialState);
    const [submitForm,setSubmitForm]=useState(false);
    const [errores, setErrores]=useState({});
    useEffect(()=>{
        if(submitForm){
            const noErrores=Object.keys(errores).length===0;
            if(noErrores){
                fn();
            }
            setSubmitForm(false);
        }
    },[submitForm]);


    //función que se ejecuta cada vez que el usuario escribe algo en el input
    const handleChange=e=>{
        setValores({
            ...valores,
            [e.target.name]:e.target.value
        })
    }

    //al hacer el submit del formulario
    const handleSubmit=e=>{
        e.preventDefault();
        const erroresValidacion=validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
    }

    return {
        valores,
        handleChange,
        handleSubmit,
        errores
    };
}
 
export default useValidation;