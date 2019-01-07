/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class MobileNumberVerification extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="MobileNumberVerification">
                <ScrollToTopOnMount/>
                <div className="container">
                    <div className="navigation">
                        <p>Home \ Use Case \ <span className="navigation-detail">SMS Notification</span></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row use-case-detail">
                        <div className="col-md-4 order-md-1">
                            <img className="img-fluid product-detail-img mx-auto" src={process.env.PUBLIC_URL + "./img/SMS%20Notification%20-%20Large.png"}/>
                        </div>
                        <div className="col-md-8 order-md-2 product-detail-text">
                            <p className="text-header">SMS Notification</p>
                            <p>SMS Notifications are text messages sent in response to events or transactions.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray no-margin">
                    <div className="text-header text-product text-center">Kelebihan</div>
                    <div className="benefit-items">
                        <div className="row benefit-item">
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>
                            </div>
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque vitae tempus quam pellentesque nec nam aliquam</span>
                            </div>
                        </div>
                        <div className="row benefit-item">
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque convallis a cras semper</span>
                            </div>
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque convallis a cras semper</span>
                            </div>
                        </div>
                        <div className="row benefit-item">
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">consequat id porta nibh venenatis cras</span>
                            </div>
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">consequat id porta nibh venenatis cras</span>
                            </div>
                        </div>
                        <div className="row benefit-item">
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>
                            </div>
                            <div className="col-md-6 no-padding">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/checklist.png"} />
                                <span className="benefit-item-text">neque vitae tempus quam pellentesque  aliquam</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container use-case-container">
                    <div className="text-product text-header text-center">Industries</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/chemical.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Chemical</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/chemical.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Chemical</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/chemical.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Chemical</span>
                                </div>
                            </div>
                            <div className="row industries-item">
                                <div className="col-md-3 no-padding">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "./img/agriculture.png"}/>
                                </div>
                                <div className="col-md-9 d-flex align-items-center no-padding">
                                    <span>Agriculture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray no-margin">
                    <div className="text-product text-header text-center">Cara Kerja</div>
                    <div className="row">
                        <img className="img-fluid use-case-step-img mx-auto" src={process.env.PUBLIC_URL + "./img/use-case-step.png"}/>
                    </div>
                    <div className="use-case-step-button row d-flex justify-content-center">
                        <div className="col-md-2 d-flex justify-content-center">
                            <button className="custom-button" type="button">Dokumentasi</button>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                            <button className="custom-button" type="button">Harga</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileNumberVerification;
