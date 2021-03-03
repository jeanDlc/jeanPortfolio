import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return ( 
        <Box component='footer' 
            marginTop={10} 
            bgcolor='primary.main' 
            color='primary.light' 
            paddingY={3}
        >
            <Container  >
                <Grid container spacing={3} justify='space-between'  >
                    <Grid item  xs={12} md={4}>
                        <Box textAlign='center' >Jean Pierre de la Cruz</Box>
                    </Grid>
                    <Grid item  xs={12} md={4} >
                        <Box textAlign='center' >&copy; Todos los derechos reservados {new Date().getFullYear()} </Box>
                    </Grid>
                    <Grid item  xs={12} md={4} >
                        <Box textAlign='center' > 
                            <a href="https://github.com/jeanDlc"> <GitHubIcon/> </a>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
     );
}
 
export default Footer;