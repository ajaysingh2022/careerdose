import React from 'react'
import Header from '../../Header'
import Glogo from '../../../Assets/Google-play.svg'
import Wlogo from '../../../Assets/Windows-OS.svg'
import Cont from '../../../Assets/Career/contact.png'
import './contact.css'

const Index = () => {
    return (
        <>
            <section>
                <div class="banner cd-danger-gradient">
                    <div>
                        <Header />
                    </div>
                    <div class="banner-data container">

                        <div class="d-flex-class">
                            <div class="">
                                <p class="display-4 font-weight-bold mb-4 text-white">
                                Get In Touch With
                                <br /> Us Anytime You Can
                                   
                                </p>
                                <div class="my-4 enroll">
                                    <form class="enroll-tel" data-gtm-form-interact-id="0">
                                        <input type="tel"
                                            placeholder="Enter Phone Number"
                                            required=""
                                            pattern="[6-9]{1}[0-9]{9}"
                                            // value={value}
                                            
                                            onChange={onchange}
                                            data-gtm-form-interact-field-id="0" />
                                        <button
                                            type="submit"
                                            class="btn btn-md cd-btn-success cd-pill ml-sm-2 m-0 letter-space text-uppercase font-weight-bold">
                                            Enroll
                                            {/* <AiOutlineArrowRight /> */}
                                        </button>
                                    </form>
                                </div>
                                <div class="app-download-link mb-2">
                                    <a href="https://play.google.com/store/apps/details?id=com.careerdose.learning" class="btn p-0" target="_blank" rel="noopener noreferrer">
                                        <img loading="lazy" src={Glogo} class="img-fluid" alt="android_app_link" style={{ height: "45px" }} />
                                    </a>
                                    <a class="btn p-0" href="https://careerdose.com/downloads/CareerDose%20Setup%202.0.2.exe" download="">
                                        <img loading="lazy" src={Wlogo} class="img-fluid" alt="windows_app_link" style={{ height: "45px" }} />
                                    </a>
                                </div>
                               
                            </div>
                            <div class="">
                                <img loading="lazy" src={Cont} class="img-fluid" alt="Career Dose Studying Kids" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Index
