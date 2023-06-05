import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Seo } from '../components/seo'
import { Link, graphql } from 'gatsby'

//Newsletter : https://javascript.plainenglish.io/how-to-create-a-newsletter-with-mailchimp-gatsby-js-netlify-d48778d5c774

const IndexPage = ({data}) => {

return (
    <Layout pageTitle="">
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col sm:flex-row bg-lbf-orange lg:ml-40 p-4 rounded-lg gap-8 shadow-md shadow-gray-500 font-mulish'>
                <div>
                    <p className='text-xl font-bold pb-2'>Laurencebf, orthopédagogue</p>
                    <p className='text-lg'>Laurence Bernard-Fontaine est l’orthopédagogue derrière la page Laurence bf, orthopédagogue. Elle est spécialisée en difficultés d’apprentissage en français (lecture/écriture) auprès d’enfants de tous âges. Comme elle a le désir d’aider le plus d’enfants possible à développer leurs compétences littéraciques (lecture-écriture), elle a décidé de créer l’espace Laurence bf, orthopédagogue pour rejoindre les parents, les acteurs les plus importants dans la vie des enfants. Son but est de soutenir et d’aider les parents qui se questionnent sur les façons d’intervenir auprès de leur enfant qui rencontre des difficultés en français. 
                    </p>
                </div>
                <div className='self-center sm:self-auto'>
                    <StaticImage src='../images/laurence_bibli.jpg' className='float-rght bg-contain bg-top h-96 w-72 rounded-xl' alt='Photo de Laurence Bernard-Fontaine'/>
                </div>
            </div>
            <div className='flex flex-col items-center pt-4'>
                <div className="text-xl pb-4 font-mulish">
                    Articles récemment publiés
                </div>
                <div>
                    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content center">
                    {
                        data.allMdx.nodes.map(node => (
                            <Link to={`/blogue/${node.frontmatter.slug}`} >
                                <article key={node.id} className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105 h-full">
                                    <h2 className="font-bold text-xl text-center font-mulish">
                                        {node.frontmatter.title}
                                    </h2>
                                    <GatsbyImage image={getImage(node.frontmatter.image)} alt={node.frontmatter.image_alt} className="rounded-xl max-w-xs bg-contain"/>
                                    <p className='font-mulish'>Publication : {node.frontmatter.date}</p>
                                </article>
                            </Link>
                                
                        ))
                    }
                    </div>
                </div>
            </div>
            
            <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center'>
                <iframe src='https://www.instagram.com/p/Cri0KKDr5vJ/embed' className='h-96 rounded-lg shadow' title='Ça fait quoi, une orthopédagogue?'></iframe>
                <iframe src='https://www.instagram.com/p/CrayLL2OYD-/embed' className='h-96 rounded-lg shadow' title='Le plaisir de lire.'></iframe>
                <iframe src='https://www.instagram.com/p/Cq-wgC1rBXS/embed' className='h-96 rounded-lg shadow' title="Que faire quand mon enfant se trompe?"></iframe>
                <iframe src='https://www.instagram.com/p/Cqsu4nxMtUJ/embed' className='h-96 rounded-lg shadow' title='Journée de la persévérance scolaire.'></iframe>
            </div>
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

export default IndexPage

export const Head = () => (
<Seo />
)
