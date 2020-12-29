import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ol className="breadcrumb" style={{ display: "inline-block", width: "100%" }}>
                    <a href="/"><b className="name">Nuchana Kittitrakul</b></a>
                    <div className="float-right">
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        &nbsp;/&nbsp;
                        <NavLink exact to="/cv" activeClassName="active">Resume</NavLink>
                        &nbsp;/&nbsp;
                        <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
                        &nbsp;/&nbsp;
                        <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                        &nbsp;/&nbsp;

                    </div>

                </ol>
            </div>

        )
    }

}

export default Navbar; 