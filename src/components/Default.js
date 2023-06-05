import React from "react";
import { Link } from "gatsby";
import { Router } from "@reach/router"
import Profile from "./Profile.js"
import Login from "./Login.js"
import PrivateRoute from "./PrivateRoute.js"

const Default = () => {

    return(
        <>
            <div>
                <div>Bonjour! Page default de app.</div>
            </div>
        </>
        
        
        
    )
}

export default Default