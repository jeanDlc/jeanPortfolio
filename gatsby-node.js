exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query  {
            allDatoCmsProyecto {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.allDatoCmsProyecto.edges.forEach(edge => {
      const slug = edge.node.slug;
      
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/project-preview.js`),
        context: { slug: slug },
      })
    })
}