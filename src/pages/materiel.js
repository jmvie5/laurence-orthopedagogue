import * as React from 'react'
import Layout from '../components/Layout'
import { Seo } from '../components/seo'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import de_fr from '../../blogue/de/de_fr.pdf' 
import de_en from '../../blogue/de/de_en.pdf'
import de_temps from '../../blogue/de/de_temps.pdf'
import de_vierge from '../../blogue/de/de_vierge.pdf'

import etiquettes_pdf from '../../blogue/guess-who/Étiquettes pour le Guess Who des mots de vocabulaire.pdf'
import liste_questions from '../../blogue/guess-who/Guess Who - liste de questions.pdf'

const MaterielPage = () => {
  return (
    <Layout pageTitle="Matériel">
      <div className='pb-4'>
        <h2 className="p-1 text-xl ml-4">Dé de conjugaison</h2>
        <div className='border-8 border-lbf-orange rounded-2xl p-4 mb-8'>
          <StaticImage src="../images/de-isole.png" alt="Dé de conjugaison" className="float-right bg-center bg-contain bg-no-repeat lg:mr-8 w-32 h-32"/>
          <p className='pb-2'>Liens pour téléchargement :</p>
          <ul className="list-disc list-inside">
              <li className="pl-4"><a href={de_fr} download className="underline text-blue-500">Dé avec les personnes</a>{` `}</li>
              <li className="pl-4"><a href={de_temps} download className="underline text-blue-500">Dé avec les temps (présent, passé composé, imparfait, plus-que-parfait, conditionnel présent, futur simple)</a>{` `}</li>
              <li className="pl-4"><a href={de_en} download className="underline text-blue-500">Dé avec les personnes -ANGLAIS</a>{` `}</li>
              <li className="pl-4"><a href={de_vierge} download className="underline text-blue-500">Dé vierge</a>{` `}</li>
          </ul>
          <p className='pt-2'>Pour plus de détails, allez voir <Link to="/blogue/de" className='underline text-blue-500'>l'article complet.</Link></p>
        </div>

        <h2 className="p-1 text-xl ml-4">Guess Who des mots de vocabulaire</h2>
        <div className='border-8 border-lbf-orange rounded-2xl p-4'>
          <p className='pb-2'>Liens pour téléchargement :</p>
          <ul className="list-disc list-inside">
            <li className="pl-4"><a href={etiquettes_pdf} download className="underline text-blue-500">Guess Who - Étiquettes vierges </a>{` `}</li>
            <li className="pl-4"><a href={liste_questions} download className="underline text-blue-500">Guess Who - Liste de questions</a>{` `}</li>
          </ul>
          <p className='pt-2'>Pour plus de détails, allez voir <Link to="/blogue/guess-who" className='underline text-blue-500'>l'article complet.</Link></p>
        </div>
      </div>
    </Layout>
  )
}

export default MaterielPage

export const Head = () => (
  <Seo title={"Matériel"}/>
)
