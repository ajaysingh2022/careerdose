import React from 'react';
import './homepage.css';
import Glogo from '../../Assets/Google-play.svg';
import Wlogo from '../../Assets/Windows-OS.svg';
import Kids from '../../Assets/kids.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Video from '../../Assets/video.mp4'

const Index = () => {
    const [value, setValue]= React.useState()

    const onchange =(e)=>{
        setValue(e.target.value)
        console.log("kuch bhi",e.target.value);
    }
    return (
        <>
            <div class="banner cd-danger-gradient">
                <div class="banner-data container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
                            <p class="display-4 font-weight-bold mb-4 text-white">
                                Doing the Right Thing,
                                <br />
                                The Right Way
                            </p>
                            <div class="my-4 enroll">
                                <form class="enroll-tel" data-gtm-form-interact-id="0">
                                    <input type="tel"
                                        placeholder="Enter Phone Number"
                                        required=""
                                        pattern="[6-9]{1}[0-9]{9}"
                                        value={value}
                                        onChange={onchange}
                                        data-gtm-form-interact-field-id="0" />
                                    <button
                                        type="submit"
                                        class="btn btn-md cd-btn-success cd-pill ml-sm-2 m-0 letter-space text-uppercase font-weight-bold">
                                        Enroll
                                        <AiOutlineArrowRight />
                                    </button>
                                </form>
                            </div>
                            <div class="app-download-link mb-2">
                                <a href="https://play.google.com/store/apps/details?id=com.careerdose.learning" class="btn p-0" target="_blank" rel="noopener noreferrer">
                                    <img loading="lazy" src={Glogo} class="img-fluid" alt="android_app_link" style={{ height: "35px" }} />
                                </a>
                                <a class="btn p-0" href="https://careerdose.com/downloads/CareerDose%20Setup%202.0.2.exe" download="">
                                    <img loading="lazy" src={Wlogo} class="img-fluid" alt="windows_app_link" style={{ height: "35px" }} />
                                </a>
                            </div>
                            <div class="app-download-link">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner-img">
                            <img loading="lazy" src={Kids} class="img-fluid" alt="Career Dose Studying Kids" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card border-0 cd-depth cd-round-edge-sm cd-data-up">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-lg-5 col-md-12 col-sm-12">
                                {/* <video src={Video}
                                    class="img-fluid banner-video" preload="metadata"
                                    controls="" alt="Ben Cutting Promoted">
                                </video> */}
                            </div>
                            <div class="col-lg-7 col-md-12 col-sm-12 cd-img-obj-left">
                                <h1 class="font-weight-bold text-cd-center">
                                    <span class="cd-red-text">
                                        Compounding Efforts
                                    </span>
                                    <br />For Better Results
                                </h1>
                                <p class="text-cd-justify">
                                    With a variety of tools that makes learning engaging and less complicated,
                                    all of our classes are designed to provide the best learning experience with a blend of traditional
                                    and modern age teaching methods. Designed by the best teachers with vast experience in teaching,
                                    sessions are created keeping the end goal of high retention by the student. This is to ensure that
                                    the student gets the most out of our classes. Not just with academics, Career Dose stands beside
                                    you all throughout your Career Cycle. We aspire to provide all the necessary help to the students
                                    with which they can make informed career choices. This not only includes academic coaching but
                                    also by providing insight and background of all the career options available to said student.
                                    Also, you can always get in touch for free personal evaluation for the right career selection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
