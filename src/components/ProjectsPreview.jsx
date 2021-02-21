import React from 'react';
import Container from '@material-ui/core/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
/**styles******************************************************************** */
const useStyles = makeStyles((theme)=> ({
    titulo:{
        margin:'6rem 0 3rem 0',
        textAlign:'center',
        [theme.breakpoints.up('md')]: {
            textAlign:'start'
        },
    },
    
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
                    imagen {
                        fluid(maxWidth: 1920) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
            }
        }
      
    `);
    
    return ( 
        <Container maxWidth="lg">
            <h2 className={classes.titulo} >My work</h2>
            <Grid container spacing={3}>
                    {projectsData.allDatoCmsProyecto.edges.map(project=>(
                        <Grid item xs={12} md={6} lg={6} key={project.node.slug} >
                            <ProjectCard  project={project} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
     );
}
 
export default ProjectsPreview;