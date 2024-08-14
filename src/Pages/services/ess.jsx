import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './ess.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function ESS() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right"> Environmental Sustainability Solutions </div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>Environmental Sustainability Solutions</h1>
                    <p>As Qatar places climate change at the forefront of its priorities, through our Environmental Consultancy Services, we offer comprehensive range of environment related services, supporting and guiding our clients through environmental impact assessment processes to achieve sustainable environmental goals in their business operations.</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">We support our clients with our expertise in the following areas related to Environment Permit of Ministry of Environment and Climate Change (MOECC):</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} />    Consent to Operate (CTO) permit application</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Environmental Impact Assessment (EIA) Study</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Preparation and submission of Environmental permit packages and requirements (Arabic & English)</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Environmental Monitoring Plan (EMP)</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Complete Environmental monitoring services</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Environmental Management Plan in line with ISO 14001</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Emergency Response Plan for oil spillage and chemical release</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Waste Management Plan with tracking system</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Facilitation and implementation of Environmental Management Systems (EMS)</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Maintain EMS certifications (ISO- 14001: 2005) - development and Compliance Audit</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    EMS Trainings: EIA, Chemical Safety, Air & Water Quality Management, Hazardous Waste & Materials Management, ISO 14001:2015 and OHSAS 45001:2018</li>

            </ul>
        </div>


        </>
    )
}