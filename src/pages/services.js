import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from '../components/seo'
import { CalendarDaysIcon } from "@heroicons/react/24/solid"

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <div className="font-mulish">
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                    <div className="flex flex-col bg-gradient-to-b md:bg-gradient-to-r from-lbf-rouge to-lbf-orange rounded-xl shadow-md shadow-gray-500 p-2 m-2 gap-2 min-h-max justify-between">
                        <h1 className="text-xl font-bold self-center p-2">Consultation en orthopédagogie</h1>
                        <StaticImage className="rounded-xl" src="../images/enfant_blocks.webp" alt="Enfant qui construit une tour de blocks, source: https://pixabay.com/fr/photos/enfant-la-tour-blocs-de-construction-1864718/" />
                        <p>Consultations avec votre enfant pour consolider ses apprentissages.</p>
                        <ul className="list-disc ml-4 p-2">
                            <li>Lecture</li>
                            <li>Écriture</li>
                            <li>Mathématiques</li>
                        </ul>
                        <div className="flex self-center group">
                            <CalendarDaysIcon className="w-6 h-6"/>
                            <a className="group-hover:underline " href="#contact-orthopédagogie">Prendre rendez-vous</a>
                        </div>
                        
                    </div>

                    <div className="flex flex-col bg-gradient-to-t md:bg-gradient-to-l from-lbf-rouge to-lbf-orange rounded-xl shadow-md shadow-gray-500 p-2 m-2 gap-2 min-h-max justify-between">
                        <h1 className="text-xl font-bold self-center p-2">Accompagnement des parents</h1>
                        <StaticImage className="rounded-xl" src="../images/parent_enfant.webp" alt="Parent qui accompagne son enfant, source: https://pixabay.com/fr/photos/gens-adulte-arri%c3%a8re-magnifique-2942847/" />
                        <p>Téléconsultations avec vous, le parent, pour vous aider à guider votre enfant vers la réussite.</p>
                        <ul className="list-disc ml-4 p-2">
                            <li>Accompagnement des devoirs</li>
                            <li>Étudier avec votre enfant</li>
                            <li>Renforcer la motivation de votre enfant</li>
                        </ul>
                        <div className="flex self-center group">
                            <CalendarDaysIcon className="w-6 h-6"/>
                            <a className="group-hover:underline " href="#contact-accompagnement">Prendre rendez-vous</a>
                        </div>
                    </div>
                </div>
                <div id="contact-orthopédagogie" className="flex flex-col items-center gap-2">
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
                    <div id="contact-accompagnement" className="flex flex-col mt-2 border-t-4 border-lbf-rose items-center">
                        <p className="text-xl font-bold p-4">Mes services d'accompagnement des parents sont offerts en téléconsultation.</p><p className="pb-4 select-text">Contactez-moi pour prendre rendez-vous en remplissant ce formulaire ou en m'envoyant un courriel à <a className="hover:underline" href="mailto:info@laurencebf.ca">info@laurencebf.ca</a></p>
                        <form className="flex flex-col max-w-3xl" name="contact" action="/succes" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field"/>
                            <input type="hidden" name="Objet" value="Demande de renseignement venant de laurencebf.ca" />
                            <input type="hidden" name="form-name" value="contact"/>
                            <div className="flex flex-col md:grid md:grid-rows-2 gap-2">
                                <label className="block row-start-1 row-span-1">
                                    <span className="block">Nom</span>
                                    <input type="text" name="Nom" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" placeholder="Votre nom complet" required/>
                                </label>
                                <label class="block col-start-2 row-span-1">
                                    <span class="block">Courriel</span>
                                    <input type="email" name="Courriel" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" placeholder="Votre adresse courriel" required/>
                                </label>
                                <label className="block col-start-3 row-span-1">
                                    <span className="block">Âge de votre enfant</span>
                                    <input type="number" name="ageEnfant" placeholder="Âge de votre enfant" min={1} max={18} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" required/>
                                </label>
                                
                                <label className="block row-start-2 col-span-1">
                                    <span className="block">Année scolaire en cours</span>
                                    <select name="niveau" className="mt-1 md:mt-7 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" required>
                                        <option disabled selected value=""> -- Sélectionnez -- </option>
                                        <option value="1ère année">1ère année</option>
                                        <option value="2e année">2e année</option>
                                        <option value="3e année">3e année</option>
                                        <option value="4e année">4e année</option>
                                        <option value="5e année">5e année</option>
                                        <option value="6e année">6e année</option>
                                        <option value="Secondaire 1">Secondaire 1</option>
                                        <option value="Secondaire 2">Secondaire 2</option>
                                        <option value="Secondaire 3">Secondaire 3</option>
                                        <option value="Secondaire 4">Secondaire 4</option>
                                        <option value="Secondaire 5">Secondaire 5</option>
                                    </select>
                                </label>
                                <label className="row-start-2 col-span-1">
                                    <span>Milieu scolaire</span>
                                    <select name="milieu" className="mt-1 md:mt-7 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" required>
                                        <option disabled selected value=""> -- Sélectionnez -- </option>
                                        <option value="École publique ou privée">École publique ou privée</option>
                                        <option value="École à la maison">École à la maison</option>
                                        <option value="Classe spécialisé">Classe spécialisée</option>
                                        <option value="Autre">Autre, précisez dans votre message.</option>
                                    </select>
                                </label>
                                <label className="col-start-3 col-span-1">
                                    <span>Votre enfant a-t-il déjà redoublé une année scolaire?</span> <select name="redoublement" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange" required>
                                        <option disabled selected value=""> -- Sélectionnez -- </option>
                                        <option value="Oui">Oui</option>
                                        <option value="Non">Non</option>
                                    </select>
                                </label>
                            </div>
                            
                            <label className="pb-2">
                                <span>Message</span>
                                <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange resize-y" type="text" name="message" placeholder="Décrivez vos besoins" required/>
                            </label>
                            <button type="submit" className="bg-lbf-orange hover:bg-lbf-rouge active:bg-lbf-rouge focus:outline-none focus:ring focus:ring-lbf-rouge/30 rounded-md p-2 col-start-2 col-span-1 w-32 self-center">Envoyer</button>
                        </form>
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
