import etiquettes_pdf from "./Étiquettes pour le Guess Who des mots de vocabulaire.pdf";
import liste_questions from "./Guess Who - liste de questions.pdf";

export default function GuessWhoPost() {
  return (
    <div>
      <p className="p-4 font-mulish">
        Cette semaine, je reviens avec une autre idée de jeu pour étudier les
        mots de vocabulaire (parce que c’est vraiment un gros morceau de l’étude
        du soir, on ne se le cachera pas)!{" "}
      </p>

      <p className="p-4 font-mulish">
        L’idée, c’est de reprendre le concept de Guess Who, mais plutôt que de
        faire deviner des personnages, votre enfant doit deviner et faire
        deviner des mots.{" "}
      </p>

      <p className="p-4 font-mulish md:mb-40 lg:mb-0">
        D’abord, il faut construire le jeu.{" "}
      </p>

      <div className="flex flex-col border-4 border-lbf-orange rounded-lg md:mx-10 my-10 px-10 py-6 gap-2 font-mulish">
        <p>Voici ce dont vous aurez besoin :</p>
        <ul className="list-disc list-inside pb-6">
          <li className="pl-4">Un jeu classique de Guess Who ;</li>
          <li className="pl-4">
            Étiquettes vierges (téléchargement du canevas disponible à la fin de
            l’article) ;{" "}
          </li>
          <li className="pl-4">Crayons</li>
        </ul>
        Création du jeu : Vous pouvez faire une dictée des mots de vocabulaire
        pour que votre enfant écrive ses mots sur les étiquettes. Mais
        attention! Les mots doivent être bien orthographiés! La dictée des mots
        doit se faire au moins deux fois afin d’avoir les cartes pour les deux
        plateaux de jeu. Il faudra aussi des cartes pour piger le mot à faire
        deviner. Ensuite, vous insérez les cartes dans les plateaux, à la place
        des personnages. C’est tout à fait possible que votre enfant ne possède
        pas assez de mots de vocabulaire dans sa semaine pour remplir les
        plateaux au complet. Il y aura tout simplement moins de cases levées. Et
        s’il reste de la place, vous pouvez aussi reprendre des mots de
        vocabulaire plus difficiles des semaines précédentes. Ça permet de les
        réviser et de les retravailler! Déroulement de la partie : Vous jouez en
        suivant les règles du jeu traditionnel : le joueur 1 doit poser une
        question fermée (oui ou non) au joueur 2 afin de trouver le mot de ce
        dernier. Cela permet au joueur 1 d’éliminer (en baissant les petites
        fenêtres) les mots qui ne répondent pas au critère demandé.
        <p className="pt-6">
          But du jeu : être le premier joueur à deviner le mot de son
          adversaire.
        </p>
      </div>
      <div className="flex flex-col gap-4 font-mulish">
        Voici des idées de questions à poser (téléchargement de la liste
        disponible à la fin de l’article. Vous pouvez l’imprimer et la garder à
        proximité pour donner des idées à votre enfant) :
        <ol className="list-decimal ml-8 space-y-1">
          <li className="break-words">
            Est-ce un nom commun / adjectif / déterminant / verbe / adverbe /
            etc.?
          </li>
          <li>Est-ce qu’il compte 2 syllabes?</li>
          <li>Est-ce qu’il se termine par une lettre muette?</li>
          <li>Est-ce qu’on entend le son [en] dedans?</li>
          <li>
            Est-ce que le sens du mot est en lien avec une partie du corps?
          </li>
          <li>Est-ce que le mot a un sens abstrait?</li>
          <li>Est-ce que le mot rime avec « bleu »?</li>
          <li>
            Est-ce que le mot me permet de relier d’autres mots ensemble? (ex.:
            les prépositions, les conjonctions, etc.)
          </li>
          <li>Est-il féminin/masculin/pluriel?</li>
        </ol>
        <h2 className="underline pt-2">Matériel à télécharger :</h2>
        <ul className="list-disc list-inside">
          <li className="pl-4">
            <a
              href={etiquettes_pdf}
              download
              className="underline text-blue-500"
            >
              Guess Who - Étiquettes vierges{" "}
            </a>
            {` `}
          </li>
          <li className="pl-4">
            <a
              href={liste_questions}
              download
              className="underline text-blue-500"
            >
              Guess Who - Liste de questions
            </a>
            {` `}
          </li>
        </ul>
      </div>
    </div>
  );
}
