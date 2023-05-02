import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const SuccessPage = () => {
    return (
        <Layout pageTitle="Merci!">
            <div className="space-y-4">
                <p>Votre message a été envoyé avec succès. Je vais vous répondre dans les plus bref délais.</p>
                <p>Vous pouvez retouner à la page <Link to="/services" className="underline text-blue-700">services</Link>.</p>
            </div>
        </Layout>
    )
}

export default SuccessPage