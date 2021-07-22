import { Component } from "react";
import SocialFollow from "../components/icon";
import Map from "../img/mape.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic">Contact Me</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="con_out">
          <div class="con_in">
            <a href="https://goo.gl/maps/78yZgiMWUTG2xvRz6" target="_blank" rel="noreferrer">
              <img src={Map} class="co1" alt="Map"></img>
            </a>
          </div>
        </div> 
      
        
        <a href="tel:+91 7032487794">
          <div className="back3"><i class="fa fa-phone"></i>  Call</div>
        </a>
        <a href="mailto:keerthisai_ug@cse.nits.ac.in">
          <div className="back3 back4"> <i class="fa fa-envelope"></i> Mail</div>
        </a> 
        <div className="hr_line line3">
          <div className="hr_inner"></div>
        </div>
        <SocialFollow />
      </div>
    );
  }
}

export default Contact;