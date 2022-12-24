import React,{useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  const [activeNav,setActiveNav] = useState('#')
   
  useEffect(() => {
    let section = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('nav a');
    section = ['',...section]
    navLinks = ['',...navLinks]
    window.addEventListener('scroll',(e) => {
      
      section.forEach(sec => {
         if(sec){
              let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id =  sec.getAttribute('id');
            
            
            if(top >= offset && top < offset + height){
              navLinks.forEach(link => {
                    setActiveNav(`#${id}`);        
              })
            }
         } else{
          setActiveNav(`#`);        
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
      <References/>

      {/* Contact section  */}
      <Contact/>

       {/* Footer Section  */}
      <Footer/>

    </>
  )
}

export default App