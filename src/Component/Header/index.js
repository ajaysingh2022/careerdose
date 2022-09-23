import React from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd'
import { AiTwotonePhone, AiTwotoneMedicineBox, AiFillContacts } from 'react-icons/ai';
import { FaSchool, FaGlobeEurope } from 'react-icons/fa'
import { RiKeyboardBoxFill } from 'react-icons/ri'
import CDlogo from '../../Assets/cd-nav-logo.svg';
import Vlogo from '../../Assets/v_logo_full_black.svg'
import "./header.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    return (
        <>
            <header className='wg-header '>
                <div>
                    <a href=''>
                        <img src={CDlogo} alt="cd" style={{ height: "35px" }} />
                    </a>
                </div>
                <div>
                    <Menu mode="horizontal" className='menu-section' defaultSelectedKeys={['mail']}>
                    <Menu mode="horizontal" className='menu-section' >
                            <Menu.SubMenu key="SubMenu" title="Career ">
                                <Menu.Item key="five" icon={<FaSchool />} >
                                <span><NavLink to='/after10'  >After 10th</NavLink></span>
                                </Menu.Item>
                                <Menu.Item key="six" icon={<FaGlobeEurope />} >
                                <span><NavLink to='/studyabroad'  >Study Abroad</NavLink></span>
                                </Menu.Item>
                                <Menu.Item key="seven" icon={<AiFillContacts />} >
                                    Portfolio Management
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                        <Menu mode="horizontal" className='menu-section'>
                            <Menu.SubMenu key="SubMenu" title="Language Classes">
                                <Menu.Item key="two" >
                                French Language
                                </Menu.Item>
                                <Menu.Item key="three" >
                                    IELTS
                                </Menu.Item>
                                <Menu.Item key="four" >
                                    English
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                        <Menu mode="horizontal" className='menu-section'>
                            <Menu.SubMenu key="SubMenu" className='menu-section' title="Exams">
                            </Menu.SubMenu>
                        </Menu>
                        
                       
                       
                        <Menu mode="horizontal" className='menu-section'>
                            <Menu.SubMenu key="SubMenu" title="More">
                                <Menu.Item key="eight" icon={<AiTwotoneMedicineBox />} >
                                    We Are Hiring
                                </Menu.Item>
                                <Menu.Item key="nine" icon={<AiTwotonePhone />} >
                                    Contuct Us
                                </Menu.Item>
                                <Menu.Item key="ten" icon={<RiKeyboardBoxFill />} >
                                    Our Branches
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                        <a href='https://vistaar.careerdose.com" target="_blank'>
                            <img src={Vlogo} alt="vd" height="20px" />
                        </a>
                    </Menu>
                </div>
            </header>
        </>
    )
}
export default Header