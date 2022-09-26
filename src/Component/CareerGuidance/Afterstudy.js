import React from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BiPhoneCall} from'react-icons/bi'
import './afterstudy.css'
import Formsub from '../../Assets/FormSub.png'
import Header from '../Header/index'
import Footer from '../Footer/index'

const Afterstudy = () => {
    return (
        <>
                    <Header />

            <section className='form-submit'>
                <div>
                    <h3> Thanks for Apply StudyAbroad.
                        <br />
                        We have recieved your Enquiry!!
                    </h3>
                    <p>Our Experts will reach out to you soon.</p>
                    <span className='d-flex'>
                        <a href="https://wa.me/+919999143861?text=Hi%20Greetings,%20I%20have%20a%20query%20regarding%20your%20*Study%20Abroad%20Program.*" 
                        className='mb-2'>
                            <button className='btn-call'>
                                <span className='d-flex'>
                                    <AiOutlineWhatsApp />
                                    <p className='m-0'>Chat Now!</p>
                                </span>
                            </button>
                        </a>
                        <a href='tel:+919999143861' className='mb-2'>
                        <button className='btn-call'>
                            <span className='d-flex'>
                                <BiPhoneCall />
                                <p className='m-0 ml-1'>Call Now!</p>
                            </span>
                        </button>
                        </a>
                    </span>
                </div>
                <div>
                    <img src={Formsub} alt='' style={{height:"20rem"}}/>
                </div>
            </section>
            <section>
                <Footer />
            </section>

        </>
    )
}

export default Afterstudy
