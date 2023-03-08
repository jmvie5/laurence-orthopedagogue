import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from '../components/seo'

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <div className="font-mulish">
                <div className="flex flex-col md:flex-row gap-4 justify-around items-center mb-8">
                    <div className="bg-lbf-rouge rounded-xl shadow-md shadow-gray-500 p-6 m-2">
                        <h1 className="text-xl bold">Consultation en orthopédagogie - enfant</h1>
                        <ul className="list-disc ml-4 pb-6">
                            <li>Lecture</li>
                            <li>Écriture</li>
                            <li>Mathématiques</li>
                        </ul>
                    </div>

                    <div className="bg-lbf-bleu rounded-xl shadow-md shadow-gray-500 p-6 m-2">
                        <h1 className="text-xl bold">Accompagnement - parents</h1>
                        <ul className="list-disc ml-4 pb-6">
                            <li>L'accompagnement des devoirs</li>
                            <li>Étudier avec vos enfants</li>
                            <li>Travailler la motivation</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-bold">Tous mes services sont offerts à la :</p>
                    <a href="https://www.apetitspasdegeant.com/" title="À petit pas de géant"> <StaticImage src="../images/apetitpasdegeant_full.webp" className='bg-contain bg-right md:h-auto'/></a>
                    
                    <div className="flex flex-col md:flex-row gap-8 p-4 place-items-center">
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
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.454604835245!2d-71.25945048473228!3d46.79535027913922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f2bb948f5f%3A0xa1f31ebdeb77edce!2s675%20Av.%20Marguerite-Bourgeoys%20%23105%2C%20Qu%C3%A9bec%20City%2C%20QC%20G1S%203V8!5e0!3m2!1sfr!2sca!4v1677860295619!5m2!1sfr!2sca" allowfullscreen="" loading="lazy" title="Carte clinique À petits pas de géant" referrerpolicy="no-referrer-when-downgrade" className="h-96 w-96 sm:w-[32rem]"></iframe>
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
