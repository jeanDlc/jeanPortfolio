import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'gatsby';
import Button from '@material-ui/core/Button';
/**styles******************************************************************** */
const useStyles = makeStyles((theme)=> ({
    constenedorDiv:{
        marginBottom:'2rem'
    },
    
    info:{
        color: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45rem',
        padding: '1rem',
        transition: 'all .3s ease-out',
        backgroundColor:theme.palette.primary.main ,
        '&:hover':{
            backgroundColor:'rgba(21,19,19,.95)' ,
        },
    },
    enlace:{
        display:'inline-block',
        marginTop:'2rem',
        
    },
    tecnologias:{
        textTransform:'capitalize'
    }
}));
/**component***************************************************************** */
const ProjectCard = ({project}) => {
    const {node : {slug,titulo, lenguajes}}=project;
    const {tecnologias}=JSON.parse(lenguajes)
    const classes=useStyles();
    return ( 
        <div className={classes.constenedorDiv} >
           <div className={classes.info} >
                <h2>{titulo} </h2>
                <p>{tecnologias.map(tecnologia=>(
                    <span className={classes.tecnologias} key={tecnologia} >{tecnologia}, </span>
                ))} </p>
                <Link to={'/'} className={classes.enlace} >
                    <Button variant="outlined" color="secondary" >See more</Button>
                </Link>
            </div>
        </div>
        );
}
 
export default ProjectCard;