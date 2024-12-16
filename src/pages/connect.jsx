import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import Nav from "../components/common/nav";
import Logo from "../components/common/logo";
import Socials from "../components/socials/socials";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/connect.css";

const Connect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "connect");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Connect | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="connect-page">
                <Nav active="connect"/>
                <div className="content-wrapper">
                    <div className="connect-ghost-container">
                        <div className="connect-ghost-logo">
                            <Logo width={46}/>
                        </div>
                    </div>

                    <div className="connect-container">
                        <div className="title connect-title">
                            Connect with me!
                        </div>

                        <div className="subtitle connect-subtitle">
                            
I am always eager to grow my professional network and collaborate with like-minded individuals. Feel free to connect with me on LinkedIn or explore my projects on GitHub. You can also reach me directly via email at
                            {" "}
                            <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noopener noreferrer">
                                {INFO.main.email}
                            </a>
                            {""}.
                            
                        </div>
                    </div>

                    <div className="socials-container">
                        <div className="connect-socials">
                            <Socials/>
                        </div>
                    </div>

                    <div className="spacer">

                    </div>

                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Connect;
