import React, { Component } from 'react';
import "./cv.css"


class Resume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Curriculum Vitae</strong></h1>
        <div id="cvDownload"> 
        <a class="nav-link" href="public/resume.png" download src="/public/resume.png">Download Resume</a>
        
        </div>
        <a href="public/resume.png"><img id="cvImg" alt= "CV" src={process.env.PUBLIC_URL + '/resume.png'}></img></a>
      </div>
      
    );

  }
}
export default Resume;