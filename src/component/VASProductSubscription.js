/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class VASProductSubscription extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="VASProductSubscription">
                <ScrollToTopOnMount/>
                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/use-cases">Use Case</Link> \ <span className="navigation-detail">VAS Product Subscription</span></p>
                </div>

                <div className="container use-case-detail">
                    <div className="row">
                        <div className="col-md-3 order-md-1 no-padding d-flex align-items-center">
                            <img className="use-case-detail-img" src={process.env.PUBLIC_URL + "/img/VAS.png"}/>
                        </div>
                        <div className="col-md-9 order-md-2 product-detail-text">
                            <p className="text-header">VAS Product Subscription</p>
                            <p>Enhance your marketplace by showing Indosat Ooredoo value added services catalogue and get additional revenue for each subscription. Enhance your user experience by enabling them to manage their Indosat Ooredoo value added service subscription from your app.</p>
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
                                        <span className="benefit-item-text">Selling Indosat Ooredoo’s VAS product.</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>VAS API catalog provide catalog of Indosat Ooredoo VAS product including its subscription management.</span>
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
                            {/*<span className="benefit-item-text">Selling Indosat VAS product</span>*/}
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
                        </div>
                        <div className="col-md-4">
                            <div className="row industries-item d-flex justify-content-center">
                                <div className="col-md-2 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/e-commerce.png"}/>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span>E-Commerce</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray">
                    <div className="text-product text-header text-center">Work Flow</div>
                    <div className="row">
                        <img className="img-fluid use-case-step-img mx-auto" src={process.env.PUBLIC_URL + "/img/vas-product-subscription-step.png"}/>
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

export default VASProductSubscription;
