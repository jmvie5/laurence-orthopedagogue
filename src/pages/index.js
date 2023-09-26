import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";
import { Link, graphql } from "gatsby";

//Newsletter : https://javascript.plainenglish.io/how-to-create-a-newsletter-with-mailchimp-gatsby-js-netlify-d48778d5c774

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:inline bg-lbf-orange lg:ml-40 p-4 rounded-lg gap-2 shadow-md shadow-gray-500 font-mulish">
          <p className="text-xl font-bold sm:pb-2">
            Laurencebf, orthopédagogue
          </p>
          <StaticImage
            src="../images/laurence_bibli.webp"
            className="float-right self-center bg-contain bg-top h-96 min-[340px]:w-72 m-2 rounded-xl"
            alt="Photo de Laurence Bernard-Fontaine"
          />
          <p className="text-lg">
            Laurence Bernard-Fontaine est l’orthopédagogue derrière la page
            Laurence bf, orthopédagogue. Elle est spécialisée en difficultés
            d’apprentissage en français (lecture/écriture) auprès d’enfants de
            tous âges. Comme elle a le désir d’aider le plus d’enfants possible
            à développer leurs compétences littéraciques (lecture-écriture),
            elle a décidé de créer l’espace Laurence bf, orthopédagogue pour
            rejoindre les parents, les acteurs les plus importants dans la vie
            des enfants. Son but est de soutenir et d’aider les parents qui se
            questionnent sur les façons d’intervenir auprès de leur enfant qui
            rencontre des difficultés en français.
          </p>
        </div>
        <div className="flex flex-col items-center pt-4">
          <div className="text-xl pb-4 font-mulish">
            Articles récemment publiés
          </div>
          <div>
            <div className="grid grid-col-1 md:grid-cols-3 gap-8">
              {data.allMdx.nodes.map((node) => (
                <Link to={`/blogue/${node.frontmatter.slug}`}>
                  <article
                    key={node.id}
                    className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105 h-full"
                  >
                    <h2 className="font-bold text-xl text-center font-mulish">
                      {node.frontmatter.title}
                    </h2>
                    <GatsbyImage
                      image={getImage(node.frontmatter.image)}
                      alt={node.frontmatter.image_alt}
                      className="rounded-xl max-w-xs bg-contain"
                    />
                    <p className="font-mulish">
                      Publication : {node.frontmatter.date}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl pb-4 font-mulish self-center">
            Suivez-moi sur Instagram!
          </div>
          <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
            <iframe
              src="https://www.instagram.com/p/CxDSElZr_4m/embed"
              className="h-96 rounded-lg shadow"
              title="Réviser en s'amusant avec les cartes éducatives"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/Cv9wSS1g4xD/embed"
              className="h-96 rounded-lg shadow"
              title="La fée des livres"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/Cvrs2rnvOaH/embed"
              className="h-96 rounded-lg shadow"
              title="Pause lecture!"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/CuCc2iSrUMs/embed"
              className="h-96 rounded-lg shadow"
              title="Stratégies d'études, la récupération"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
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

export default IndexPage;

export const Head = () => <Seo />;
