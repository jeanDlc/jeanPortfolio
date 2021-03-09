import React from 'react';
import Container from '@material-ui/core/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import { Button } from '@material-ui/core';
/**styles******************************************************************** */
const useStyles = makeStyles((theme)=> ({
    titulo:{
        margin:'6rem 0 3rem 0',
        textAlign:'center',
        [theme.breakpoints.up('md')]: {
            textAlign:'start'
        },
        '& svg':{
            fontSize:'2.7rem'
        }
    },
    enlace:{
        display:'inline-block',
        margin:'2rem 0'
    }
    
}));
/**component***************************************************************** */
const ProjectsPreview = () => {
    const classes=useStyles();
    const projectsData=useStaticQuery(graphql`
        query{
            allDatoCmsProyecto(limit: 4) {
            edges {
                node {
                    slug
                    titulo
                    lenguajes
                }
            }
            }
        }
      
    `);
    if( !projectsData?.allDatoCmsProyecto?.edges ) return null;
    return ( 
        <Container maxWidth="lg">
            <h2 className={classes.titulo} > <CodeIcon/> My work</h2>
            <Grid container spacing={3}>
                    {projectsData.allDatoCmsProyecto.edges.map(project=>(
                        <Grid item xs={12} md={6} lg={6} key={project.node.slug} >
                            <ProjectCard  project={project} />
                        </Grid>
                    ))}
            </Grid>
            <Link className={classes.enlace} to='/my-work' >
                <Button color='secondary' variant='contained' size='large' >All projects</Button>
            </Link>
        </Container>
     );
}
 
export default ProjectsPreview;