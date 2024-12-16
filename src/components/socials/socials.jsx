import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faFile, faMailBulk} from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
    return (
        <div className="socials">

            <div className="social">
                <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Connect via LinkedIn</div>
                </a>
            </div>

            <div className="social">
                <a href={INFO.socials.email} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faMailBulk}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Send Email</div>
                </a>
            </div>

            <div className="social">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">View GitHub</div>
                </a>
            </div>

            <div className="social">
                <a href={INFO.socials.resume} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faFile}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">View Resume</div>
                </a>
            </div>

        </div>
    );
};

export default Socials;
