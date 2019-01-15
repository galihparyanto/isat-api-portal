/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ProductBanner from '../global/ProductBanner';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class SMS extends Component {
    componentDidMount() {
    }

    render() {
        let props = {
            imgSrc: process.env.PUBLIC_URL + "/img/produk-sms-push.png",
            from: 'product',
        }
        return (
            <div className="SMS">
                <ScrollToTopOnMount/>
                <ProductBanner {...props} />

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/products">Products</Link> \ <span className="navigation-detail">SMS Push</span></p>
                </div>

                <div className="container product-detail-container">
                    <div className="row">
                        <div className="col-md-9 order-md-1 product-detail-text">
                            <p className="text-header">SMS Push</p>
                            <p>SMS Push is used to send text messages to mobile phones. The messages can typically be up to 160 characters in length. Reach your customer through something they have and communicate with our real-time short messaging services.</p>
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
                                        <span>Authenticate your user using something your user have by sending message to their mobile phone.</span>
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
                                        <span>Add security layer prior to transaction by sending confirmation to user’s mobile phone.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Virtual Gift</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Delight your user by sending virtual discount code and directly save it to your user’s mobile phone number for improving their experience.</span>
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
                                        <span>Never let your user miss important information by sending real-time message.</span>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Alert</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Arrivals/check in/schedule change</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Important information</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Renewal/Upgrade info</span>*/}
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
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} /></th>*/}
                            {/*<td>Authentication Layer</td>*/}
                            {/*<td>Authenticate your user using something your user have by sending message to their mobile phone</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} /></th>*/}
                            {/*<td>Transaction Confirmation</td>*/}
                            {/*<td>Add security layer prior to transaction by sending confirmation to user’s mobile phone</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} /></th>*/}
                            {/*<td>Virtual Gift</td>*/}
                            {/*<td>Delight your user by sending virtual discount code and directly save it to your user’s mobile phone number for improving their experience</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} /></th>*/}
                            {/*<td>Important Information Notification</td>*/}
                            {/*<td>Never let your user miss important information by sending real-time message</td>*/}
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
                                <a className="nav-link active" id="sms-notification-tab" data-toggle="tab" href="#sms-notification" role="tab" aria-controls="sms-notification" aria-selected="true">SMS Push Notification</a>
                            </li>
                            <li className="col-md-3 nav-item">
                                <a className="nav-link" id="mobile-number-verification-tab" data-toggle="tab" href="#mobile-number-verification" role="tab" aria-controls="mobile-number-verification" aria-selected="false">SMS Push Authentication</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                            <div className="tab-pane fade show active" id="sms-notification" role="tabpanel" aria-labelledby="sms-notification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/SMS Notifications - Large.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">SMS Notifications are text messages sent in response to events or transactions.</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/sms-notification"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
                                            <Link><button type="button" className="btn product-use-case-button">Documentation</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="mobile-number-verification" role="tabpanel" aria-labelledby="mobile-number-verification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/Mobile Number Verifications - Large.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">Connect each user with their valid mobile number via SMS and use it as a trust anchor for authentication & communication throughout the account lifecycle.</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/sms-authentication"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
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

export default SMS;
