import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import {useStaticQuery , graphql} from 'gatsby';
import Img from "gatsby-image";
/**styles******************************************************************** */
const useStyles = makeStyles((theme)=> ({
    section:{
        marginTop:'2.5rem'
    },
    presentation: {
      '& h1':{
          fontSize:'3rem',
          fontWeight:'bold',
          marginBottom:'1rem',
          [theme.breakpoints.up('sm')]: {
            fontSize:'4rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize:'5.5rem',
          },
      },
      '& p':{
          marginBottom:'1rem',
        [theme.breakpoints.up('md')]: {
            fontSize:'2rem',
        },
      }
    },
    buttonContact:{
        margin:'1rem 0 2rem 0',
        display:'inline-block'
    },
    imageContainer:{
        width:'100%'
    }
}));
/**component***************************************************************** */
const PresentationCard = () => {
    const {datoCmsPresentationCard} =useStaticQuery(graphql`
        query MyQuery {
            datoCmsPresentationCard {
            description
            title
                photo {
                    fluid(maxWidth: 600) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    `);

    const classes = useStyles();
    return ( 
        <section className={classes.section} >
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={6} md={7} lg={8}>
                        <div className={classes.presentation} >
                            <h1>{datoCmsPresentationCard.title}</h1>
                            {datoCmsPresentationCard.description.split('.').map((texto, index)=>(
                                <p key={index} > {texto}</p>
                            ))}
                            <Link to={'/contact'} className={classes.buttonContact} >
                               <Button variant='contained' color='primary' size='large'>Talk to me</Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={4} >
                        <Img fluid={datoCmsPresentationCard.photo.fluid} />
                    </Grid>
                </Grid>
            </Container>
            
        </section>
     );
}
 
export default PresentationCard;