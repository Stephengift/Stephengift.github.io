import React, {useEffect} from "react";

import Nav from "../components/common/nav";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
    useEffect(() => {
        document.title = `404 | ${INFO.main.title}`;
    }, []);

    return (
        <React.Fragment>
            <div className="not-found page-content">
                <Nav/>
                <div className="content-wrapper">
                    <div className="notfound-logo-container">
                        <div className="notfound-logo">
                            <Logo width={45}/>
                        </div>
                    </div>
                    <div className="notfound-container">
                        <div className="notfound-message-box">
                            <div className="notfound-title">
                                Oh my days!
                            </div>
                            <div className="notfound-message">
                                The page you're looking for cannot be found.
                            </div>
                            <a href="/" className="notfound-link">
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Notfound;
