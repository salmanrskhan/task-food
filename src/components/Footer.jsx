import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logoImg from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <span className="logo_name">Food</span>
                    </div>
                    <div className="media-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">My account</a></li>
                        <li><a href="#">Prefrences</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Courses</li>
                        <li><a href="#">HTML & CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">Angular</a></li>
                        <li><a href="#">React</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">©<a href="#">Blink Commerce Private Limited</a>, 2016-2024</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer