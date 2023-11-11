import './Projects.css'

export default function Projects() {
  return (
    <div className = "projects">
    
      <div className="project">
        <h2>School Counseling Management System</h2>
        <img src="/counseling.png" alt="Project 1 Screenshot" />
        <p>
          The website is a school counseling management system for CUEA that 
          will act as link between students and counselors; to provide an online platform
           where CUEA students can schedule and book their counseling sessions in advance.
        </p>
        <a href="https://github.com/sharonselah/school-counseling-management-system" target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>


      <div className="project">
        <h2>Online Cake Ordering System</h2>
        <img src="/advice.png" alt="Project 2 Screenshot" />
        <p>
        The website allows customers to browse and order cakes online, customize their orders, and complete payments securely. 
        It also provides vendors with a streamlined process for managing orders and payments
        </p>
        <a href="https://github.com/sharonselah/online-cake-ordering-system" target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>


      <div className="project">
        <h2>Advice Generator</h2>
        <img src="/advice2.png" alt="Project 3 Screenshot" />
        <p>
         
        A Random Advice Generator App leverages an API to dynamically fetch advice for its uers. 
        Users can click the button to get a new advice. 
        </p>
        <a href="https://main--unique-strudel-fa5318.netlify.app/" target="_blank" rel="noopener noreferrer">
          Netlify Link 
        </a>
      </div>
    </div>
    
  )
}
