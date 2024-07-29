import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Image } from '@nextui-org/react';
import de_fr from '../../blogue/de/de_fr.pdf';
import de_en from '../../blogue/de/de_en.pdf';
import de_temps from '../../blogue/de/de_temps.pdf';
import de_vierge from '../../blogue/de/de_vierge.pdf';

import etiquettes_pdf from '../../blogue/guess-who/Étiquettes pour le Guess Who des mots de vocabulaire.pdf';
import liste_questions from '../../blogue/guess-who/Guess Who - liste de questions.pdf';

import guide from '../../blogue/rentree/Guide de la rentrée.pdf';

import rencontre_bulletin from '../../blogue/rencontre-parents/questions.pdf';

export const meta: MetaFunction = () => {

    return [
      { title: "Matériel" },
      { name: "description", content: "Matériel pédagogique présenté dans les différents blogues." },
    ];
};

const MaterielPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="p-1 text-xl ml-4">Dé de conjugaison</h2>
                <div className="border-8 border-lbf-orange rounded-2xl p-4">
                    <Image
                        src="../images/de-isole.webp"
                        alt="Dé de conjugaison"
                        className="float-right bg-center bg-contain bg-no-repeat lg:mr-8 w-32 h-32"
                    />
                    <p className="pb-2">Liens pour téléchargement :</p>
                    <ul className="list-disc list-inside">
                        <li className="pl-4">
                            <a href={de_fr} download className="underline text-blue-500">
                                Dé avec les personnes
                            </a>
                            {` `}
                        </li>
                        <li className="pl-4">
                            <a href={de_temps} download className="underline text-blue-500">
                                Dé avec les temps (présent, passé composé, imparfait, plus-que-parfait, conditionnel
                                présent, futur simple)
                            </a>
                            {` `}
                        </li>
                        <li className="pl-4">
                            <a href={de_en} download className="underline text-blue-500">
                                Dé avec les personnes -ANGLAIS
                            </a>
                            {` `}
                        </li>
                        <li className="pl-4">
                            <a href={de_vierge} download className="underline text-blue-500">
                                Dé vierge
                            </a>
                            {` `}
                        </li>
                    </ul>
                    <p className="pt-2">
                        Pour plus de détails, allez voir{' '}
                        <Link to="/blogue/de" className="underline text-blue-500">
                            l'article complet.
                        </Link>
                    </p>
                </div>
            </div>

            <div>
                <h2 className="p-1 text-xl ml-4">Guess Who des mots de vocabulaire</h2>
                <div className="border-8 border-lbf-orange rounded-2xl p-4">
                    <p className="pb-2">Liens pour téléchargement :</p>
                    <ul className="list-disc list-inside">
                        <li className="pl-4">
                            <a href={etiquettes_pdf} download className="underline text-blue-500">
                                Guess Who - Étiquettes vierges{' '}
                            </a>
                            {` `}
                        </li>
                        <li className="pl-4">
                            <a href={liste_questions} download className="underline text-blue-500">
                                Guess Who - Liste de questions
                            </a>
                            {` `}
                        </li>
                    </ul>
                    <p className="pt-2">
                        Pour plus de détails, allez voir{' '}
                        <Link to="/blogue/guess-who" className="underline text-blue-500">
                            l'article complet.
                        </Link>
                    </p>
                </div>
            </div>

            <div>
                <h2 className="p-1 text-xl ml-4">Guide de la rentrée</h2>
                <div className="border-8 border-lbf-orange rounded-2xl p-4">
                    <p className="pb-2">Lien pour téléchargement :</p>
                    <ul className="list-disc list-inside">
                        <li className="pl-4">
                            <a href={guide} download className="underline text-blue-500">
                                Guide de la rentrée
                            </a>
                            {` `}
                        </li>
                    </ul>
                    <p className="pt-2">
                        Pour plus de détails, allez voir{' '}
                        <Link to="/blogue/rentree" className="underline text-blue-500">
                            l'article complet.
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <h2 className="p-1 text-xl ml-4">
                    Quelles questions poser à l’enseignante de votre enfant lors de la première rencontre
                    individuelle?
                </h2>
                <div className="border-8 border-lbf-orange rounded-2xl p-4">
                    <p className="pb-2">Lien pour téléchargement :</p>
                    <ul className="list-disc list-inside">
                        <li className="pl-4">
                            <a href={rencontre_bulletin} download className="underline text-blue-500">
                                Questions à poser à l'enseignante de mon enfant
                            </a>
                            {` `}
                        </li>
                    </ul>
                    <p className="pt-2">
                        Pour plus de détails, allez voir{' '}
                        <Link to="/blogue/rencontre-bulletin" className="underline text-blue-500">
                            l'article complet.
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <h2 className="p-1 text-xl ml-4">Autre matériel</h2>
                <div className="border-8 border-lbf-orange rounded-2xl p-4">
                    <ul className="list-disc list-inside">
                        <li className="pl-4">
                            <a href={'/Histoire-à-reconstruire-Gustave-le-pirate.pdf'} target='_blank' rel="noreferrer" className='undeline text-blue-500'>
                                Histoire à recontruire : Gustave le pirate
                            </a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
};

export default MaterielPage;
