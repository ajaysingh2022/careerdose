import React from 'react'
import WhyDose from '../../Assets/whydose.webp'
import Icon1 from '../../Assets/icon1.webp'
import Icon2 from '../../Assets/icon2.webp'
import Icon3 from '../../Assets/icon3.png'
import Icon4 from '../../Assets/icon4.png'
import Leicester from '../../Assets/leicester.webp'
import Demont from '../../Assets/De-Mont.webp'
import Herdford from '../../Assets/Herdford.webp'
import Manchester from '../../Assets/Manchester.webp'
import AAERI from '../../Assets/AAERI.png'
import Airc from '../../Assets/airc.png'
import Newzea from '../../Assets/new_zealand.png'
import Education from '../../Assets/education_uk.png'
import Pier from '../../Assets/pier.png'
import './study2.css'


const Study = () => {
    return (
        <>
            <section className='section-3'>
                <div className='head-3'>
                    <h3>
                        Why are students trusting Career Dose?</h3>
                </div>
                <div className='cont'>
                    <div>
                        <p className='medium-t'>
                            Career Dose helps students by connecting them with an experienced mentor who can support them throughout
                            their journey from search to enrolment through a self-paced preparatory program.
                        </p>
                        <img src={WhyDose} className='img-medium' alt='' style={{ height: "13rem" }} />
                    </div>
                    <div className='icon'>
                        <div className='inner-icon'>
                            <img src={Icon1} alt='' style={{ height: "1.5rem" }} />
                            <h4>Personalised Support</h4>
                            <p>from world-class advisors throughout the student journey from search to enrollment and even beyond.</p>
                        </div>
                        <div className='inner-icon'>
                            <img src={Icon2} alt='' style={{ height: "1.5rem" }} />
                            <h4>Un Matched Success Rate</h4>
                            <p>99.6% of applicants receive an offer from their preferred university and get a successful Visa outcome.</p>
                        </div>
                        <div className='inner-icon'>
                            <img src={Icon3} alt='' style={{ height: "1.5rem" }} />
                            <h4>Trusted by 50K Students</h4>
                            <p>Students get bespoke counselling and handpicked course options from experienced advisors to match their goals and aspirations with guaranteed success.</p>
                        </div>
                        <div className='inner-icon'>
                            <img src={Icon4} alt='' style={{ height: "1.5rem" }} />
                            <h4>Community Support</h4>
                            <p>Students get first-hand peer to peer support from existing international students to understand what it's like to live and study in the UK. What are the real-life challenges and how to overcome them?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-4'>
                <div className='section-heading'>
                    <h3>Most Popular Courses</h3>
                </div>
                <div className='cards'>
                    <div>
                        <div className='card-image'>
                            <a href='https://le.ac.uk/' >
                                <img src={Leicester} alt='' style={{ height: "9rem" }} />
                            </a>
                        </div>
                        <div className='card-content'>
                            <h4>GRADUATE</h4>
                            <p>Data Science & Business Analytics</p>
                            <a href='https://le.ac.uk/' >
                                <span>Leicester University
                                    <br />United Kingdom
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='card-image'>
                            <a href='https://www.dmu.ac.uk/home.aspx' >
                                <img src={Demont} alt='' style={{ height: "9rem" }} />
                            </a>
                        </div>
                        <div className='card-content'>
                            <h4>POSTGRADUATE</h4>
                            <p>Product Design</p>
                            <a href='https://www.dmu.ac.uk/home.aspx' >
                                <span>De MontFort University
                                    <br />United Kingdom
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='card-image'>
                            <a href='https://www.herts.ac.uk/' >
                                <img src={Herdford} alt='' style={{ height: "9rem" }} />
                            </a>
                        </div>
                        <div className='card-content'>
                            <h4>GRADUATE</h4>
                            <p>Artificial Intelligence and Robotics</p>
                            <a href='https://www.herts.ac.uk/' >
                                <span>University of Hertfordshire
                                    <br />United Kingdom
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='card-image'>
                            <a href='https://www.manchester.ac.uk/' >
                                <img src={Manchester} alt='' style={{ height: "9rem" }} />
                            </a>
                        </div>
                        <div className='card-content'>
                            <h4>POSTGRADUATE</h4>
                            <p>MBA - Master of Business Administration</p>
                            <a href='https://www.manchester.ac.uk/' >
                                <span>University of Manchester
                                    <br />United Kingdom
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-5'>
                <div className='section5-head'>
                    <h2 className='h2-head'>
                        Global Accreditations & Recognitions
                    </h2>
                </div>
                <div className='accred-image'>
                    <div>
                        <a href='https://aaeri.org.in/'>
                        <img src={AAERI} alt='' style={{ height: "5rem" }} />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.airc-education.org/' >
                        <img src={Airc} alt='' style={{ height: "5rem" }} />
                        </a>
                    </div>
                    <div>
                        <img src={Newzea} alt='' style={{ height: "5rem" }} />
                    </div>
                    <div>
                        <img src={Education} alt='' style={{ height: "5rem" }} />
                    </div>
                    <div>
                        <img src={Pier} alt='' style={{ height: "5rem" }} />
                    </div>
                </div>

            </section>
            <div class="copywrite">
                <p class="">Copyright © 2020 All Rights Reserved&nbsp;|&nbsp;
                    <span>Career Dose Pvt. Ltd.</span>
                </p>
            </div>
        </>
    )
}

export default Study
