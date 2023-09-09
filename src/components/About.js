import './About.css';

export default function About() {
  return (
    <div className = "About">
      <div className="About-Intro">
        <h1>ABOUT ME </h1>
        <div className="Underline"></div>
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms <br /> of programming and technology</p>
      </div>

      <div className="About-Content">
        <div className="About-Desc">
          <h2 style={{fontWeight: 'bold', fontSize: '30px', marginBottom: '20px'}}>Get to know me!</h2>
          <p>I'm a <span>Fullstack Web Developer</span>  building the Front-end and Back-end of Websites and Web Applications 
            that leads to the success of the overall product. 
            Check out some of my work in the <span>Projects </span>section.</p>

          <p>I code using <span>React and Node JS</span> to create beautifully designed UIs and achieve functionality.
           Feel free to Check out my <span>Github Page</span> where I have several repositories showcasing projects</p>

          <p>I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. 
            If you have a good opportunity that matches my skills
             and experience then don't hesitate to <span>contact</span> me.</p>
        </div>
        <div className="About-Skills">
        <h2 style={{fontWeight: 'bold', fontSize: '30px', marginBottom: '20px'}}>Skills</h2>
          <div className="Grid">
            <div className="Grid-One">
              <div>React</div>
              <div>Node JS</div>
              <div>Express</div>
              <div>SQL</div>
              <div>API</div>
            </div>
            <div className="Grid-Two">
              <div>Mongo DB</div>
              <div>HTML</div>
              <div>Bootstrap</div>
              <div>CSS</div>
            </div>

            <div className="Grid-Three">   
              <div>Git</div>
              <div>Github</div>
              <div>JEST</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
