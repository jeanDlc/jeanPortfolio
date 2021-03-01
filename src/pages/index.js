import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import PresentationCard from "../components/PresentationCard";
import ProjectsPreview from "../components/ProjectsPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <PresentationCard/>
    </main>
    <ProjectsPreview/>
  </Layout>
)

export default IndexPage
