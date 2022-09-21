import React from 'react'
import { Button, Form, Input, Select } from 'antd';
import './study.css'
import Visa from '../../Assets/visa.webp'
import Roi from '../../Assets/roi.webp'
import Travel from '../../Assets/travel.webp'
import Ranking from '../../Assets/ranking.webp'
import Scholarship from '../../Assets/scholarship.webp'
import Diversity from '../../Assets/diversity.webp'
import CDlogo from '../../Assets/cd-nav-logo.svg';
import Studysection from './Study2'




const { Option } = Select;
const StudyAbroad = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select defaultValue={+91} 
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="1">+1</Option>

            </Select>
        </Form.Item>
    );
    return (
        <>
           
            <section className='section1'>
            <div className='logo'>
                <img src={CDlogo} alt="" style={{ height: "2.5rem" }} />
            </div>
                <div className='container'>
                <div className='wrapper'>
                    <div className='wrapper-div1'>
                        <p><span className='intake'>Study in </span><span className='abroad'>Abroad</span></p>
                        <p className='admission'>Admissions Open - Jan'23 Intake</p>
                    </div>
                    <div className='wrapper-div2'>
                        <p className='para'>World Class Advisors</p>
                        <p className='para'>Personalised Counseling</p>
                        <p className='para'>99.6% Success rate</p>
                        <p className='para'>Community Support</p>
                    </div>
                </div>
                <div className='form'>
                    <h3>Book a FREE Counselling</h3>
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            // tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Name" className='input-hovar'/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input type='tel'
                                placeholder="Enter Mobile No."
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item >
                            <Select placeholder="What do you want to study?">
                                <Select.Option value="Creative">Creative Arts & Design</Select.Option>
                                <Select.Option value="Geographical">Geographical & Environmental Studies</Select.Option>
                                <Select.Option value="language">Language Area Studies</Select.Option>
                                <Select.Option value="Law">Law</Select.Option>
                                <Select.Option value="Mathematical">Mathematical Science</Select.Option>
                                <Select.Option value="Medical">Medical</Select.Option>
                                <Select.Option value="Management">Management</Select.Option>
                                <Select.Option value="Not">Not Specified</Select.Option>
                            </Select>
                        </Form.Item>
                        <div>
                            <Button className='form-button'  text="Meet your advisor" style={{ width: "100%" }} >
                                <span>Meet your Advisor</span>
                            </Button>
                        </div>
                    </Form>
                    <p>
                        <span>Already have an Account?  </span>
                        <strong className='signin'> Sign in now</strong>
                    </p>
                </div>
                </div>
            </section>
            <section className='section2'>
                <div>
                    <div className='study-abroad'>
                        <h3>Why Study in Abroad</h3>
                    </div>
                    <div style={{ margintop: "60px" }}>
                        <div className='row-why'>
                            <div>
                                <img src={Visa} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>2 years PSW</p>
                            </div>
                            <div>
                                <img src={Roi} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>Faster ROI</p>
                            </div>
                            <div>
                                <img src={Travel} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>No Travel Restriction</p>
                            </div>
                            <div>
                                <img src={Ranking} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>Top Ranking University</p>
                            </div>
                            <div>
                                <img src={Scholarship} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>Generous Scholarships</p>
                            </div>
                            <div>
                                <img src={Diversity} alt='' style={{ height: "4.2rem" }} />
                                <p className='medium-text'>Global Workforce</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Studysection />
            </section>
        </>
    )
}

export default StudyAbroad;
