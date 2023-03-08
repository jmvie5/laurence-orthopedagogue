import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ( {data} ) => {
    return (
        <Layout pageTitle="Blogue">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 place-content center font-mulish">
                {
                    data.allMdx.nodes.map(node => (
                            <article key={node.id} className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105">
                                <Link to={`/blogue/${node.frontmatter.slug}`}>
                                    <h2 className="font-bold text-2xl">
                                        {node.frontmatter.title}
                                    </h2>
                                </Link>
                                <Link to={`/blogue/${node.frontmatter.slug}`}>
                                    <GatsbyImage image={getImage(node.frontmatter.image)} alt={node.frontmatter.image_alt} className="rounded-xl max-h-80"/>
                                </Link>
                                <p>{node.frontmatter.summary}</p>
                                <p>Publication : {node.frontmatter.date}</p>
                            </article>
                    ))
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
                frontmatter {
                    date(formatString: "DD-MM-YYYY")
                    title
                    slug
                    summary
                    image {
                        childImageSharp {
                          gatsbyImageData
                        }
                    }
                    image_alt
                }
                id
            }
        }
    }`

export default BlogPage