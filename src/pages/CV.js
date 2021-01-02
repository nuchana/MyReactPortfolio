import React, { Component } from 'react';
import "./cv.css"



class Resume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Curriculum Vitae</strong></h1>
        <div id="cvDownload"> 
        <a class="nav-link" href={process.env.PUBLIC_URL + '/NKresume.pdf'} download>Download Resume</a>
        </div>
        <a href="public/resume.png"><img id="cvImg" alt= "CV" src={process.env.PUBLIC_URL + '/resume.png'}></img></a>
      </div>
      
    );

  }
}
export default Resume;