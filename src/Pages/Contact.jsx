import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { ContactUs } from './contactform'
import { CallbackForm } from './callbackform'

export default function Contact() {
    useEffect(()=> {
        Aos.init({duration:2000})
    },[])
    return (
        <>
        <div className="container-title-contact" data-aos = "fade-up">
            <div className = "title-contact" data-aos = "fade-right"> Contact us </div>
        </div>



        <div className='info'>
            <ul className='contact-info'>
                <li data-aos = "fade-right"> 
                    <FontAwesomeIcon icon={faLocationDot} size='4x' color='#0a66c2'/> 
                    <h4>Address</h4>
                    <p>MWC LLC</p>
                    <p>P. O. Box - 212046</p>
                    <p>Doha, Qatar</p>
                </li>
               
                <li data-aos = "fade-right"> 
                    <FontAwesomeIcon icon={faEnvelope} size='4x' color='#0a66c2'/>
                    <h4>Email</h4>
                    <a href = "mailto: contact@mwc-consultancy.com">contact@mwc-consultancy.com</a>
                
                </li>
                
                <li data-aos = "fade-left"> 
                    <FontAwesomeIcon icon={faPhone} size='4x' color='#0a66c2'/>
                    <h4>Phone</h4>
                    <a href='tel:+974-4423-1348'>+974-4423-1348</a>

                    
                </li>
        
                <li data-aos = "fade-left"> 
                    <FontAwesomeIcon icon={faLinkedin} size='4x' color='#0a66c2'/>
                    <h4>LinkedIn</h4>
                    <a href= 'https://www.linkedin.com/company/mwc-llc/'>Connect with us</a>
                </li>
            </ul>
        </div>

        <ContactUs/>
        
    
        </>
    )
}