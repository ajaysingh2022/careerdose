import React from 'react'
import './accup.css'
import Guidance from '../../Assets/Guidance.svg'
import Focused from '../../Assets/Focused.svg'
import safe_data from '../../Assets/safe_data.svg'
import analytics from '../../Assets/analytics.svg'
import Liveclass from '../../Assets/live_classes.svg'
import FacetoFace from '../../Assets/face_to_face.svg'
import Timeline from '../../Assets/timeline.png'

const Index = () => {
    return (
        <>
            <section class="pb-5 mb-5">
                <div class="cd-container">
                    <div class="row text-center data-card">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                            <img loading="lazy" src={Guidance}
                                class="mb-2" alt="Guidance" />
                            <h3 class="h3">Top-Notch Guidance</h3>
                            <p class="w-100">
                                We emphasize highly on guiding the students on to the right path which shall lead them to have
                                fruitful and fulfilling academics and career. We don’t believe in stifling the voice of the
                                students, encouraging them to share their dreams and aspirations. Then connect those dreams and
                                aspirations with the correct career path choices based on the strengths of the student.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                            <img loading="lazy" src={Focused}
                                class="mb-2" alt="Focused" />
                            <h3 class="h3">Interactive and Balanced Learning</h3>
                            <p class="w-100">
                                At Career Dose, we strive to provide efficiently designed learning modules. Modules are aimed
                                specifically at conceptual learning to help develop critical thinking among students. We have
                                well-crafted recorded classes with some of the best teachers, which allow students to repeat
                                the structured topics any number of times as they need for in-depth understanding before moving
                                on to the next topic.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                            <img loading="lazy" src={safe_data}
                                class="mb-2" alt="Safe Data" />
                            <h3 class="h3">Convenient and Safe</h3>
                            <p class="w-100">
                                Easy access to the digital content both online and offline allows the students to study
                                through live interactive classes or structured recorded classes without the hassle of
                                traveling and from the safety of home. That in turn saves energy and improves concentration.
                                In this post corona world, it is always safer to keep contact with outside world as less as
                                possible..
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                            <img loading="lazy" src={analytics}
                                class="mb-2" alt="Analytics" />
                            <h3 class="h3">Report and Analytics</h3>
                            <p class="w-100">
                                Career Dose provides systematic, periodic reports to the parents in an easy to comprehend
                                format so that they remain aware of their ward’s performance. We are completely transparent
                                on what material is given to students for learning. We provide special sessions to students
                                so they can analyze their standing across different schools and cities thus invoking a
                                sense of healthy competition.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                            <img loading="lazy" src={Liveclass}
                                class="mb-2" alt="Live CLass" />
                            <h3 class="h3">Free Live Classes</h3>
                            <p class="w-100">
                                We know your time is priceless and if anyone is investing their precious time with us, we
                                absolutely value its importance. At Career Dose, our aim is to provide a multi-dimensional
                                study approach for the students. Thus we have live classes for topics that can benefit
                                from a live class environment. Our live classes are fun, interactive, knowledge based,
                                and best-in-category.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                            <img loading="lazy" src={FacetoFace}
                                class="mb-2" alt="Face to Face" />
                            <h3 class="h3">One on One Sessions</h3>
                            <p class="w-100">
                                Career Dose’s one on one sessions with our highly qualified teachers help the students in
                                realizing their highest potential by understanding and mitigating their weaknesses and also
                                recognize and enhance their latent talents. With the precise advice of our experts, your ward
                                will be able to remove the roadblocks in their path towards academic success thereby
                                increasing their future career opportunities.
                            </p>
                        </div>
                      
                    </div>
                </div>
            </section>
            <div class="cd-container timeline py-5 my-5">
                <div class="row text-center">
                    <p class="font-weight-bold display-4 mb-5">
                        How Are We Unique
                    </p>
                    <img loading="lazy" src={Timeline}
                        class="desk_timeline img-fluid" alt="timeline" />

                </div>
            </div>
        </>
    )
}

export default Index
