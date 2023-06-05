import React from "react";
import Layout from "./Layout";

import { getUser } from "../services/auth";

const Profile = () => {

    return(
        <Layout>
            <div>Bonjour {getUser().name}! Tu es connecté.</div>
        </Layout>
        
    )
}

export default Profile