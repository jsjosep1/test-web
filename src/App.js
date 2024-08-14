import Navbar from './navbar';
import AboutUs from './Pages/AboutUs';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Footer from './footer.jsx'

import Home from './Pages/Home';
import Strategic from './Pages/services/smc.jsx';
import ProjectManagement from './Pages/services/pma.jsx';
import BusinessDev from './Pages/services/bda.jsx';
import BusinessTraining from './Pages/services/bft.jsx';
import ESS from './Pages/services/ess.jsx';
import ESG from './Pages/services/esg.jsx';


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
          <Route path = '/services/strategicmanagementconsultancy' element={<Strategic/>}/>
          <Route path = '/services/projectmanagement' element={<ProjectManagement/>}/>
          <Route path = '/services/businessadvisory' element={<BusinessDev/>}/>
          <Route path = '/services/businesstraining' element={<BusinessTraining/>}/>
          <Route path = '/services/ess' element={<ESS/>}/>
          <Route path = '/services/esg' element={<ESG/>}/>

        </Routes>
      </div>
      <Footer/>


  

    </>
  )
   
  
  


 
}

export default App;
