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

const Contact = () => {

    //state para la data del formulario
    const INITIAL_STATE={
        nombre:'',
        apellido:'',
        email:'',
        mensaje:''
    }
    const [dataContact, setDataContact]=useState(INITIAL_STATE);

    //para resetear el formulario
    const resetForm=()=>{
        setDataContact(INITIAL_STATE);
    }
    //state para el estado de respuesta de GETFORM
    const [serverState, setServerState] = useState({
        status: null,
        msg:null,
        showResponse:false
    });
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
        if (status) {
          resetForm();
        }
    };

    const handleChange=e=>{

        //si intenta hacer submit con los campos vacíos, no se lo va a permitir
        if(e.target.value.trim()==='' ){
            return;
        }
        //llenar el state del formulario
        setDataContact({
            ...dataContact,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit=e=>{
        e.preventDefault();
        
        const urlGetForm='https://getform.io/f/be571edd-5a79-4ed7-9714-55b3eb71c08b';
        
        const formdata=new FormData();
        formdata.append('nombre', dataContact.nombre);
        formdata.append('apellido', dataContact.apellido);
        formdata.append('email', dataContact.email);
        formdata.append('mensaje', dataContact.mensaje);
        handleServerResponse(true, "Great, I will be in touch" , true);
        
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
                                value={dataContact.nombre}
                                onChange={handleChange}

                            />
                        </FormControl>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Lastname"    
                                name='apellido' 
                                variant="outlined"
                                type='text' 
                                required={true}
                                value={dataContact.apellido}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} component='div' margin='normal' size='medium' variant='standard' >
                            <TextField id="outlined-basic" 
                                label="Email"    
                                name='email' 
                                variant="outlined"
                                type='email' 
                                required={true}
                                value={dataContact.email}
                                onChange={handleChange}
                                
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
                                value={dataContact.mensaje}
                                onChange={handleChange}
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