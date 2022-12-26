import React,{useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';


const App = () => {

  const [activeNav,setActiveNav] = useState('#')
   
  useEffect(() => {
    
    //Initialize Animate on scroll
    AOS.init({ duration: 800})


    let section = document.querySelectorAll('section')
 

    window.addEventListener('scroll',(e) => {
      if(window.scrollY < 50){
        setActiveNav(`#`);        
      }
      
      section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');
              
        if(top >= offset && top < offset + height){
              setActiveNav(`#${id}`);        
        }    
      })


     
   })
  },[])

  return (
    <>
      {/* Header section  */}
      <Header/>

      {/* Nav section  */}
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>

      {/* About Section */}
      <About/>

      {/* Experience section */}
      <Experience/>

      {/* Services section  */}
      <Services /> 

      {/* Portfolio section  */}
      <Portfolio/>

      {/* References section  */}
      <Review/>

      {/* Contact section  */}
      <Contact/>

       {/* Footer Section  */}
      <Footer/>

    </>
  )
}

export default App