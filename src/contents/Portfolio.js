import React, { Component } from 'react';
import project2 from '../img/hacker.gif';
import project1 from '../img/git.gif';
import project3 from '../img/force.jpg';
import project4 from '../img/enviro.jpg';
import './Branch.css';

class Branches extends Component {
  render() {
  return (
    <div className="condiv contact">
		
            <h1 className="subtopic">My work</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
   
     <section class="three-d-container">
		   	<input type="radio"  className="three-d-bullet a" name="three-d"></input>
		  	<input type="radio" className="three-d-bullet b" name="three-d"></input>

		   	<input type="radio" className="three-d-bullet c" name="three-d"></input>

			 <input type="radio" className="three-d-bullet d" name="three-d"></input>
      

			<div className="three-d-cube">
				<figure className="three-d-item">
        <a href="https://github.com/sundar68?tab=repositories" target="_blank" rel="noreferrer">
					<img style={{backgroundColor:"black"}} src={project1} alt=""></img>
          <div className="branchP"><p>Github </p></div>
         </a> 
				</figure>
				<figure className="three-d-item">
        <a href="https://www.hackerrank.com/sundarkeerthi111" target="_blank" rel="noreferrer">
					<img src={project2}  alt=""></img>
          <div className="branchP"><p>HackerRank </p></div>
         </a> 
				</figure>
				<figure className="three-d-item">
        <a href="https://codeforces.com/profile/sundar248" target="_blank" rel="noreferrer">
					<img src={project3} alt=""></img>
          <div className="branchP"><p>Code Forces </p></div>
				</a>
				</figure>
							
				<figure className="three-d-item">
                     <a href="https://github.com/enviro-promise/enviropromise" target="_blank" rel="noreferrer">
					     <img src={project4} alt=""></img>
                            <div className="branchP"><p>Enviropromise </p></div>
                    </a> 
				</figure>
				
		  	</div>
		</section>
   </div>
  );
 }
}
export default Branches;