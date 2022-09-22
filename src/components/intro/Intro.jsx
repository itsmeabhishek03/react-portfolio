import "./intro.css";
import Me from "../../img/rp4.png";
import {motion} from "framer-motion"


const Intro = () => {

  return (
    <div className="i">
      <motion.div className="i-left" animate={{scale:1}} transition={{delay:0.7}} initial={{scale:0}}>
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Abhishek Mishra</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Front End Developer</div>
            </div>
          </div>
          <p className="i-desc">
          I'm an Indian based web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
        </div>
        
      </motion.div>
      <motion.div className="i-right" animate={{scale:1}} transition={{delay:0.7}} initial={{scale:0}} >
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </motion.div>
    </div>
  );
};

export default Intro;