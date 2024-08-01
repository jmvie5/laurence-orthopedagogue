import { Image } from "@nextui-org/react";
import laurence_bibli from "../assets/images/laurence_bibli.webp";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { posts } from "../blog/blog_data";

export const meta: MetaFunction = () => {
  return [
    { title: "Laurence bf, Orthopédagogue" },
    {
      name: "description",
      content:
        "Laurence Bernard-Fontaine est l’orthopédagogue derrière la page Laurence bf, orthopédagogue. Elle est spécialisée en difficultés d’apprentissage en français (lecture/écriture) auprès d’enfants de tous âges.",
    },
  ];
};

//Newsletter : https://javascript.plainenglish.io/how-to-create-a-newsletter-with-mailchimp-gatsby-js-netlify-d48778d5c774

const MainIndex = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:inline bg-lbf-orange lg:ml-40 p-4 rounded-lg gap-2 shadow-md shadow-gray-500 font-mulish">
        <p className="text-xl font-bold sm:pb-2">Laurencebf, orthopédagogue</p>
        <Image
          src={laurence_bibli}
          className="float-right self-center bg-contain bg-top h-96 min-[340px]:w-72 m-2 rounded-xl"
          alt="Photo de Laurence Bernard-Fontaine"
          removeWrapper
        />
        <p className="text-lg">
          Laurence Bernard-Fontaine est l’orthopédagogue derrière la page
          Laurence bf, orthopédagogue. Elle est spécialisée en difficultés
          d’apprentissage en français (lecture/écriture) auprès d’enfants de
          tous âges. Comme elle a le désir d’aider le plus d’enfants possible à
          développer leurs compétences littéraciques (lecture-écriture), elle a
          décidé de créer l’espace Laurence bf, orthopédagogue pour rejoindre
          les parents, les acteurs les plus importants dans la vie des enfants.
          Son but est de soutenir et d’aider les parents qui se questionnent sur
          les façons d’intervenir auprès de leur enfant qui rencontre des
          difficultés en français.
        </p>
      </div>
      <div className="flex flex-col items-center pt-4">
        <div className="text-xl pb-4 font-mulish">
          Articles récemment publiés
        </div>
        <div>
          <div className="grid grid-col-1 md:grid-cols-3 gap-8">
            {posts
              .sort(function (a, b) {
                return b.date.getTime() - a.date.getTime();
              })
              .map((post, index) => {
                if (index < 3) {
                  return (
                    <Link to={`/blogue/${post.slug}`} key={post.slug}>
                      <article className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105 h-full">
                        <h2 className="font-bold text-xl text-center font-mulish">
                          {post.title}
                        </h2>
                        <Image
                          src={post.image}
                          alt={post.image_alt}
                          className="rounded-xl max-w-xs bg-contain"
                        />
                        <p className="font-mulish">
                          Publication :{" "}
                          {post.date.toLocaleDateString("fr-CA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </article>
                    </Link>
                  );
                }
              })}
            {/*data.allMdx.nodes.map((node) => (
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
                                    <p className="font-mulish">Publication : {node.frontmatter.date}</p>
                                </article>
                            </Link>
                        ))*/}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xl pb-4 font-mulish self-center">
          Suivez-moi sur Instagram!
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
          <iframe
            src="https://www.instagram.com/p/C6_QPWMRiwD/embed"
            className="h-96 rounded-lg shadow"
            title="Les évaluations, à quoi ça sert?"
          ></iframe>
          <iframe
            src="https://www.instagram.com/reel/C6wNEcILvAK/embed"
            className="h-96 rounded-lg shadow"
            title="Un superbe outil à utiliser, parfait pour la révision de la fin de l’année scolaire!"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/C6tOrNTLpXA/embed"
            className="h-96 rounded-lg shadow"
            title="La motivation en fin d'année scolaire : comment aider son enfant à garder le cap"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/C6JLhoirkCk/embed"
            className="h-96 rounded-lg shadow"
            title="A-t-on besoin d'une bibliothèque pleine à craquer pour faire émerger le plaisir de lire chez notre enfant?"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainIndex;
