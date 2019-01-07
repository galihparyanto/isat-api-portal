/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {reload : false};
    }

    componentWillReceiveProps(nextProps) {
        alert(nextProps.reload);
    }

    componentDidMount() {
        // if (this.props.children !== prevProps.children) {
        //     window.location.reload(false);
        // }

        $(document).on('click', '.mega-dropdown', function(e) {
            e.stopPropagation()
        });

        $(document).ready(function(){
            $('.dropdown').hover(
                function() { $('.dropdown-menu', this).fadeIn("fast");
                },
                function() { $('.dropdown-menu', this).fadeOut("fast");
                }
            );
        });

        // $('#productCarousel').on('slide.bs.carousel', function (e) {
        //
        //     var $e = $(e.relatedTarget);
        //     var idx = $e.index();
        //     var itemsPerSlide = 3;
        //     var totalItems = $('.product .carousel-item').length;
        //
        //     if (idx >= totalItems-(itemsPerSlide-1)) {
        //         var it = itemsPerSlide - (totalItems - idx);
        //         for (var i=0; i<it; i++) {
        //             // append slides to end
        //             if (e.direction==="left") {
        //                 $('.product .carousel-item').eq(i).appendTo('.product .carousel-inner');
        //                 console.log(e);
        //                 // alert(e);
        //             }
        //             else if(e.direction==="right") {
        //                 $('.product .carousel-item').eq(0).appendTo('.product .carousel-inner');
        //                 console.log(e);
        //                 // alert(e);
        //             }
        //         }
        //     }
        // });
        //
        $('#productCarousel').carousel({
            interval: false
        });
        //
        // $('#myCarousel').carousel({
        //     interval: false
        // });
    }

    render() {
        return (
            <div className="Home">
                <ScrollToTopOnMount/>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide" src={process.env.PUBLIC_URL + "/img/home-banner.png"} alt="First slide"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="second-slide" src={process.env.PUBLIC_URL + "/img/API-Onboard-Instantly.jpg"} alt="Second slide"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="third-slide" src={process.env.PUBLIC_URL + "/img/API-Win-the-race.jpg"} alt="Third slide"/>
                            <div className="container">
                                <div className="carousel-caption text-right">
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="slogan-row row">
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">All in One</span>
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">Many Benefit</span>
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">Straightforward</span>
                    </div>
                </div>

                <div className="container step-growth-container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="text-one">Grow Your Business</span>
                        </div>
                    </div>
                    <div className="row">
                        <img className="step-growth-img mx-auto" src={process.env.PUBLIC_URL + "/img/step-API-new.png"} alt="Step Growth"/>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            Improve your service by integrating to our wide range-of-products. Grow by reaching Indosat Ooredoo’s customer base and speed up your service innovation. Delight your customer with better user experience by allowing your system to seamlessly communicate with your customer. Get insight about your customers and personalize your service based on their needs.
                        </div>
                    </div>

                    <hr className="featurette-divider"/>

                    <div className="row">
                        <div className="col-md-4 order-md-1 ml-auto d-flex align-items-center">
                            <img className="img-fluid benefit-img" src={process.env.PUBLIC_URL + "/img/tree-grow-2.jpg"} alt="Benefit"/>
                        </div>
                        <div className="col-md-8 order-md-2">
                            <p className="text-header">Why Connecting with Us?</p>
                            <p>As a leading digital telecommunication service provider in Indonesia, Indosat Ooredoo has a commitment to nurture Indonesia’s digital business. By exposing open APIs of our assets and services, we support startup companies and agile enterprises to enhance their customer experience and quickly adapt to change they need to be survived in the market.</p>
                            <p>In our platform, we provide easy-to-use APIs with various business scheme which are suitable not only for enterprises but also for growing startup companies. We also committed to enhance our services by providing out-of-the-box solution across most major industries to ensure rapid service improvement and eliminate the technical detail burden.</p>
                            {/*<p className="no-margin">Partnership with us is just a simple clicks away. You just need to register through our website, choose any business scheme which is convenient for you, and simply consuming our APIs. Using prepaid mechanism, you only paying what you use. You can manage your subscription using our dashboard and grow your subscription based on your usage</p>*/}
                        </div>
                    </div>
                </div>

                <div className="bg-gray">
                    <div className="container step-growth-container ">
                        <div className="text-header text-product text-center">Our Products</div>
                        <div className="row no-gutter">
                            <div className="col-md-12">
                                {/*<div id="productCarousel" className="product carousel slide" data-ride="carousel">*/}
                                <div className="product carousel slide">
                                    {/*<ol className="carousel-indicators product-carousel-indicators">*/}
                                    {/*<li data-target="#productCarousel" data-slide-to="0" className="active"></li>*/}
                                    {/*<li data-target="#productCarousel" data-slide-to="1" className=""></li>*/}
                                    {/*<li data-target="#productCarousel" data-slide-to="2" className=""></li>*/}
                                    {/*<li data-target="#productCarousel" data-slide-to="3" className=""></li>*/}
                                    {/*</ol>*/}
                                    <div className="carousel-inner row mx-auto" role="listbox">
                                        <div className="product-item carousel-item col-md-4 bg-white active">
                                            <div className="panel">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS-top-rounded.png"} alt="SMS"/>
                                                <a className="product-link" href="#"><p className="product-link-text text-center">SMS</p></a>
                                                <p className="product-desc">Reach your customer through something they have and communicate with our real-time short messaging services.</p>
                                            </div>
                                            <div className="product-container">
                                                <Link className="" to="/products/sms"><button type="button" className="btn product-button">See Detail</button></Link>
                                            </div>
                                        </div>
                                        <div className="product-item carousel-item col-md-4 bg-white">
                                            <div className="panel">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD-top-rounded.png"} alt="USSD"/>
                                                <a className="product-link" href="#"><p className="product-link-text text-center">USSD</p></a>
                                                <p className="product-desc">Focus your customer attention to your message by delivering it using our USSD real-time pop-up message.</p>
                                            </div>
                                            <div className="product-container">
                                                <Link to="/products/ussd"><button type="button" className="btn product-button">See Detail</button></Link>
                                            </div>
                                        </div>
                                        <div className="product-item carousel-item col-md-4 bg-white">
                                            <div className="panel">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Reward-top-rounded.png"} alt="Digital Reward"/>
                                                <a className="product-link" href="#"><p className="product-link-text text-center">Digital Reward</p></a>
                                                <p className="product-desc">Send digital rewards in the form of data/SMS/voice quota to your customer as a marketing gimmick to grow your business.</p>
                                            </div>
                                            <div className="product-container">
                                                <Link to="/products/digital-reward"><button type="button" className="btn product-button">See Detail</button></Link>
                                            </div>
                                        </div>
                                        {/*<div className="product-item carousel-item col-md-4 bg-white">*/}
                                        {/*<div className="panel">*/}
                                        {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Reward-top-rounded.png"} alt="VAS Catalog"/>*/}
                                        {/*<a className="product-link" href="#"><p className="product-link-text text-center">VAS Catalog</p></a>*/}
                                        {/*<p className="product-desc">VAS API catalog provide catalog of Indosat VAS product including its subscription management</p>*/}
                                        {/*<div className="d-flex justify-content-center product-container">*/}
                                        {/*<button type="button" className="btn product-button"><Link to="/products/vas-catalog">See Detail</Link></button>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                    </div>
                                    {/*<a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">*/}
                                    {/*<span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                                    {/*<span className="sr-only">Previous</span>*/}
                                    {/*</a>*/}
                                    {/*<a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">*/}
                                    {/*<span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                                    {/*<span className="sr-only">Next</span>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
