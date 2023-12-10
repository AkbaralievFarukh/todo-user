import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={"container"}>
            <div className={"home-page"}>
                <Link to={"/todo"}>GO TO TODO</Link>
                <Link to={"/user"}>GO TO USER</Link>
            </div>
        </div>
    );
};

export default HomePage;