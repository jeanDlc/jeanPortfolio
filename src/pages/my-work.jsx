import React from 'react';
import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import {graphql, Link} from 'gatsby';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
/**styles**************************************************************************** */
const useStyles = makeStyles((theme)=>({
    title:{
        textAlign:'center',
       marginTop:'8rem',
       marginBottom:'3rem',
       fontSize:'5.6rem',
       '& svg':{
           fontSize:'4.5rem'
       }
    },
    description:{
        marginBottom:'3rem',
    },
    enlace:{
        color:theme.palette.secondary.main,
        textDecoration:'underline',
        '&:hover':{
            color:theme.palette.primary.main,
        }
    }
}));
/**Component************************************************************************ */
const MyWork = ({data}) => {
    console.log(data.allDatoCmsProyecto.edges);
    const classes=useStyles();
    
    return ( 
        
        <Layout>
            <Container maxWidth='lg' >
                <h1 className={classes.title} > <CodeIcon/> My work</h1>
                <p className={classes.description}>
                    You can see all my work and personal projects, if you like some of them , <Link className={classes.enlace} to='/contact' >contact to me</Link> 
                </p>
                <Grid container spacing={3}>
                    {data.allDatoCmsProyecto.edges.map(project=>(
                        <Grid key={project.node.slug} item xs={12} md={6} >
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
     );
}
export const data=graphql`
    {
        allDatoCmsProyecto(limit: 10) {
            edges {
                node {
                    titulo
                    lenguajes
                    enlace,
                    slug
                }
            }
        }
    }
`;
 
export default MyWork;