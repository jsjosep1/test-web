import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './esg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function ESG() {
    useEffect(()=> {
        Aos.init({duration:2000,once:true})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right"> ESG and Sustainability Solutions </div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>ESG and Sustainability Solutions</h1>
                    <p>Companies face a growing need to integrate environmental, social and governance (ESG) principles into enterprise risk management, business strategy, and decision-making. Our ESG and Sustainability Consulting support companies at all stages in their ESG journey, whether that’s taking the first steps, developing an ESG strategy and roadmap, setting a sustainability target or preparing their sustainability report</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">Our ESG and Sustainability Consulting Services covers:</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} /> ESG assessment and gap-analysis</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> ESG Sustainability strategy and roadmap</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Corporate Compliance & Risk Assessment and benchmarking</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> ESG Implementation and Integration : United Nations Sustainable Development Goals (UN SDGs), United Nations Global Compact (UN GC), Global Reporting Initiative (GRI)</li>
            </ul>
        </div>


        </>
    )
}