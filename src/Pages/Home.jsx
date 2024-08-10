import { useEffect } from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logo from '../mwc-logo-trans_copy-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faDatabase, faEarListen, faEarthAmericas, faPeopleRoof, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Home (){

    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title">
            <div className = "title" data-aos = "fade-up"> Unlocking Business and Human Potential </div>
        </div>

        <div className='aboutus'>
            <ul>
            <li><h1 data-aos="fade-down">About us</h1>
            <p data-aos="fade-down">
                     MWC LLC is a technical and management consulting, research and advisory firm registered on Qatar Financial Center (QFC) platform. MWC offers a range of technical and management consulting and advisory services in various industry sectors, all designed to help your organization and people reach their potential. We partner with our clients to transform their business by providing the research, insights and strategic consulting support they need to enhance their business strategies, operational sustainability and results.
                </p></li>
            <li><img src={logo} alt="Logo" data-aos = 'fade-left'></img></li>
            </ul>
        </div>

        <div className='ourservices'>
            <h1>Our Services</h1>
            <ul>
                <Link to="/services"><li data-aos="fade-right">
                    <FontAwesomeIcon icon={faDatabase} size='4x' className='icon'/>
                    <h4>Strategic Management Consultancy</h4>
                    <p>To drive long-term success, you need a clear and actionable business strategy. We offer comprehensive Strategic Management services for your organization focusing on your people and your business: where it is today and where you want it to be tomorrow in achieving outstanding results for your business.</p>
                </li></Link>
                <Link to="/services"><li data-aos="fade-left"> 
                    <FontAwesomeIcon icon={faEarListen} size='4x'className='icon'/>
                    <h4>Business Development Advisory</h4>
                    <p>We look at business development as an integrated, cohesive effort that enhances business value, we help our clients to increase revenues, explore and set up new business line and opportunities for investments and attained sustainability by making necessary changes in business models, strategy and operations.</p>
                </li></Link>
            </ul>
            <ul>
                <Link to="/services"><li data-aos="fade-right">
                    <FontAwesomeIcon icon={faPeopleRoof} size='4x' className='icon'/>
                    <h4>Project Management and Operational Excellence</h4>
                    <p>We understand the business, technology and cultural needs of project and the organizations. We combine the know-how of experts from operations with professional holistic methodologies and partner with our client in the transformation journey and offer them customized solutions that drive performance and operational efficiency to ensure sustainable business.</p>
                </li></Link>
                <Link to="/services"><li data-aos="fade-left">
                    <FontAwesomeIcon icon={faEarthAmericas} size='4x'className='icon'/>
                    <h4>Environmental Sustainability Solutions</h4>
                    <p>As Qatar places climate change at the forefront of its priorities, through our Environmental Consultancy Services, we offer comprehensive range of environment related services, supporting and guiding our clients through environmental impact assessment processes to achieve sustainable environmental goals in their business operations.</p>
                </li></Link>
            </ul>
            <ul>
                <Link to="/services"><li data-aos="fade-right">
                    <FontAwesomeIcon icon={faSeedling} size='4x' className='icon'/>
                    <h4>ESG and Sustainability Solutions</h4>
                    <p>Companies face a growing need to integrate environmental, social and governance (ESG) principles into enterprise risk management, business strategy, and decision-making. Our ESG and Sustainability Consulting support companies at all stages in their ESG journey, whether that’s taking the first steps, developing an ESG strategy and roadmap, setting a sustainability target or preparing their sustainability report</p>
                </li></Link>
                <Link to="/services"><li data-aos="fade-left">
                    <FontAwesomeIcon icon={faChartSimple} size='4x' className='icon'/>
                    <h4>Business & Professional Training</h4>
                    <p>Effective training is the cornerstone of every organization's ability to maximize resource development. Our corporate training solutions provides our clients with effective and efficient means of having training needs identified and appropriate programs designed, developed and delivered.</p>
                    
                </li></Link>
            </ul>
        </div>
    
        </>
    )
}