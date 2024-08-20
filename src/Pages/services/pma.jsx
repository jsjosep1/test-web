import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './projectmng.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function ProjectManagement() {
    useEffect(()=> {
        Aos.init({duration:2000,once:true})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right"> Project Management & Operational Excellence </div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>Project Management & Operational Excellence</h1>
                    <p>We understand the business, technology and cultural needs of project and the organizations. We combine the know-how of experts from operations with professional holistic methodologies and partner with our client in the transformation journey and offer them customized solutions that drive performance and operational efficiency to ensure sustainable business.</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">Our Project Management and Operational Efficiency Advisory Services cover:</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} /> Project Management Office (PMO), Project governance frameworks</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Improve project management processes, planning and control techniques</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Process Safety Studies for - FERA, QRA, PSSR</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Operational, Maintenance and Reliability Studies</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Process Safety and Risk Management Trainings</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Independent Third Party Design Reviews</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Process Safety Supports by providing Experienced Chair Person for - HAZOP, HAZID, SIMOPS, PHASER, Value Engineering</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Operational maintenance, Asset integrity and reliability</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Performance Monitoring & Improvement</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Reliability Program Development</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Root Cause Failure Analysis (RCFA)</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Performance benchmarking</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Corrosion Control Solutions</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Energy Management and Efficiency</li>
            </ul>
        </div>


        </>
    )
}