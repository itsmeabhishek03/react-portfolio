import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {


  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rvxd3g4",
        "template_bevziko",
        formRef.current,
        "r3qvc-DCQ5lsIm3lm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">GET IN TOUCH</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/phone.png' alt="" className="c-icon" />
              +91 8452849615
            </div>
            <div className="c-info-item">
              <img className="c-icon" href="https://mail.google.com/mail/u/0/#inbox" src='https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/email.png' alt="" />
              abhimishraop08@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src='https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/address.png' alt="" />
              Thane, Mumbai - Maharashtra 400608 
            </div>
            <div className="f-social-icons">
            <a href="https://www.linkedin.com/in/abhishek-mishra-97488b208/" target="_blank">
              <i className="link fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/itsmeabhishek03" target="_blank">
             <i className="git fa-brands fa-github"></i>
            </a>
          
        </div>
          </div>
        </div>
       
        <div className="c-right">
       
          <p className="c-desc">
            <b>What’s your story?</b> Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done &&  
            <h2>Thank you</h2>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact