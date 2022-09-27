import React from 'react'
import Hiring from '../../Assets/Hiring/hiring.jpg'
import './hiring.css'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { FaPaperPlane } from 'react-icons/fa'
import Form from './Form'

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const Index = () => {
    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        jobrole:"",
        expertise:""
        // link: ""
    })

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            errorMessage: "Fill your First Name ",
            pattern: "[A-Za-z]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address!",
            // pattern: "^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$",
            required: true
        },
        {
            id: 4,
            name: "contact",
            type: "tel",
            placeholder: "Contact No.",
            label: "Contact No.",
            errorMessage: "Fill correct Contact number!",
            pattern: "[6-9]{1}[0-9]{9}",
            required: true
        }
    ]
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form filled", values);
        // setValues({});
    };

    return (
        <>
            <section>
                <div>
                    <Header />
                </div>
                <div className='image-form-section'>
                    <div className='img-div'>
                        <img src={Hiring} alt=''  />
                    </div>
                    <div>
                        <form
                            className='hiring-form'
                            onSubmit={handleSubmit}>
                            {
                                inputs.map((input) => (
                                    <Form
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}
                                    />
                                ))
                            }
                            <span>
                                <label><strong>Job Role</strong>
                                    <div>
                                        <select id='we_r_hiring' placeholder='' onChange={(e)=>{setValues({...values,jobrole:e.target.value})}} required>
                                            <option value="0" selected disabled>Select Your Profession</option>
                                            <option value="subject">Subject Coach</option>
                                            <option value="sales">Sales Executive</option>
                                            <option value="video">Video Editor</option>
                                            <option value="graphic">Graphic Designer</option>
                                            <option value="content">Content Developer</option>
                                            <option value="full stack">Full Stack Developer</option>
                                            <option value="android">Andriod/IOS Developer</option>
                                        </select>
                                    </div>
                                </label>
                            </span>
                            <span>
                                <label><strong>Expertise Level</strong>
                                    <div>
                                        <select placeholder='' id='we_r_hiring' onChange={(e)=>{setValues({...values,expertise:e.target.value})}} required>
                                            <option value="0" selected disabled>Select Your Expertise Level</option>
                                            <option value="fresher">Fresher</option>
                                            <option value="experienced">Experienced</option>
                                        </select>
                                    </div>
                                </label>
                            </span>
                            <span>
                                <label><strong>Experience</strong>
                                    <div className='select-exp'>
                                        <select placeholder='' id='we_r_hiring'>
                                            <option selected disabled>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>5+</option>
                                        </select>
                                        <span className='select-yr'>Year</span>
                                    </div>
                                </label>
                            </span>
                            <span>
                                <label>.
                                    <div className='select-exp'>
                                        <select placeholder='' id='we_r_hiring'>
                                            <option selected disabled>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                        </select>
                                        <span className='select-yr'>Month</span>
                                    </div>
                                </label>
                            </span>
                            <span className='input-link'>
                                <label><strong>Your Portfolio Link</strong></label>
                                <div >
                                    <input className='input-type' type='link' placeholder='' value="" />
                                </div>
                            </span>
                            <span className='input-link'>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Upload Your Resume Here</p>
                                </Dragger>
                            </span>
                            <span className='input-link input-checkbox'>
                                <input type='checkbox' />
                                <label className='send-checkbox'>Send a Copy to me.</label>
                            </span>
                            <span >
                                <button className='submit-button' type='submit'>
                                    SUBMIT
                                    <span className='button-plane'>
                                        <FaPaperPlane />
                                    </span>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </section>

        </>
    )
}
export default Index
