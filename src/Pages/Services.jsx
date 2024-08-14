import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './services.css'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faDatabase, faEarListen, faEarthAmericas, faPeopleRoof, faSeedling } from '@fortawesome/free-solid-svg-icons'




export default function Services() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

    var settings = {
      
      centerMode: true,
      infinite: true,
      centerPadding: "300px",  
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     
    };
  
  
    return (
      <>
        <div className="container-title-services" data-aos="fade-up">
          <div className="title-services" data-aos="fade-right">Services</div>
        </div>

        <div className='slider-container'>

          <h1>Our Services</h1>
          <Slider className='slider' {...settings}>
            <div className='card'>
              <FontAwesomeIcon icon={faDatabase} size='4x' className='icon'/>
              <h4>Strategic Management Consultancy <a href='/services/strategicmanagementconsultancy'>(learn more)</a></h4>
              <ul>
                <li>Entering new markets or business</li>
                <li>Corporate/business unit strategy</li>
                <li>Business Restructuring, Strategic Operating Model</li>
                <li>Organizational and Financial planning</li>
                <li>Feasibility Studies</li>
              </ul>
            </div>
            <div className='card'>
            
              <FontAwesomeIcon icon={faEarListen} size='4x'className='icon'/>
              <h4>Business Development Advisory <a href='/services/businessadvisory'>(learn more)</a></h4>
              <ul>
                <li>New business venture planning, startups, investments opportunities</li>
                <li>Market Feasibiity/ Markend & Trend Research</li>
                <li>Market Development for international organization and services</li>
              </ul>
            </div>
            <div className='card'>
              <FontAwesomeIcon icon={faPeopleRoof} size='4x' className='icon'/>
              <h4>Project Management and Operational Excellence <a href='/services/projectmanagement'>(learn more)</a></h4>
              <ul>
                <li>Project Management Processes and Planning</li>
                <li>Process Safety Operational Maintenance, Asset Integrity and Reliability </li>
                <li>Performance Monitoring & Improvement</li>
                <li>Energy Management and Efficiency</li>
              </ul>
              
            </div>
            <div className='card'>
              <FontAwesomeIcon icon={faSeedling} size='4x' className='icon'/>
              <h4>ESG and Sustainability Solutions <a href='/services/esg'>(learn more)</a></h4>
              <ul>
                <li>Defining Sustainability Strategy and Roadmap</li>
                <li>ESG Metrics, Benchmarking and Reporting</li>
                <li>Corporate Compliance and Risk Assessment</li>
              </ul>
            </div>
            <div className='card'>
              <FontAwesomeIcon icon={faEarthAmericas} size='4x'className='icon'/>
              <h4>Environmental Sustainability Solutions <a href='/services/ess'>(learn more)</a></h4>
              <ul>
                <li>Entering new markets or business</li>
                <li>Corporate/business unit strategy</li>
                <li>Business Restructuring, Strategic Operating Model</li>
                <li>Organizational and Financial planning</li>
                <li>Feasibility Studies</li> 
              </ul>
            </div>
            <div className='card'>
              <FontAwesomeIcon icon={faChartSimple} size='4x' className='icon'/>
              <h4>Business & Professional Training <a href='/services/businesstraining'>(learn more)</a></h4>
              <ul>
                <li>Environmental Impact Assessment and Monitoring</li>
                <li>Environmental Permit Packages</li>
                <li>Environmental Management System</li>
                <li>EMS Audit & Compliance</li>
                <li>Waste Management</li> 
              </ul>
            </div>

          </Slider>
          
        </div>

  
      </>
    );
  }