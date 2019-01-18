/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ProductBanner from '../global/ProductBanner';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class VASCatalog extends Component {
    componentDidMount() {
    }

    render() {
        let props = {
            imgSrc: process.env.PUBLIC_URL +"/img/produk-sms-push.png",
            from: 'product',
        }
        return (
            <div className="VAS">
                <ScrollToTopOnMount/>
                <ProductBanner {...props} />

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/products">Products</Link> \ <span className="navigation-detail">VAS Catalog</span></p>
                </div>

                <div className="container product-detail-container">
                    <div className="row">
                        <div className="col-md-9 order-md-1 product-detail-text">
                            <p className="text-header">VAS Catalog</p>
                            <p>VAS API catalog provide catalog of Indosat VAS product including its subscription management. Leverage your service by adding subscription to thousands Indosat Ooredoo value added services.</p>
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
                                        <span className="benefit-item-text">Digital Marketplace</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Enhance your marketplace by showing Indosat Ooredoo value added services catalogue and get additional revenue for each subscription.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Subscription Management</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Enhance your user experience by enabling them to manage their Indosat Ooredoo value added service subscription from your app.</span>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">2FA Login, OTP</span><br/>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Order confirmation</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Order status/tracking</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6 no-padding">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Virtual gift/discount/coupon</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
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
                            {/*<th scope="row"><img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} /></th>*/}
                            {/*<td>Selling Indosat VAS product</td>*/}
                            {/*<td>VAS API catalog provide catalog of Indosat VAS product including its subscription management</td>*/}
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
                                <a className="nav-link active" id="sms-notification-tab" data-toggle="tab" href="#sms-notification" role="tab" aria-controls="sms-notification" aria-selected="true">VAS Product Subscription</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                            <div className="tab-pane fade show active" id="sms-notification" role="tabpanel" aria-labelledby="sms-notification-tab">
                                <div className="row product-tab-content align-items-center">
                                    <div className="col-md-3 order-md-1">
                                        <img className="img-fluid product-tab-img" src={process.env.PUBLIC_URL + "/img/VAS.png"}/>
                                    </div>
                                    <div className="col-md-9 order-md-2 product-use-case-detail">
                                        <div className="row">
                                            <p className="product-use-case-text">VAS API catalog provide catalog of Indosat VAS product including its subscription management.</p>
                                        </div>
                                        <div className="row">
                                            <Link to="/use-cases/vas-product-subscription"><button type="button" className="btn button-divider product-use-case-button">Detail</button></Link>
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

export default VASCatalog;
