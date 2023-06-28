import React, { useEffect, useContext } from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout.js"
import Profile from "../../components/Profile.js"
import Login from "../../components/Login.js"
import Default from "../../components/Default.js"
import PrivateRoute from "../../components/PrivateRoute.js"
import { initAuth } from "../../services/auth.js"
import { IdentityContext } from "../../services/identity-context";

const App = () => {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext);

    return (
        <Layout>
            <Router basepath="/mon-compte">
                <PrivateRoute path="/profile" component={Profile} />
                <Login path="/login" />
                <Default path="/" />
            </Router>
            <span>Utilisateur : </span>
        </Layout>
    )
}

export default App