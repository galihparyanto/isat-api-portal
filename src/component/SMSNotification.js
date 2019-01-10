/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class SMSNotification extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="SMSNotification">
                <ScrollToTopOnMount/>
                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/use-cases">Use Case</Link> \ <span className="navigation-detail">SMS Push Notification</span></p>
                </div>

                <div className="container use-case-detail">
                    <div className="row">
                        <div className="col-md-3 order-md-1 no-padding d-flex align-items-center">
                            <img className="use-case-detail-img" src={process.env.PUBLIC_URL + "/img/SMS Notifications - Large.png"}/>
                        </div>
                        <div className="col-md-9 order-md-2 product-detail-text">
                            <p className="text-header">SMS Push Notification</p>
                            <p>Send your message through 1-way SMS Push to millions of Indosat Ooredo’s subscribers. Use SMS Push Notification to notify and instantly reach your customers. Program your SMS based on your needs and pay only for what you use.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray">
                    <div className="container use-case-detail">
                        <div className="text-header text-product text-center">Used For</div>
                        <div className="benefit-items">
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Order confirmation</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>User can track all the order without customer support effort and automatically system will send info to customer while the order has been proceed or has been arrived</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Important information</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Notify your customers for important information (Arrivals, Check in, Schedule change, Deposit threshold, Renewal/Upgrade info, etc.) by sending real-time text message</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Virtual discount/ Coupon</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Gift your customers for special discount or voucher as SMS Push Notification</span>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque convallis a cras semper</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque convallis a cras semper</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">consequat id porta nibh venenatis cras</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">consequat id porta nibh venenatis cras</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-12 offset-2">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Add security layer prior to transaction/login by sending confirmation to user’s mobile phone</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <div className="container use-case-detail">
                    <div className="text-product text-header text-center">Industries</div>
                    <div className="row mx-auto d-flex justify-content-center">
                        <div className="col-md-4">
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/transportation.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>OTT Transportation</span>
                                </div>
                            </div>
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/e-commerce.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>E-Commerce</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/bank.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>Banking</span>
                                </div>
                            </div>
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/hotel.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>Hotel & Travel</span>
                                </div>
                            </div>
                            {/*<div className="row industries-item d-flex justify-content-center">*/}
                                {/*<div className="col-md-2 no-padding">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/hospital.png"}/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-6 d-flex align-items-center">*/}
                                    {/*<span>Hospital</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row industries-item d-flex justify-content-center">*/}
                                {/*<div className="col-md-2 no-padding">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/advertising.png"}/>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-6 d-flex align-items-center">*/}
                                    {/*<span>Education</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <div className="bg-gray">
                    <div className="text-product text-header text-center">Work Flow</div>
                    <div className="row">
                        <img className="img-fluid use-case-step-img mx-auto" src={process.env.PUBLIC_URL + "/img/sms-notification-step.png"}/>
                    </div>
                    {/*<div className="use-case-step-button row d-flex justify-content-center">*/}
                        {/*<div className="col-md-2 d-flex justify-content-center">*/}
                            {/*<button className="custom-button" type="button">Dokumentasi</button>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-2 d-flex justify-content-center">*/}
                            {/*<button className="custom-button" type="button">Harga</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default SMSNotification;