import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import { Container } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Img from "gatsby-image";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import ListIcon from '@material-ui/icons/List';
const ProjectPreview = ({data}) => {
    //obteniendo cada valor de lo extraído por datoCMS y graphql
    const {titulo, lenguajes, enlace, github, descripcion, imagen}=data.allDatoCmsProyecto.edges[0].node;
    //transformando a JSON para mejor manipulación
    const lenguajesJSON=JSON.parse(lenguajes);

    return ( 
        <Layout>
            <Container maxWidth='md' >
                <Box component="section" mt={4} mb={5} >
                    <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={12} md={9} >
                            <h1>{titulo} </h1>
                            <p>GitHub</p>
                            <GitHubIcon/>
                            <a href={github} 
                                style={{marginLeft:'.7rem'}} 
                                target='_blank'
                                rel='noreferrer'
                            > {github} </a>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Button variant="contained" fullWidth={true} size='large'  color="primary" href={enlace} target='_blank' rel='noreferrer' >
                                Visit
                            </Button>
                        </Grid>
                        
                    </Grid>
                </Box>
                <Divider/>
                <Box component="section" mt={4} mb={5} >
                    <h2>Description</h2>
                    <p style={{marginBottom:'2rem'}} >{ descripcion }</p>
                    <Card>
                        <CardContent>
                            <Grid container spacing={3} justify="space-between">
                                <Grid item xs={12} md={6} >
                                <a href={enlace} 
                                    style={{display:'block'}} 
                                    target='_blank'
                                    rel='noreferrer'
                                > 
                                    <Img style={{borderRadius:'.7rem'}} fluid={imagen.fluid} />
                                </a>
                                    
                                </Grid>
                                <Grid item xs={12} md={6} >
                                        <h3> <ListIcon/> Technologies</h3>
                                        <Divider/>
                                    <List component="ul" aria-label="main mailbox folders">
                                        {lenguajesJSON.tecnologias.map(tecnologia=>(
                                            <ListItem key={tecnologia} >
                                                <ListItemIcon>
                                                    <CodeIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={tecnologia} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
                <Link to='/my-work' >
                        <Button variant='outlined' color='secondary' >All projects</Button>
                </Link>
            </Container>
        </Layout>
     );
}
export  const query=graphql`
    query ($slug: String!) {
        allDatoCmsProyecto(filter: {slug: {eq: $slug}}) {
            edges {
                node {
                    titulo
                    lenguajes
                    enlace
                    descripcion,
                    github
                    imagen {
                        fluid{
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    }
`
export default ProjectPreview;