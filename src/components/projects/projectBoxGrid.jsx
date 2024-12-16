import React from "react";
import ProjectBox from "./projectBox";
import INFO from "../../data/user";
import "./styles/projectBoxGrid.css";

const ProjectBoxGrid = () => {
    return (
        <div className="all-projects-container">
            {INFO.projects.map((project, index) => (
                <div className="project-box" key={index}>
                    <ProjectBox
                        screenshot={project.screenshot}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxGrid;
