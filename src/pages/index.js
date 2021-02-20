import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PresentationCard from "../components/PresentationCard";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PresentationCard/>
    <Container maxWidth="lg">
        <h1>My work</h1>
    </Container>
    
  </Layout>
)

export default IndexPage
