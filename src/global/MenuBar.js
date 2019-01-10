/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';

class MenuBar extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <header className="header-container">
                <div className="navbar-divider navbar-expand-md position-fixed"></div>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">

                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid logo-img" src={process.env.PUBLIC_URL + "/img/indosat-ooredoo-developer.png"} alt="Indosat Ooredoo"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="dropdown mega-dropdown">
                                {/*<a className="nav-link" data-toggle="dropdown" href="#">Product</a>*/}
                                <Link className="nav-link" to="/products">Product</Link>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="mega-menu-item">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS.png"} alt="SMS"/>
                                                <Link className="item-link" to="/products/sms">SMS</Link>
                                                <p className="item-desc">Reach your customer through something they have and communicate with our real-time short messaging services</p>
                                                <Link className="item-link-more" to="/products"><br/>More >></Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="mega-menu-item">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD.png"} alt="USSD"/>
                                                <Link className="item-link" to="/products/ussd">USSD</Link>
                                                <p className="item-desc">Focus your customer attention to your message by delivering it using our USSD real-time pop-up message</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="mega-menu-item">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Reward.png"} alt="Digital Reward"/>
                                                <Link className="item-link" to="/products/digital-reward">Digital Reward</Link>
                                                <p className="item-desc">Send digital rewards in the form of data/SMS/voice quota to your customer as a marketing gimmick to grow your business</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown mega-dropdown">
                                {/*<a className="nav-link" data-toggle="dropdown" href="#">Use Case</a>*/}
                                <Link className="nav-link" to="/use-cases">Use Case</Link>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="dropdown-header">Notification</li>
                                            <li className="mega-menu-item">
                                                <div className="row no-gutters use-case-menu-title">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS%20Notification.png"} alt="SMS Notification"/>
                                                    </div>
                                                    <div className="col-md-7 d-flex">
                                                        <Link className="item-usecase-link" to="/use-cases/sms-notification">SMS Push Notification</Link>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters use-case-menu-desc">
                                                    <p className="item-desc">SMS Notifications are text messages sent in response to events or transactions</p>
                                                </div>
                                                <hr/>
                                            </li>
                                            <li className="mega-menu-item">
                                                <div className="row no-gutters use-case-menu-title">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD%20Push%20Notification.png"} alt="USSD Notification"/>
                                                    </div>
                                                    <div className="col-md-7 d-flex">
                                                        <Link className="item-usecase-link" to="/use-cases/ussd-notification">USSD Push Notification</Link>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters use-case-menu-desc">
                                                    <p className="item-desc">The notification is pushed in real time to the cell phone and “pop up” automatically, without the user having to dial the number</p>
                                                </div>
                                                <div className="row no-gutters">
                                                    <Link className="item-link-more" to="/use-cases"><br/>More >></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="dropdown-header">Authentication</li>
                                            <li className="mega-menu-item">
                                                <div className="row no-gutters use-case-menu-title">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Mobile%20Number%20Verification.png"} alt="Mobile Number Verification"/>
                                                    </div>
                                                    <div className="col-md-7 d-flex">
                                                        <Link className="item-usecase-link" to="/use-cases/sms-authentication">SMS Push Authentication</Link>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters use-case-menu-desc">
                                                    <p className="item-desc">Connect each user with their valid mobile number via SMS and use it as a trust anchor for authentication & communication throughout the account lifecycle</p>
                                                </div>
                                                <hr/>
                                            </li>
                                            <li className="mega-menu-item">
                                                <div className="row no-gutters use-case-menu-title">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD%20Push%20Notification.png"} alt="USSD Authentication"/>
                                                    </div>
                                                    <div className="col-md-7 d-flex">
                                                        <Link className="item-usecase-link" to="/use-cases/ussd-authentication">USSD Push Authentication</Link>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters use-case-menu-desc">
                                                    <p className="item-desc">Improve your user experience when authenticate to your service by sending real-time pop up message on their mobile phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-column">
                                        <ul>
                                            <li className="dropdown-header">Digital Reward</li>
                                            <li className="mega-menu-item">
                                                <div className="row no-gutters use-case-menu-title">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Gift%20Data.png"} alt="Gift Data"/>
                                                    </div>
                                                    <div className="col-md-7 d-flex align-items-center">
                                                        <Link className="item-usecase-link" to="/use-cases/gift-data">Gift Data</Link>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters use-case-menu-desc">
                                                    <p className="item-desc">Send digital rewards in the form of data quota to your customer as a marketing gimmick to grow your business</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*<li className="mega-menu-column">*/}
                                        {/*<ul>*/}
                                            {/*<li className="dropdown-header">VAS Product Subscription</li>*/}
                                            {/*<li className="mega-menu-item">*/}
                                                {/*<div className="row no-gutters use-case-menu-title">*/}
                                                    {/*<div className="col-md-5">*/}
                                                        {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Gift%20Data.png"} alt="Gift Data"/>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-md-7 d-flex align-items-center">*/}
                                                        {/*<Link className="item-usecase-link" to="/use-cases/gift-data">VAS Product Subscription</Link>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="row no-gutters use-case-menu-desc">*/}
                                                    {/*<p className="item-desc">VAS API catalog provide catalog of Indosat VAS product including its subscription management</p>*/}
                                                {/*</div>*/}
                                            {/*</li>*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>
                            <li className="dropdown mega-dropdown">
                                {/* <a className="nav-link" data-toggle="dropdown" href="/documentation">Documentation</a> */}
                                <Link className="nav-link" to="/documentation">Documentation</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default MenuBar;
