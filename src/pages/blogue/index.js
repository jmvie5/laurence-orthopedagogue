import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {Seo} from "../../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blogue">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 place-content center font-mulish">
                {data.allMdx.nodes.map((node) => (
                    <Link to={`/blogue/${node.frontmatter.slug}`} key={node.id}>
                        <article
                            key={node.id}
                            className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105 h-full"
                        >
                            <h2 className="font-bold text-xl text-center font-mulish">{node.frontmatter.title}</h2>
                            <GatsbyImage
                                image={getImage(node.frontmatter.image)}
                                alt={node.frontmatter.image_alt}
                                className="rounded-xl max-w-xs bg-contain"
                            />
                            <p className="font-mulish">Publication : {node.frontmatter.date}</p>
                        </article>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo title={"Blogue"} description={"Blogue de Laurence bf, orthopédagogue"}/>
)

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
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
    }
`;

export default BlogPage;
