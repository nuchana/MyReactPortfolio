import React, { Component } from 'react';
import './pages.cv.css';

class Resume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Curriculum Vitae</strong></h1>
        <div id="cvDownload"> 
        <a class="nav-link" href="public/NKresume.pdf" download src="/public/NKresume.pdf">Download Resume</a>
        </div>
        <a href="public/NKresume.pdf"><img id="cvImg" alt= "CV" src={process.env.PUBLIC_URL + '/NKresume.pdf'}/></a>
      </div>
      
    );

  }
}
export default Resume;