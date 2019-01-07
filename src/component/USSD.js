/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class USSD extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="USSD">
                <ScrollToTopOnMount/>
                <div className="product-banner">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/produk-sms-push.png"} alt="Product Detail"/>
                    <div className="product-banner-container">
                        <p className="product-banner-text-1">Better Experience For Your Customer</p>
                        <p className="product-banner-text-2">Rapid Idea Execution For Your Business</p>
                        <div className="product-banner-button">
                            <button className="btn d-flex justify-content-center banner-button" type="button">Try It</button>
                            <button className="btn banner-button" type="button">Contact Us</button>
                        </div>
                    </div>
                </div>

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/products">Products</Link> \ <span className="navigation-detail">USSD Push</span></p>
                </div>
                
                <div className="container product-detail-container">
                    <div className="row">
                        <div className="col-md-9 order-md-1 product-detail-text">
                            <p className="text-header">USSD Push</p>
                            <p>The notification is pushed in real time to the cell phone and “pop up” automatically, without the user having to dial the number. Focus your customer attention to your message by delivering it using our USSD real-time pop-up message.</p>
                        </div>
                        <div className="col-md-3 order-md-2 d-flex justify-content-center">
                            <img className="product-detail-img" src={process.env.PUBLIC_URL + "/img/sms-detail.png"}/>
                        </div>
                    </div>
                </div>

                <div className="bg-gray no-margin">
                    <div className="container product-detail-container">
                        <div className="text-header text-product text-benefit">Used For</div>
                        <div className="benefit-items">
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Authentication Layer</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Improve your user experience when authenticate to your service by sending real-time pop up message on their mobile phone</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Transaction Confirmation</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Add security layer prior to transaction and ensure your user attention of it by sending pop-up confirmation to their mobile phone</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Important Information Notification</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Never let your user miss important information by sending real-time pop-up message</span>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque convallis a cras semper</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque convallis a cras semper</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">consequat id porta nibh venenatis cras</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">consequat id porta nibh venenatis cras</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<table class="table table-striped">*/}
                            {/*<thead>*/}
                            {/*<tr>*/}
                            {/*<th scope="col"></th>*/}
                            {/*<th scope="col">Used For</th>*/}
                            {/*<th scope="col">Description</th>*/}
                            {/*</tr>*/}
                            {/*</thead>*/}
                            {/*<tbody>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} /></th>*/}
                            {/*<td>2FA Login, OTP</td>*/}
                            {/*<td>Adding a second authentication method in addition to your login password</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} /></th>*/}
                            {/*<td>Alert</td>*/}
                            {/*<td>Automatically notify your customers based on account activity when a deposit is made or a threshold is reached </td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} /></th>*/}
                            {/*<td>Order confirmation</td>*/}
                            {/*<td>Let you know when your customer have received their order or request</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} /></th>*/}
                            {/*<td>Order status/tracking</td>*/}
                            {/*<td>Include a URL to track an order and let your customers know when they can expect to have it delivered</td>*/}
                            {/*</tr>*/}
                            {/*</tbody>*/}
                            {/*</table>*/}
                        </div>
                    </div>
                </div>

                <div className="container product-detail-container">
                    <div className="row">
                        <span className="text-product text-header">Use Case</span>
                    </div>
                    {/*<div className="row">*/}
                        {/*<p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn’t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>*/}
                    {/*</div>*/}
                    <div className="row">
                        <ul className="nav nav-tabs product-tab" id="productTab" role="tablist">
                            <li className="col-md-3 nav-item">
                                <a className="nav-link active" id="sms-notification-tab" data-toggle="tab" href="#sms-notification" role="tab" aria-controls="sms-notification" aria-selected="true">USSD Push Notification</a>
                            </li>
                            <li className="col-md-3 nav-item">
                                <a className="nav-link" id="mobile-number-verification-tab" data-toggle="tab" href="#mobile-number-verification" role="tab" aria-controls="mobile-number-verification" aria-selected="false">USSD Push Authentication</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                            <div className="tab-pane fade show active" id="sms-notification" role="tabpanel" aria-labelledby="sms-notification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/SMS%20Notification%20-%20Large.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">The notification is pushed in real time to the cell phone and “pop up” automatically, without the user having to dial the number</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/ussd-notification"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
                                            <Link><button type="button" className="btn product-use-case-button">Documentation</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="mobile-number-verification" role="tabpanel" aria-labelledby="mobile-number-verification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/SMS%20Notification%20-%20Large.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">Improve your user experience when authenticate to your service by sending real-time pop up message on their mobile phone</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/ussd-authentication"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
                                            <Link><button type="button" className="btn product-use-case-button">Documentation</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default USSD;
