import React from 'react'
import Glogo from '../../Assets/Google-play.svg';
import Wlogo from '../../Assets/Windows-OS.svg';
import After10 from '../../Assets/after10.png';
import After10math from '../../Assets/after10maths.png';
import After10bio from '../../Assets/after10bio.png';
import After10com from '../../Assets/after10com.png';
import After10arts from '../../Assets/after10arts.png'

const Index = () => {
    const [value, setValue] = React.useState()
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <div class="study_abroad">
                <div class="banner cd-primary-gradient">
                    <div class="banner-data container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
                                <p class="display-4 font-weight-bold mb-4 text-white">
                                    Mentor For Every<br />Stage Of Life
                                </p>
                                <div class="my-4 enroll">
                                    <form class="enroll-tel">
                                        <input type="tel"
                                            placeholder="Enter Phone Number"
                                            required=""
                                            pattern="[6-9]{1}[0-9]{9}"
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <button type="submit"
                                            class="btn btn-md cd-btn-success cd-pill ml-sm-2 m-0 letter-space text-uppercase font-weight-bold">
                                            Enroll
                                            <i class="fas fa-arrow-right ml-2">
                                            </i>
                                        </button>
                                    </form>
                                </div>
                                <div class="app-download-link mb-2">
                                    <a href="https://play.google.com/store/apps/details?id=com.careerdose.learning" class="btn p-0"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img loading="lazy" src={Glogo}
                                            class="img-fluid" alt="android_app_link" style={{ height: "40px" }} />
                                    </a>
                                    <a class="btn p-0" href="https://careerdose.com/downloads/CareerDose%20Setup%202.0.2.exe" download="">
                                        <img loading="lazy" src={Wlogo}
                                            class="img-fluid"
                                            alt="windows_app_link" style={{ height: "40px" }} />
                                    </a>
                                </div>
                                <div class="app-download-link">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner-img">
                                <img loading="lazy" src={After10}
                                    class="img-fluid" alt="Exams" />
                            </div>
                        </div>
                    </div>
                </div>
                <section class="py-5 bg-1">
                    <div class="container">
                        <div class="card cd-depth cd-round-edge border-0 p-4 p-md-5">
                            <p class="display-4 cd-red-text font-weight-bold">
                                Science
                            </p>
                            <div class="card-body">
                                <div class="clearfix">
                                    <img loading="lazy" src={After10math}
                                        class="col-sm-4 float-md-left mb-3 ml-md-2 img-fluid ml-2" alt="..." style={{ height: "300px" }} />
                                    <h1 class="font-weight-bold">
                                        <span class="cd-blue-text">
                                            PCM
                                        </span>
                                        <br />
                                        <span class="small">
                                            (Physics Chemistry &amp; Maths)
                                        </span>
                                    </h1>
                                    <h5 class="font-weight-bold mb-4">
                                        Choosing Career Option With PCM
                                    </h5>
                                    <p class="text-cd-justify mb-0">
                                        Once you complete your 10th class, you have to make a choice of subjects for your higher
                                        studies. For those students who are interested in engineering, architecture, research and
                                        development etc. among many other career paths; can opt for science subjects with PCM
                                        (physics, chemistry and mathematics) as their major subjects and 2 other subjects of their
                                        choice. This stream is recommended to those who are into the HOW and WHY of the universe
                                        and have interest in technical aspects of things in general.
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="clearfix">
                                    <img loading="lazy" src={After10bio}
                                        class="col-sm-4 float-md-right mb-3 ml-md-2 img-fluid mr-2" alt="..." style={{ height: "300px" }}/>
                                    <h1 class="font-weight-bold">
                                        <span class="cd-blue-text">
                                            PCB
                                        </span>
                                        <br />
                                        <span class="small">
                                            (Physics Chemistry &amp; Biology)
                                        </span>
                                    </h1>
                                    <h5 class="font-weight-bold mb-4">
                                        Choosing Career Option With PCB
                                    </h5>
                                    <p class="text-cd-justify mb-0">
                                        This stream provides an excellent opportunity for those who are really interested
                                        in life-sciences, have a great inner quality of helping others along with a sense of
                                        curiosity about life in general. Students who are interested in medicine or medical
                                        studies, biotechnology, microbiology etc. are required to take up the subjects of PCB
                                        (Physics, Chemistry, Biology) with 2 other subjects of their choice after 10th.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card cd-depth cd-round-edge border-0 p-4 p-md-5 my-5">
                            <p class="display-4 cd-red-text font-weight-bold">
                                Commerce
                            </p>
                            <div class="card-body"><div class="clearfix">
                                <img loading="lazy" src={After10com}
                                    class="col-sm-4 float-md-left mb-3 ml-md-2 img-fluid mr-2" alt="..." style={{ height: "300px" }}/>
                                <p class="text-cd-justify mb-0">
                                    This stream offers a huge variety of career options for those who have the ability and interest
                                    towards numbers, accounts, calculations and the world of business in general. Students interested
                                    in the fields of accounting, business studies, economics studies, finance, marketing or looking to
                                    become professionals like CA, CFA etc. among many others; should take up commerce as their subject
                                    after Class 10th.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="card cd-depth cd-round-edge border-0 p-4 p-md-5">
                            <p class="display-4 cd-red-text font-weight-bold">
                                Humanities
                            </p>
                            <div class="card-body">
                                <div class="clearfix">
                                    <img loading="lazy" src={After10arts}
                                        class="col-sm-4 float-md-right mb-3 ml-md-2 img-fluid ml-2" alt="..." style={{ height: "300px" }}/>
                                    <p class="text-cd-justify mb-0">
                                        A lot of students after completing their 10th opt for the arts stream, also known
                                        as Humanities stream. It has a wide variety of subjects which can offer exciting
                                        career opportunities for the students in the fields of mass media, journalism, literature,
                                        sociology, social service, human psychology, politics, economics, language courses and history
                                        etc. Offering a variety of subjects like History, Geography, Political Science, Psychology,
                                        Sociology, English, Hindi and Sanskrit and other languages, this stream has the most branching
                                        career paths available to students after class 10th.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Index
