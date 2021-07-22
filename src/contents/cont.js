import { Component } from "react";
import Navitem from "../components/Navitem";


class Cont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };


  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic"> Info</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>B.Tech(Hons), CSE</h4>
            <p className="p1">National Institute of Technology, Silchar(3rd year)</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>{"  "}Batch of 2019 - 2023</p>
            <h4>Senior Secondary(XII)</h4>
            <p className="p1">Sasi Educational Institutes, Velivennu (9.94 CGPA)</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>{"  "}Batch- 2017-2019</p>
            <h4>Secondary(X)</h4>
            <p className="p1">Ravindra Bharathi School, Tuni (10 CGPA)</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>{"  "}Year of completion:2017</p>
             
            <div className="back6"> 
            <Navitem
                   item="Certifications"
                  tolink="/certificate"
                  activec={this.activeitem} >
               </Navitem> 
            
            
            </div>
            <h3 class="sk_head">Skills</h3>
            <div class="sk">C, C++</div>
            <div class="sk s2">Python</div>
            <div class="sk s3">Java</div>
            <div class="sk s4">React js</div>
            <div class="sk s5">ML</div>
            <div class="sk s6">HTML,CSS</div>
            <div class="sk s7">DS & Algo</div>
            <div class="sk s8">OOP</div>

            
            
      </div>
    );
  }
}

export default Cont;