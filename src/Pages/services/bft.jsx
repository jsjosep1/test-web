import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './bpt.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function BusinessTraining() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right">Business & Professional Training</div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>Business & Professional Training</h1>
                    <p>Effective training is the cornerstone of every organization's ability to maximize resource development. Our corporate training solutions provides our clients with effective and efficient means of having training needs identified and appropriate programs designed, developed and delivered.</p>
                    <p>A wealth of industry experienced, professional trainers deliver programs that are developed using most current expertise and technology, and the best practices in all business areas and industry.</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">Our training solutions include:</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} />   Needs assessments, curriculum design and Customized corporate trainings</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Coaching, mentorship and consultation</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Leadership & Executive Development Programs</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Process Safety and Risk Management Trainings</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Environmental Awareness and EMS (ISO 14001:2015) Training</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Quality Management System (ISO 9001:2015) Training</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Occupational Safety and Health (ISO 45001:2018) Training</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />   Workshops & Seminars</li>

            </ul>
        </div>


        </>
    )
}