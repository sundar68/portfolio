import { Component } from "react";
import jav from "../img/java.pdf";
import web from "../img/Web design.pdf";
import intern from "../img/intern.pdf";
import letter from "../img/letter.pdf"

class Certificate extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic"> Certifications</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
    
            <a href={intern} target="_blank" rel="noreferrer">
            <div class="cr">Summer Internship</div> </a>
            <a href={letter} target="_blank" rel="noreferrer">
            <div class="cr c2">Letter of Recommendation</div> </a>
            <a href="https://www.hackerrank.com/certificates/3676a1bd26b8" target="_blank" rel="noreferrer">
            <div class="cr c3">React</div> </a>
            <a href={web} target="_blank" rel="noreferrer">
            <div class="cr c4">Web design</div> </a>
            <a href={jav} target="_blank" rel="noreferrer">
            <div class="cr c5">Java</div> </a>
            <a href={letter} target="_blank" rel="noreferrer">
            <div class="cr c6">Machine Learning</div> </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/MWK4T3SCHA2L" target="_blank" rel="noreferrer">
            <div class="cr c7">Teamwork</div> </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/MWK4T3SCHA2L" target="_blank" rel="noreferrer">
            <div class="cr c8">Leadership</div> </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/6LHFL96NYET5" target="_blank" rel="noreferrer">
            <div class="cr c9">Time mangement</div> </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/THNLJBDFRK6U" target="_blank" rel="noreferrer">
            <div class="cr c10">Emerging technology</div> </a>
            
      </div>
    );
  }
}

export default Certificate;