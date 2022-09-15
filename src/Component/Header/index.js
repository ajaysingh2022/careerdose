import React from 'react';
import { Menu } from 'antd';
import CDlogo from '../../Assets/cd-nav-logo.svg';
import './header.css';
import Vlogo from '../../Assets/v_logo_full_black.svg'



const Index = () => {
    return (
        <>
            <header className="d-flex justify-content-between">
                <div className='"logo"'>
                    <a href="/">
                        <img loading="lazy" src={CDlogo} alt="Career Dose" style={{ height: "35px" }} />
                    </a>
                </div>
                <div className="menu">
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                        <Menu.SubMenu key="SubMenu" title="Language Course" >
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
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                        <Menu.SubMenu key="SubMenu" title="Exam" >
                        </Menu.SubMenu>
                    </Menu>
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                        <Menu.SubMenu key="SubMenu" title="Career Guidance" >
                        <Menu.Item key="five" >
                                After 10th
                            </Menu.Item>
                            <Menu.Item key="six" >
                                Study Abroad
                            </Menu.Item>
                            <Menu.Item key="seven" >
                               Portfolio Management
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                        <Menu.SubMenu key="SubMenu" title="More" >
                        <Menu.Item key="eight" >
                                We are Hiring
                            </Menu.Item>
                            <Menu.Item key="nine" >
                                Contect Us
                            </Menu.Item>
                           
                        </Menu.SubMenu>
                    </Menu>
                    
                    <li class="ant-menu-item ant-menu-item-only-child" role="menuitem">
                        <a href="https://vistaar.careerdose.com" target="_blank">
                            <img loading="lazy" src={Vlogo} alt="Career Dose French Learning" height="20"/>
                            </a>
                            </li>
                </div>

            </header>


        </>
    )
}

export default Index
