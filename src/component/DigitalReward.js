/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import ProductBanner from '../global/ProductBanner';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class DigitalReward extends Component {
    componentDidMount() {
    }

    render() {
        let props = {
            imgSrc: process.env.PUBLIC_URL + "/img/produk-sms-push.png",
            from: 'product',
        }
        return (
            <div className="DigitalReward">
                <ScrollToTopOnMount/>
                <ProductBanner {...props} />

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/products">Products</Link> \ <span className="navigation-detail">Digital Reward</span></p>
                </div>
                
                <div className="container product-detail-container">
                    <div className="row">
                        <div className="col-md-9 order-md-1 product-detail-text">
                            <p className="text-header">Digital Reward</p>
                            <p>Digital Reward helps your customers to try new apps or event with data rewards, while giving opportunities for Carriers to expand new channel & developers to engage more with their users. Send digital rewards in the form of data quota to your customer as a marketing gimmick to grow your business.</p>
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
                                        <span className="benefit-item-text">Activation Tools</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Increase user activation on your service by giving data rewards when user joining your services</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Conversion Tools</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Increase join-to-trial conversion and reduce user churn by giving digital rewards when user exploring and using your services</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Retention Mechanism</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Increase user engagement by giving data rewards when user doing eligible transaction on your services</span>
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
                            {/*<td>Marketing gimmick</td>*/}
                            {/*<td>Send data awards to your customers  according to your target / criteria</td>*/}
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
                                <a className="nav-link active" id="sms-notification-tab" data-toggle="tab" href="#sms-notification" role="tab" aria-controls="sms-notification" aria-selected="true">Gift Data</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                            <div className="tab-pane fade show active" id="sms-notification" role="tabpanel" aria-labelledby="sms-notification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/Gift Data - Large.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">Send digital rewards in the form of data quota to your customer as a marketing gimmick to grow your business</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/gift-data"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
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

export default DigitalReward;
