/**
 * Created by galihparyanto on 06/01/19.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class ContactUs extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="Terms">
                <ScrollToTopOnMount/>
                <div className="product-banner">
                    <img className="terms-img" src={process.env.PUBLIC_URL + "/img/banner-use-cases.png"} alt="Product Detail"/>
                </div>
                

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <span className="navigation-detail">Contact Us</span></p>
                </div>

                <div className="container contact-us-container">
                    <p className="text-header">CONTACT US</p>
                    <div className="row contact-us-content align-items-center">
                        <div className="col-md-3 order-md-1">
                            <img className="product-tab-img" src={process.env.PUBLIC_URL + "/img/mail.png"}/>
                        </div>
                        <div className="col-md-9 order-md-2">
                            <p className="contact-us-text">Have any questions?</p>
                            <p>Please don't hesitate to contact our expert team by emailing to<br/> <a className="contact-us-text" href="mailto:APISales@indosatooredoo.com">APISales@indosatooredoo.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;

