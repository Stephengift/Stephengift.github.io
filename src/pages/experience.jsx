import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import Nav from "../components/common/nav";
import Logo from "../components/common/logo";
import Slider from "../components/common/slider";
import ExperienceCardList from "../components/experience/experienceCardList";
import ProjectBoxGrid from "../components/projects/projectBoxGrid";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "experience");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Experience | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="experience-page">
                <Nav active="experience"/>
                <div className="content-wrapper">
                    <div className="experience-ghost-container">
                        <div className="experience-ghost-logo">
                            <Logo width={45}/>
                        </div>
                    </div>
                    <div className="experience-container">
                        <div className="title experience-title">
                            Work Experience and Personal projects
                        </div>

                        <div className="subtitle experience-subtitle">
                        Over the past few years, I have had the privilege of contributing to the development of applications that address real-world challenges across both personal and professional sectors. Notably, I was part of the team that helped shape the new HBO Max applications, bringing their story to audiences worldwide. Additionally, I developed a feature for KAF Airlines that enables KAFAir to provide real-time location updates between airports by utilizing IFS's Maintenix API. My expertise spans full-stack development and automation. Outside of coding, I enjoy experimenting with new recipes I discover online and playing basketball.
                        </div>

                        <div className="sliding-skills">
                            <Slider/>
                        </div>

                        <div className="work-experience-subtitle">
                            Work Experience
                        </div>

                        <div className="work-experience-card-box">
                            <ExperienceCardList/>
                        </div>


                        <div className="projects-subtitle">
                            Personal Projects
                        </div>

                        <div className="projects-box-grid">
                            <ProjectBoxGrid/>
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Experience;
