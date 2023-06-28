import React from "react";

import { getUser } from "../services/auth";

const Profile = () => {

    return(
        <>
            <div>Bonjour {getUser().name}! Tu es connecté.</div>
            <div>Test!</div>
        </>
        
    )
}

export default Profile