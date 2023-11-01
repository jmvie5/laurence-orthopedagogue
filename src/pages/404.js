import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return (
        <Layout pageTitle="Erreur 404" description="Page introuvable.">
            <div className="space-y-4">
                <p>Page introuvable.</p>
                <p>
                    Retournez à la page d'
                    <Link to="/" className="underline text-blue-700">
                        accueil
                    </Link>
                    .
                </p>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
