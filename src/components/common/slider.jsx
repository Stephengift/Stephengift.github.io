import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faJs,
    faPython,
    faJava,
    faHtml5,
    faCss3,
    faReact,
    faDocker,
    faGit,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
    SiExpress, SiJest, SiMongodb,
    SiMysql, SiNodedotjs, SiPostgresql,
} from "@icons-pack/react-simple-icons";
import "./styles/slider.css";

const Slider = () => {

    return (
        <div className="skills-container">
            <div className="skills-title">
                Technical Skills
            </div>

            <ul className="skills-list">
                <li>
                    <FontAwesomeIcon icon={faJs}/> JavaScript
                </li>
                <li>
                    <FontAwesomeIcon icon={faPython}/> Python
                </li>
                <li>
                    <FontAwesomeIcon icon={faJava}/> Java
                </li>
                <li>
                    <SiMysql size={13.5}/> SQL
                </li>
                <li>
                    <FontAwesomeIcon icon={faHtml5}/> HTML
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3}/> CSS
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact}/> React
                </li>
                <li>
                    <SiNodedotjs size={13.5}/> Node
                </li>
                <li>
                    <SiExpress size={13.5}/> Express
                </li>
                <li>
                    <SiMongodb size={13.5}/> MongoDB
                </li>
                <li>
                    <SiPostgresql size={13.5}/> PostgreSQL
                </li>
                <li>
                    <FontAwesomeIcon icon={faDocker}/> Docker
                </li>
                <li>
                    <SiJest size={13.5}/> Jest
                </li>
                <li>
                    <FontAwesomeIcon icon={faGit}/> Git
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub}/> GitHub
                </li>

            </ul>
        </div>
    );
};

export default Slider;
