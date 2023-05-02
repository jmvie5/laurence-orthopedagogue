import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from '../components/seo'

/*CONTACT FORM
<form className="flex flex-col gap-2 max-w-xl" action="https://formspree.io/f/mlekzjek" method="POST">
    <input type="text" name="name" placeholder="Nom complet"/>
    <input type="email" name="email" placeholder="Votre adresse courriel"/>
    <textarea className="sm:w-96 w-80" type="text" name="message" placeholder="Décrivez vos besoins"/>
    <input type="hidden" name="_gotcha" className="display:none"/>
    <button type="submit" className="border-2 border-lbf-orange rounded-xl hover:bg-lbf-orange">Envoyer</button>
</form>
*/

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <div className="font-mulish">
                <div className="flex flex-col md:flex-row gap-4 justify-around items-center mb-12">
                    <div className="flex flex-col bg-gradient-to-b md:bg-gradient-to-r from-lbf-rouge to-lbf-orange rounded-xl shadow-md shadow-gray-500 p-2 m-2 gap-2">
                        <h1 className="text-xl font-bold self-center p-2">Consultation en orthopédagogie</h1>
                        <StaticImage className="rounded-xl" src="../images/enfant_blocks.jpg" alt="Enfant qui construit une tour de blocks, source: https://pixabay.com/fr/photos/enfant-la-tour-blocs-de-construction-1864718/" />
                        <p>Consultations avec votre enfant pour consolider ses apprentissages.</p>
                        <ul className="list-disc ml-4 p-2">
                            <li>Lecture</li>
                            <li>Écriture</li>
                            <li>Mathématiques</li>
                        </ul>
                    </div>

                    <div className="flex flex-col bg-gradient-to-t md:bg-gradient-to-l from-lbf-rouge to-lbf-orange rounded-xl shadow-md shadow-gray-500 p-2 m-2 gap-2">
                        <h1 className="text-xl font-bold self-center p-2">Accompagnement des parents</h1>
                        <StaticImage className="rounded-xl" src="../images/parent_enfant.jpg" alt="Parent qui accompagne son enfant, source: https://pixabay.com/fr/photos/gens-adulte-arri%c3%a8re-magnifique-2942847/" />
                        <p>Téléconsultations avec vous, le parent, pour vous aider à guider votre enfant vers la réussite.</p>
                        <ul className="list-disc ml-4 p-2">
                            <li>Accompagnement des devoirs</li>
                            <li>Étudier avec votre enfant</li>
                            <li>Renforcer la motivation de votre enfant</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl font-bold">Mes services d'orthopédagogie sont offerts ici :</p>
                    <a href="https://www.apetitspasdegeant.com/" title="À petit pas de géant"> <StaticImage src="../images/apetitpasdegeant_full.webp" alt="Logo de la clinique À petit pas de géant" className='bg-contain bg-right md:h-auto'/></a>
                    
                    <div className="flex flex-col lg:flex-row gap-8 p-4 place-items-center">
                        <div className="bg-gradient-to-br from-lbf-rouge to-lbf-orange shadow-md shadow-gray-500 rounded-xl p-1 md:mb-24 max-w-sm">
                            <div className="bg-lbf-blanc rounded-xl h-full p-4">
                                <p className="pb-2">
                                Pour prendre rendez-vous, communiquez avec la clinique au :</p>
                                <ul className="py-2">
                                    <li><a href="mailto:info@apetitspasdegeant.com" className="underline text-blue-500">info@apetitspasdegeant.com</a></li>
                                    <li>Tel: 581-981-3004</li>
                                    <li className="pt-2">675, Av. Marguerite-Bourgeoys, Bureau 105</li>
                                    <li>Ville de Québec</li>
                                    <li>Québec, Canada</li>
                                    <li>G1S 3V8</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.454604835245!2d-71.25945048473228!3d46.79535027913922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f2bb948f5f%3A0xa1f31ebdeb77edce!2s675%20Av.%20Marguerite-Bourgeoys%20%23105%2C%20Qu%C3%A9bec%20City%2C%20QC%20G1S%203V8!5e0!3m2!1sfr!2sca!4v1677860295619!5m2!1sfr!2sca" allowFullScreen="" loading="lazy" title="Carte clinique À petits pas de géant" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-80 sm:w-[32rem] sm:h-[28rem]"></iframe>
                    </div>
                    <div className="flex flex-col mt-2 border-t-4 border-lbf-rose items-center">
                        <p className="text-xl font-bold p-4">Mes services d'accompagnement des parents sont offert en téléconsultation. Contactez moi pour prendre rendez-vous:</p>
                        <a className="font-bold text-xl" href="mailto:info@laurencebf.ca">info@laurencebf.ca</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ServicesPage

export const Head = () => (
    <Seo title="Services" description="Consultation en orthopédagogie et accompagnement des parents"/>
  )
