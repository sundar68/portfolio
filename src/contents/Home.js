import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import SocialFollow from "../components/icon";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
        KEERTHI SATYA SAI SUNDAR
        </h1>
        <ReactTypingEffect className="typingeffect" text={['A Front-end Developer',' Web Designer','Competetive Programmer']} speed={100} eraseDelay={500}/>
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <SocialFollow />
      </div>
      
    );
  }
}

export default Home;