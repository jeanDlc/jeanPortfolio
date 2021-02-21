import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
const useProjects = () => {
    const projects=useStaticQuery(graphql`
        query  {
            allDatoCmsProyecto {
                edges {
                    node {
                        titulo
                        lenguajes
                        enlace
                        descripcion
                        imagen {
                            fluid {
                            ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    return projects;
}
 
export default useProjects;