import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './strategy.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function Strategic() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right"> Strategic Management Consultancy </div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>Strategic Management Consultancy</h1>
                    <p>To drive long-term success, you need a clear and actionable business strategy. We offer comprehensive Strategic Management services for your organization focusing on your people and your business: where it is today and where you want it to be tomorrow in achieving outstanding results for your business.</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">Our Strategic Management Consultancy Services Include:</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} />    Entering new businesses or markets</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Business growth strategies</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Feasibility Studies</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Strategic portfolio reviews and restructuring</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Strategic operating model</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Performance Management and Improvement</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Business Process Improvement</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Business Continuity Management</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Quality Management issues and its mitigation</li>
            </ul>
        </div>


        </>
    )
}