import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';

/*Voir liens suivants pour embed images dans mdx avec gatsby image
https://stackoverflow.com/questions/67227977/gatsby-static-imagegatsby-plugin-image-inside-mdx
https://www.gatsbyjs.com/blog/mdx-embedded-gatsby-image/
*/

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.image);
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p className="pb-4 font-mulish">Date de publication : {data.mdx.frontmatter.date}</p>
            <div className="flex flex-col md:inline md:ml-4 md:p-24">
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.image_alt}
                    className="md:float-right md:ml-8 mt-4 rounded-lg max-w-sm self-center"
                />
                <MDXProvider
                    localImages={data.mdx.frontmatter.embeddedImagesLocal}
                    components={{
                        p: (props) => <p {...props} style={{ fontFamily: 'Mulish', paddingBottom: 16 }} />,
                        strong: (props) => <strong {...props} style={{ fontWeight: 700, fontSize: 20 }} />,
                    }}
                >
                    {children}
                </MDXProvider>
            </div>
            <Link
                to="/blogue"
                className="flex flex-row w-24 h-10 p-2 mt-4 items-center border border-black rounded-lg shadow-2xl font-mulish"
            >
                <ArrowSmallLeftIcon className="w-6 h-6" />
                <p className="font-mulish">Retour</p>
            </Link>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "DD-MM-YYYY")
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                image_alt
            }
        }
    }
`;
export default BlogPost;
