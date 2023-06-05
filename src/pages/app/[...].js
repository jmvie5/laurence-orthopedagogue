import React, { useEffect } from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout.js"
import Profile from "../../components/Profile.js"
import Login from "../../components/Login.js"
import Default from "../../components/Default.js"
import PrivateRoute from "../../components/PrivateRoute.js"
import { initAuth } from "../../services/auth.js"

const App = () => {
    useEffect(() => {
        initAuth();
    });
    return (
        <Layout>
            <Router basepath="/app">
                <PrivateRoute path="/profile" component={Profile} />
                <Login path="/login" />
                <Default path="/" />
            </Router>
        </Layout>
    )
}

export default App