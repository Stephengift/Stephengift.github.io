import React from "react";
import ExperienceCard from "./experienceCard";
import INFO from "../../data/user";
import "./styles/experienceCardList.css";

const ExperienceCardList = () => {
    return (
        <div className="experience-cardbox-container">
            {INFO.resume.map((exp, index) => (
                <div className="experienceCard" key={index}>
                    <ExperienceCard
                        logo={exp.logo}
                        title={exp.title}
                        role={exp.role}
                        duration={exp.duration}
                        description={exp.description}
                        skills={exp.skills}
                    />
                </div>
            ))}
        </div>
    );
};

export default ExperienceCardList;
