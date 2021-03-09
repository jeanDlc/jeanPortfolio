import React from "react"
import Box from '@material-ui/core/Box';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
/**Estilos */
const useStyles = makeStyles((theme) => ({
  main:{
    textAlign:'center',
    minHeight:'80vh',
    marginTop:'22rem',
    '& h1':{
      [theme.breakpoints.down('md')]:{
        fontSize:'3rem',
      }
    },
    [theme.breakpoints.up('md')]:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:0
    },
    
  }
}));
/**Component */
const NotFoundPage = () => {
  const classes=useStyles();
  return (
    <Layout>
      <SEO title="404: Not found" />
      <main className={classes.main} >
          <h1>404: Not Found</h1>
          <p>I'm sorry, that route doesn&#39;t exist...</p>
      </main>
      
    </Layout>
  )
}

export default NotFoundPage
