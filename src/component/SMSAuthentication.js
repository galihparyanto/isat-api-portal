/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class SMSAuthentication extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="SMSAuthentication">
                <ScrollToTopOnMount/>
                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/use-cases">Use Case</Link> \ <span className="navigation-detail">SMS Push Authentication</span></p>
                </div>

                <div className="container use-case-detail">
                    <div className="row">
                        <div className="col-md-3 order-md-1 no-padding d-flex align-items-center">
                            <img className="use-case-detail-img" src={process.env.PUBLIC_URL + "/img/Mobile Number Verifications - Large.png"}/>
                        </div>
                        <div className="col-md-9 order-md-2 product-detail-text">
                            <p className="text-header">SMS Push Authentication</p>
                            <p>Add security layer prior to transaction by sending confirmation/Authentication to user’s mobile phone. Connect each user with their valid mobile number via SMS Push and use it as a trust anchor for authentication & communication throughout the account lifecycle.</p>
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
                                        <span className="benefit-item-text">One time Password</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Secure a digital transaction (digital service login, payment, etc.) by delivering a one-time, unique 6-digit code (OTP) via SMS push notification.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Secure 2FA Login</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Use a second channel (out-of-band authentication) to further secure access to a sensitive IT system.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Out-of-Band Authentication</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Use a second channel (out-of-band authentication) to authorize a sensitive digital transaction (funds transfer, online purchase, etc.).</span>
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
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/hotel.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>Hotel & Travel</span>
                                </div>
                            </div>
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/bank.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>Banking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray">
                    <div className="text-product text-header text-center">Work Flow</div>
                    <div className="row">
                        <img className="img-fluid sms-authentication-step-img mx-auto" src={process.env.PUBLIC_URL + "/img/sms-authentication-step.png"}/>
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

export default SMSAuthentication;