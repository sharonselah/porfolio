import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'


export default function Main() {

  return (
    <div>
      <div className="Image">
        <img src="/bg3.jpg" alt="" />
        <div className="overlay"></div>
        <div className="Main-Content">
          <h1>Hey, I'm Sharon Selah</h1>
          <p>A Full Stack Web Developer building both 
            the Frontend and Backend of Websites and Web
            Applications <br />using React and Node JS. 
          </p>
          <button>PROJECTS</button>
        </div>

        <div className="Social-Media">
          <a href="https://github.com/sharonselah"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/sharon-selah-9b4a451b9/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.twitter.com/SelahSharon"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
          <a href="https://medium.com/@sellaah.sharon2001"><FontAwesomeIcon icon={faMedium} /></a>
      
          
      

        </div>
      </div>
    </div>
  )
}
