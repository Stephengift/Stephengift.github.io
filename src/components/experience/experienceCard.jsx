import React from "react";

import "./styles/experienceCard.css";

const ExperienceCard = (props) => {
    const {title, duration, role, description, skills} = props;

    const descriptionLines = description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br/>
        </React.Fragment>
    ));

    return (
        <div className="experience-card">
            <div className="experience-content">
                <h3 className="experience-company">{title}</h3>
                <p className="experience-duration">{duration}</p>
                <p className="experience-role">{role}</p>
                <div className="experience-description">{descriptionLines}</div>
                <div className="experience-skills">{skills}</div>
                

            </div>
        </div>
    );
};

export default ExperienceCard;
