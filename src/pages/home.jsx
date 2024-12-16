import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Nav from "../components/common/nav";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/home.css";

const Home = () => {

    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(200);
    const [oldLogoSize, setOldLogoSize] = useState(200);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const scrolling = () => {
            let scroll = Math.round(window.scrollY);
            let newLogoSize = 200 - (scroll * 4) / 10;

            if (newLogoSize < oldLogoSize) {
                if (newLogoSize > 40) {
                    setLogoSize(newLogoSize);
                    setOldLogoSize(newLogoSize);
                    setStayLogo(false);
                } else {
                    setStayLogo(true);
                }
            } else {
                setLogoSize(newLogoSize);
                setStayLogo(false);
            }
        };

        window.addEventListener("scroll", scrolling);
        return () => window.removeEventListener("scroll", scrolling);
    }, [logoSize, oldLogoSize]);

    const currentSEO = SEO.find((item) => item.page === "home");

    const ghostStyle = {
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{INFO.main.title}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="homepage">
                <Nav active="home"/>
                <div className="content-wrapper">
                    <div className="homepage-ghost-container">
                        <div style={ghostStyle}>
                            <Logo width={logoSize} link={false}/>
                        </div>
                    </div>

                    <div className="homepage-container">
                        <div className="homepage-introduction-container">
                            <div className="homepage-introduction">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="homepage-socials-list">
                            <a
                                href={INFO.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href={INFO.socials.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href={`mailto:${INFO.main.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>

                        <div className="page-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
