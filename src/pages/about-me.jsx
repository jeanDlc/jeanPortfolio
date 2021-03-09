import { Container } from '@material-ui/core';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
/**styles***************************************************************************** */
const useStyles = makeStyles(theme=> ({
    section:{
        margin:'4rem 0'
    },
    item: {
      textAlign:'center',
      width:'100%',
      textTransform:'capitalize'
    },
    headerList:{
        textAlign:'center',
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.primary.light
    },
    enlace:{
        display:'inline-block',
        margin:'1rem 0'
    }
  }));
/**component***************************************************************************** */
const AboutMe = ({data}) => {
    const skills=JSON.parse(data.datoCmsAboutMe.skills).skills;
    const classes=useStyles();
    
    if(!data?.datoCmsAboutMe?.skills) return null;
    return ( 
        <Layout>
            <Container maxWidth="md" >
                <main className={classes.section} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <h1>{data.datoCmsAboutMe.titulo}</h1>
                            {data.datoCmsAboutMe.descripcion.split('.').map((parrafo, index)=>(
                                <p key={index} >{parrafo} </p>
                            ))}
                            <Link to='/contact' className={classes.enlace} >
                                <Button variant='outlined' color='secondary' >Contact</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                            <Img fluid={data.datoCmsAboutMe.imagen.fluid} />
                        </Grid>
                    </Grid>
                </main>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={4}>
                            <List component="div"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                <ListSubheader className={classes.headerList} component="h3" id="nested-list-subheader">
                                        Languages
                                </ListSubheader>
                                }
                            >
                                {skills.lenguajes.map(lenguaje=>(
                                    <ListItem  button key={lenguaje} >
                                        <p className={classes.item} >{lenguaje} </p>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <List component="div"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                    <ListSubheader className={classes.headerList}  component="h3" id="nested-list-subheader">
                                        Frameworks
                                    </ListSubheader>
                                    }
                                >
                                    {skills.frameworks.map(framework=>(
                                        <ListItem button key={framework} >
                                            <p className={classes.item}>{framework} </p>
                                        </ListItem>
                                    ))}
                                </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <List component="div"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                <ListSubheader className={classes.headerList}  component="h3" id="nested-list-subheader">
                                    Soft skills
                                </ListSubheader>
                                }
                            >
                                {skills.softskills.map(softskill=>(
                                    <ListItem button key={softskill} >
                                        <p className={classes.item}>{softskill} </p>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                </Grid>
            </Container>
        </Layout>
     );
}
export const data=graphql`
    query {
        datoCmsAboutMe {
            descripcion
            skills
            titulo
            imagen {
                fluid{
                        ...GatsbyDatoCmsFluid
                }
            }
        }
    }
` 
export default AboutMe;