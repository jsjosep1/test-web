import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './service.css'
import image from './bda.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function BusinessDev() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-service" data-aos ="fade-up">
            <div className = "title-service" data-aos = "fade-right"> Business Development Advisory</div>
        </div>


        <div className="service-desc" data-aos="fade-up">
                <img src = {image} alt="service-image" data-aos="fade-up"></img>
                <div className="text-content" data-aos="fade-up">
                    <h1>Business Development Advisory</h1>
                    <p>We look at business development as an integrated, cohesive effort that enhances business value, we help our clients to increase revenues, explore and set up new business line and opportunities for investments and attained sustainability by making necessary changes in business models, strategy and operations.</p>
                    <p>We at MWC LLC, help businesses to define their strategic direction, improve their market positioning and revenue generation.</p>
                </div>
        </div>

        <div className='services-offered'>
            <h1 data-aos="fade-up">At MWC LLC:</h1>
            <ul data-aos="fade-up"> 
                <li><FontAwesomeIcon icon={faCircleCheck} />    We advise startups as well as already-established small to medium and large-scale companies on how to raise capital investment as well as on market expansion and development.</li>
                <li><FontAwesomeIcon icon={faCircleCheck} />    Through our business development advisory , we guide businesses to make better decisions by using our extensive knowledge of local and regional markets and networking in identifying growth opportunities and building a competitive strategy based on our deep understanding of customers and the overall marketplace.</li>
            </ul>
        </div>


        </>
    )
}