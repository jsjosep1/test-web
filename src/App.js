import Navbar from './navbar';
import AboutUs from './Pages/AboutUs';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Footer from './footer.jsx'

import Home from './Pages/Home';


function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/aboutus' element= {<AboutUs/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/services' element = {<Services/>} />

        </Routes>
      </div>
      <Footer/>


  

    </>
  )
   
  
  


 
}

export default App;
