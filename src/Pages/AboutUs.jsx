import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './about.css'
import logo from '../mwc-logo-trans_copy-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'




export default function AboutUs() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-about" >
            <div className = "title-about" data-aos = "fade-right">About us </div>
        </div>

        <div className='aboutus'>
            <ul>
            <li><h1 data-aos="fade-down">About MWC LLC</h1>
            <p data-aos="fade-down">
                     MWC LLC is a technical and management consulting, research and advisory firm registered on Qatar Financial Center (QFC) platform. MWC offers a range of technical and management consulting and advisory services in various industry sectors, all designed to help your organization and people reach their potential. We partner with our clients to transform their business by providing the research, insights and strategic consulting support they need to enhance their business strategies, operational sustainability and results.
                </p></li>
            <li><img src={logo} alt="Logo" data-aos = "fade-left" ></img></li>
            </ul>
        </div>

        <div className='missionvision'>
            <h1 data-aos = 'zoom-in-up' data-aos-duration = '1000'>Our Mission and Vision</h1>
            <h2 data-aos = 'zoom-in-up' data-aos-duration = '1000'>Our Mission</h2>
            <p data-aos = 'zoom-in-up'  data-aos-duration = '1000'><FontAwesomeIcon icon={faSquareCheck} size = "1.5x" />  To enable you to unlock your business and human potentials by providing high quality on-time operational excellence services in a cost-effective manner.</p>
            <h2 data-aos = 'zoom-in-up' data-aos-duration = '1000'>Our Philosophy</h2>
            <p data-aos = 'zoom-in-up'  data-aos-duration = '1000'><FontAwesomeIcon icon={faSquareCheck} size = "1.5x" />  We believe in strong collaboration, in holding hands and working together as a team with our clients. Our philosophy for business practice is that there is always more to learn, further insight to gain and that solutions and possibilities are endless.</p>
        </div>
        
        </>

    )
    
}