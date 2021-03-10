import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import MessageModal from '../components/MessageModal';
import useValidation from '../hooks/useValidation';
import contactFormValidation from '../validation/contactFormValidation';

const Contact = () => {

    //state para la data del formulario
    const INITIAL_STATE={
        nombre:'',
        apellido:'',
        email:'',
        mensaje:''
    }

    //enviar la data a GETFORM
    const sendContactData=()=>{
        //usar la url de getFotm api
        const urlGetForm=process.env.GATSBY_GETFORM_URL;
        
        
        //creando la data que será guardada en GETFORM
        const formdata=new FormData();
        formdata.append('nombre', valores.nombre);
        formdata.append('apellido', valores.apellido);
        formdata.append('email', valores.email);
        formdata.append('mensaje', valores.mensaje);
        handleServerResponse(true, "Great, I will be in touch" , true);
        
        //se envía por axios pq así lo recomienda la documentación
        axios({
            method:'post',
            url:urlGetForm,
            data:formdata
        }).then(r => {
            handleServerResponse(true, "Great, I will be in touch" , true);
        })
        .catch(r => {
            handleServerResponse(false, "An error occurred, please try again later" , true);
        });
    }

    //HOOK: maneja validación del contact form
    const {valores,
        handleChange,
        handleSubmit,
        errores} = useValidation(INITIAL_STATE,contactFormValidation,sendContactData);
   
    //state para el estado de respuesta de GETFORM
    const [serverState, setServerState] = useState({
        status: null,
        msg:null,
        showResponse:false
    });

    //manejando la respuesta de GETFORM
    const handleServerResponse = (status, msg,showResponse) => {

        setServerState({
            status,
            msg,
            showResponse
        });
        setTimeout(() => {
            setServerState({
                status:null,
                msg:null,
                showResponse:false
            });
        }, 3000);
    };

    
    return ( 
        <Layout>
            <Container maxWidth='sm'  >
                <Box component="div"  marginY={10} minHeight='70vh' >
                    {serverState.showResponse && (
                    
                        <MessageModal success={serverState.status} msg={serverState.msg} />
                        
                    )}
                    
                    <form onSubmit={handleSubmit} method="post" >
                        <Typography variant='h3' align='center' gutterBottom={true} component='h1'>
                            <EmailIcon fontSize="large" /> Contact
                        </Typography>
                        <Typography align='center' gutterBottom={true} component='p'>
                            Send me a message, I'll get back to you soon
                        </Typography>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Name" 
                                name='nombre' 
                                variant="outlined" 
                                type='text'
                                required={true}
                                value={valores.nombre}
                                onChange={handleChange}
                                error={errores.nombre? true: false}

                            />
                        </FormControl>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Lastname"    
                                name='apellido' 
                                variant="outlined"
                                type='text' 
                                required={true}
                                value={valores.apellido}
                                onChange={handleChange}
                                error={errores.apellido? true: false}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Email"    
                                name='email' 
                                variant="outlined"
                                type='email' 
                                required={true}
                                value={valores.email}
                                onChange={handleChange}
                                error={errores.email? true: false}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Message"    
                                name='mensaje' 
                                variant="outlined"
                                multiline={true}
                                rows={8}
                                required={true}
                                value={valores.mensaje}
                                onChange={handleChange}
                                error={errores.mensaje? true: false}
                            />
                        </FormControl>
                        <Button color='primary' 
                            variant='contained' 
                            startIcon={<SendIcon/>}
                            fullWidth={true}
                            type='submit'
                            size='large' 
                            style={{marginTop:'1.5rem'}}
                        >Send</Button>
                    </form>
                </Box>
            </Container>
        </Layout>
     );
}
 
export default Contact;