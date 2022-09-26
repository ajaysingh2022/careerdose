import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsTwitter, BsTelegram } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='display-grid pt-5 mb-5 footer-data'>
                    <div className=' col-md-12'>
                        <h5>Who We are</h5>
                        <p>Career Dose aims to nurture the brains of young minds. We want to create a difference when it comes. In the present era, there are so many options available for the young generation, and as they say, choices often lead to confusions. We at Career Dose put all our efforts to make our young minds confusion-free with clarity on the subject and career. We aim to help in all-around development of minds before they hit the job battlefield.</p>
                    </div>
                    <div className=' col-md-6 col-sm-12'>
                        <h5>Syllabus</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='/class6_syllabus'>
                                    <span>Class VI</span>
                                </a>
                            </li>
                            <li>
                                <a href='/class7_syllabus'>
                                    <span>Class VII</span>
                                </a>
                            </li>
                            <li>
                                <a href='/class8_syllabus'>
                                    <span>Class VIII</span>
                                </a>
                            </li>
                            <li>
                                <a href='/class9_syllabus'>
                                    <span>Class IX</span>
                                </a>
                            </li>
                            <li>
                                <a href='/class10_syllabus'>
                                    <span>Class X</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='  col-sm-12'>
                        <h5>About French</h5>
                        <p>Learning French with CAREER DOSE is an interactive adventure. All classes are based on a student-centered curriculum that accommodates each student’s interests and passions, giving learning the freedom to flourish.</p>
                        <a href='/language_class/french'>
                            <button className='btn btn-sm cd-btn-primary text-uppercase m-0 cd-pill letter-space'>View More</button>
                        </a>
                    </div>
                </div>
                <div className='display-grid2 pb-5 footer-data'>
                    <div className=' col-xs-12'>
                        <h5>Company</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <span>About Us</span>
                            </li>
                            <li>
                                <span>Careers</span>
                            </li>
                            <li>
                                <span>FAQs</span>
                            </li>
                            <li>
                                <a href='/contact_us'>
                                    <span>Contact us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=' col-xs-12'>
                        <h5>Our Branches</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="/our_branches/darbhanga">
                                    <span>Darbhanga</span>
                                </a>
                            </li>
                            <li>
                                <a href="/our_branches/saharanpur">
                                    <span>Saharanpur</span>
                                </a>
                            </li>
                            <li>
                                <a href="/our_branches/meerut">
                                    <span>Meerut</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-xs-12'>
                        <h5>What We Do</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <span>ISO Certification</span>
                            </li>
                            <li>
                                <span>Terms & Conditions</span>
                            </li>
                            <li>
                                <a href='/privacy_policy'>
                                    <span>Privacy Policy</span>
                                </a>
                            </li>
                            <li>
                                <span>Partner with us</span>
                            </li>
                        </ul>
                    </div>
                    <div className=' col-xs-12'>
                        <h5 className='mb-4'>Get Social</h5>
                        <div className='mb-4 social-icons'>
                            <div className='icon-space cd-bg-primary'>
                                <a href='https://www.facebook.com/careerdose/'>
                                    <span><BsFacebook /></span>
                                </a>
                            </div>
                            <div class="icon-space cd-bg-danger">
                                <a href="https://www.instagram.com/careerdose_india">
                                    <span><BsInstagram /></span>
                                </a>
                            </div>
                            <div class="icon-space bg-info">
                                <a href="https://twitter.com/CareerDose">
                                    <span><BsTwitter /></span>
                                </a>
                            </div>
                            <div class="icon-space bg-secondary">
                                <a href="https://t.me/careerdose_india">
                                    <span><BsTelegram /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright text-center py-3'>
                    <p className='m-0 small mt-2'>Copyright © 2020 All Rights Reserved&nbsp;|&nbsp;
                        <NavLink to='/'>Career Dose Pvt. Ltd.</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Index;