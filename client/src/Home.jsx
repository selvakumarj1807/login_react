// Home.js

import React from "react";
import { useParams } from "react-router-dom";

function Home() {
    const { email } = useParams();

    return (
        <div>
            <h1>Welcome, {email}</h1>
            {/* Rest of the Home component */}
        </div>
    );
}

export default Home;
