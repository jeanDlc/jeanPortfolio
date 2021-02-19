import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container maxWidth="lg">
        <p>Index</p>
        <h1>H1</h1>
        <h2>H2</h2>
        <Button variant="contained" color='secondary'>
        Primary
      </Button>
    </Container>
    
  </Layout>
)

export default IndexPage
