/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class GiftData extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="GiftData">
                <ScrollToTopOnMount/>
                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <Link className="navigation-link" to="/use-cases">Use Case</Link> \ <span className="navigation-detail">Gift Data</span></p>
                </div>

                <div className="container use-case-detail">
                    <div className="row">
                        <div className="col-md-3 order-md-1 no-padding d-flex align-items-center">
                            <img className="use-case-detail-img" src={process.env.PUBLIC_URL + "/img/SMS%20Notification%20-%20Large.png"}/>
                        </div>
                        <div className="col-md-9 order-md-2 product-detail-text">
                            <p className="text-header">Gift Data</p>
                            <p>You can easily send Gift Data to your customers as a marketing gimmick (Activation, Trial and Retention). Our Gift Data Rewards as a Service API can combined with your products to help increase the marketing of your products and grow your business.</p>
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
                                        <span className="benefit-item-text">Activation Gimmick</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Give users back data used to install Merchant’s app. Install app using mobile data and get data rewarded back</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Trial Gimmick</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Give new/existing users back data used to engage with merchant’s app. Use mobile data for an app and get data used rewarded back</span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-row">
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/arrow.png"} />
                                    </div>
                                    <div className="col-md-6 no-padding">
                                        <span className="benefit-item-text">Retention Gimmick</span>
                                    </div>
                                </div>
                                <div className="row benefit-item">
                                    <div className="col-md-1 arrow-icon no-padding">
                                    </div>
                                    <div className="col-md-11 no-padding">
                                        <span>Data reward as a general incentive to reward the right action. Earn data rewards for doing actions with merchant app. Increase in key engagement moments</span>
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
                            {/*<span className="benefit-item-text">Give users back data used to install Merchant’s app</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-12 offset-2">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Give new/existing users back data used to engage with merchant’s app</span>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row benefit-item">*/}
                            {/*<div className="col-md-12 offset-2">*/}
                            {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/checklist.png"} />*/}
                            {/*<span className="benefit-item-text">Digital reward as a general incentive to reward the right action</span>*/}
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
                        <img className="img-fluid use-case-step-img mx-auto" src={process.env.PUBLIC_URL + "/img/gift-data-step.png"}/>
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

export default GiftData;
