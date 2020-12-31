import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div style= {{textAlign:"center", width: "100%", height:"50px", background:"lightblue"}}>
                <hr />
                <span style={{ color: "gray" }}>© Copyright 2020</span>

            </div >
        );
    }
}

export default Footer;