import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline"

const SuccessPage = () => {
    return (
        <Layout pageTitle="Merci!">
            <div className="space-y-4">
                <p>Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.</p>
                <Link to="/services" className="flex flex-row w-24 h-10 p-2 mt-4 items-center border border-black rounded-lg shadow-2xl">
                    <ArrowSmallLeftIcon/>
                    <p>Retour</p>
                </Link>
            </div>
        </Layout>
    )
}

export default SuccessPage