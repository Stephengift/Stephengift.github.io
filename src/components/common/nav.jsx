import React from "react";
import {Link} from "react-router-dom";

import "./styles/nav.css";

const Nav = (props) => {
    const {active} = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li
                                className={
                                    active === "home"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className={
                                    active === "experience"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/experience">Experience</Link>
                            </li>
                            <li
                                className={
                                    active === "connect"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/connect">Connect</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Nav;
