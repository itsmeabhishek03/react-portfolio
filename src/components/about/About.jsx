import "./about.css";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="a">
      <div className="a-left" animate={{scale:1}} transition={{delay:0.7}} initial={{scale:0}} >
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/premium-vector/man-working-laptop-work-home-concept-design-freelance-man-working-laptop-smiling-man-is-sitting-with-laptop-around-internet-email-message-icons-freelancer-programmer-with-laptop_419010-12.jpg?w=2000"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <motion.div className="a-right" animate={{scale:1}} transition={{delay:0.7}} initial={{scale:0}}>
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Seeking a beginner role to enhance and explore my technical Knowledge that I gained in my B.tech
          course in the last two years.
        </p>
        <p className="a-desc">
          I am a hard-working, self motivated and desciplined person. I am eager to learn
          new things. I continously improve myself. I have the strength in maintainig the highest quality
          & Standards of the work and productivity. 
        </p>
        <div className="a-award">
        <button>
          <a href="https://drive.google.com/file/d/1ewYMkHgFjWfZhb0h6Pl5UtzfqtysYgXn/view?usp=sharing"
           download 
           target="_blank" className="btn"  rel="noreferrer">DOWNLOAD CV</a>
        </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;