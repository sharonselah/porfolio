import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <main>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="about" element ={<About/>}></Route>
          <Route path="projects" element ={<Projects/>}></Route>
          <Route path="contact" element ={<Footer/>}></Route>
        </Routes>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
