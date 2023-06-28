import React from "react";
import { Link } from "@reach/router"

const Default = () => {

    return(
        <>
            <div>
                <div>Bonjour! Page default de app.</div>
            </div>
            <Link to="profile">Ton profil</Link>
        </>
        
        
        
    )
}

export default Default