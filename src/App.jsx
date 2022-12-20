
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
  return (
    <>
      {/* Header section  */}
      <Header/>

      {/* Nav section  */}
      <Nav/>

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