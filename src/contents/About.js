import { Component } from 'react';
import pdf from '../img/SUNDAR.pdf';


class About extends Component {
    

    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead"> <mark className="mark2">KEERTHI SATYA SAI SUNDAR</mark></h2>
            <p>Front-end Developer</p>
            <br></br>
            <p className="p10">I am currently enrolled as a senior in the <b>National Institute of Technology Silchar </b>pursuing an undergraduate degree. I am majoring in Computer science and engineering. I am interested in the Web Development field and am seeking exciting opportunities related to the same. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detail orientated person and I keep my goals and tasks organized to maintain productivity. I believe that the skills that I have attained from the dynamic environment and competitive university life define me and I am looking forward to implementing and polishing them in any opportunity that I receive.
            </p>
            <a href={pdf} target="_blank" rel="noreferrer">
              <div className="back5"><i class="fa fa-download"></i> Resume</div>
             </a>
             
            </div>
            )
        }
    }
    
export default About