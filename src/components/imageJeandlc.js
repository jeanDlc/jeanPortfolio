import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const ImageJeandlc = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jeandlc.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return 'JeanDLC'
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ImageJeandlc
