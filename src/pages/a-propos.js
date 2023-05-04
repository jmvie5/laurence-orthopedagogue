import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return (
        <Layout pageTitle="À propos">
            <div className="flex flex-col gap-8 font-mulish">
                <h1 className="self-center text-2xl text-bold">Qui se trouve derrière la page Laurence bf, orthopédagogue?</h1>
                <p className="self-center">Pour apprendre un peu plus à me connaitre, voici un aperçu de mon cheminement scolaire qui m’a menée jusqu’à la création de cette plateforme.</p>
                <div className="border-t-8 border-l-8 border-lbf-orange rounded-tl-2xl p-8 max-w-3xl self-center">
                    <div className="pb-6">
                        <StaticImage src="../images/cleSol.svg" alt="Clé de sol" className="float-right bg-center bg-contain bg-no-repeat w-16 h-32"/>
                        <p>
                            Printemps 2015. Je termine mes études collégiales en musique. La jeune pianiste que j’étais avait besoin d’une pause de musique. Mais j’hésitais. Aller en enseignement, ou m’inscrire dans un programme de littérature française?
                        </p>
                    </div>
                    
                    <div className="pb-6">
                        <StaticImage src="../images/livre.svg" alt="Livre" className="bg-center bg-contain bg-no-repeat float-left w-44 h-28"/>
                        <p>
                            J’ai envie de suivre ma passion de toujours. Gagner la bourse d’excellence en français de mon Cégep me donne le petit coup de pied nécessaire : je m’inscris en littérature! Et hop! Quel revirement de situation!
                        </p>
                    </div>
                    <div>
                        <StaticImage src="../images/crayon.svg" alt="Crayon" className="bg-center bg-contain bg-no-repeat float-right w-20 h-38"/>
                        <p>
                            Dès que j’appuie sur le bouton « accepter », je suis envahie de regrets. Non, en fait, je me vois devenir enseignante. C’est décidé, je serai enseignante. Allez, je m’inscris!
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-bold pb-4">Études et expérience</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            C’est en 2019 que j’ai obtenu mon diplôme avec mention distinction (BACC éducation préscolaire et enseignement primaire) et mon permis d’enseigner au Québec. À la fin de mes études de premier cycle, je ne me sentais pas prête à quitter le monde universitaire. Que voulez-vous? J’adore apprendre! J’ai donc commencé à enseigner à temps partiel tout en commençant mes études de 2e cycle. 
                        </p>
                        <p>
                            Mon choix de programme s’est arrêté sur la maitrise avec mémoire en psychopédagogie - adaptation scolaire, ce qui m’ouvrait les portes à une carrière d’orthopédagogue. Le mémoire me permettait également de m’ouvrir au monde de la recherche en éducation, ce qui m’intéressait particulièrement. D’autant plus que mon projet de recherche était directement lié à ma passion de toujours : la littératie (lecture/écriture). Ma recherche m’a permis de démontrer les impacts positifs d’une approche centrée sur l’élève sur la motivation et le développement des compétences. J’ai d’ailleurs présenté ces résultats de recherche dans un colloque organisé par l’ACFAS. 
                        </p>
                        <p>
                            Poursuivre mes études à temps partiel m’a permis de garder un pied dans le milieu. J’ai pu travailler auprès d’enfants de tous âges. J’ai porté le chapeau d’enseignante au régulier, en adaptation scolaire - trouble du langage et d’orthopédagogue en pratique privée. Ce mode hybride (travail/études) m’apporte beaucoup côté développement professionnel ; je ne suis toujours pas prête à arrêter d’étudier! D’ailleurs, quand j’ai terminé mes cours de 2e cycle, je me suis tout de suite inscrite au certificat en sciences du langage, que j’ai terminé au printemps 2022. 
                        </p>
                        <p>
                            Bref, le milieu scientifique de l’éducation m’intéresse beaucoup, ce qui a un gros impact sur ma pratique. Je reste à l'affut des dernières publications, ce qui me permet d’augmenter mon bagage de connaissances. 
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-bold pb-4">Pourquoi Laurence bf, orthopédagogue?</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            Avec la plateforme <strong>Laurence bf, orthopédagogue</strong>, je peux transmettre mes connaissances aux acteurs les plus importants dans la vie d’un enfant : vous, <strong>les parents</strong>. Il m’est arrivé beaucoup trop souvent de rencontrer des parents qui voulaient aider leurs enfants à développer leurs compétences et à acquérir des connaissances, mais qui ne savaient tout simplement pas comment faire. Quand je travaille avec des enfants, je suis capable d’intervenir sur leurs principales difficultés, mais bien souvent, je ne les vois qu’une fois par semaine (et même parfois aux deux semaines) ; mon pouvoir reste donc tout de même limité. 
                        </p>
                        <p>
                            C’est donc à vous, les parents, que s’adresse cette plateforme, puisque c’est vous qui êtes aux premières loges des devoirs de votre enfant.
                        </p>
                        <p className="px-4 mt-2 font-bold border-l-4 border-lbf-orange">
                            Mon but est de vous transmettre des outils et des savoirs qui vous permettront de mieux cibler les besoins de votre enfant et de mieux intervenir auprès de lui, et ce, dans un état d’esprit positif afin de favoriser la motivation de votre enfant (et la bonne humeur familiale lors du moment des leçons!)
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-bold pb-4">Mon champ d’intervention</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            Si vous regardez mon parcours universitaire, vous ne serez pas surpris si je vous dis que mon champ d’intervention principal est le français (lecture/écriture). Bien que je travaille aussi avec des enfants qui éprouvent des difficultés en mathématiques, mon dada, c’est le français. Et comme cette discipline m’intéresse énormément, c’est devenu mon expertise.  
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-bold pb-4">Mon approche</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            Lorsque je travaille avec les enfants, j’ai toujours un objectif pédagogique en tête. Cet objectif principal est relié aux difficultés que l’enfant rencontre. Pour ce faire, je prends le temps de connaitre l’enfant qui se trouve devant moi : quelles sont ses passions? Que fait-il dans son temps libre? Quelle est son émission préférée? Pratique-t-il un sport? Quel est son film/livre préféré? Cela me permet de travailler en lien avec les intérêts de l’enfant. Plus je connais de choses sur l’enfant, plus je peux intervenir en prenant en considération ses champs d’intérêt. Si Frédérique adore les dauphins, je peux lui sortir un roman qui rejoint cet intérêt. Pour moi, c’est extrêmement important que l’enfant avec qui je travaille ait du plaisir à venir me voir. Apprendre dans le plaisir, c’est bien plus amusant, non? Les conseils que j’offre aux parents vont donc dans le même sens : je veux que vous travailliez dans le plaisir avec votre enfant!   
                        </p>
                    </div>
                </div>
                <div className="self-end">
                    <p className="font-satisfy text-3xl">Laurence bf, orthopédagogue</p>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage

export const Head = () => (
    <Seo title={"À propos"} description={"Qui se trouve derrière la page Laurence bf, orthopédagogue?"}/>
  )
