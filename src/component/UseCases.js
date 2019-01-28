/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';
import ProductBanner from '../global/ProductBanner';


class UseCases extends Component {
    componentDidMount() {
    }

    render() {
        let props = {
            imgSrc: process.env.PUBLIC_URL + "/img/banner-use-cases.png",
            from: 'usecase',
        }
        return (
            <div className="UseCases">
                <ScrollToTopOnMount/>
                <ProductBanner {...props} />

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <span className="navigation-detail">Use Case</span></p>
                </div>

                <div className="container product-detail">
                    {/*<div className="product-detail-text">*/}
                        {/*<p className="text-header text-center">Use Case</p>*/}
                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-md-3 use-case-item">
                            <div className="row use-case-title-panel">
                                <div className="col-md-3 d-flex align-items-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS%20Notification.png"} />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="/use-cases/sms-notification"><span className="use-case-title">SMS Push Notification</span></Link>
                                </div>
                            </div>
                            <div className="row use-case-description-panel">
                                <span className="use-case-description">SMS Notifications are text messages sent in response to events or transactions.</span>
                            </div>
                            <div className="row detail-link-panel">
                                <Link to="/use-cases/sms-notification"><span className="detail-text-link">Detail >></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3 use-case-item">
                            <div className="row use-case-title-panel">
                                <div className="col-md-3 d-flex align-items-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Mobile%20Number%20Verification.png"} />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="/use-cases/sms-authentication"><span className="use-case-title">SMS Push Authentication</span></Link>
                                </div>
                            </div>
                            <div className="row use-case-description-panel">
                                <span className="use-case-description">Connect each user with their valid mobile number via SMS and use it as a trust anchor for authentication & communication throughout the account lifecycle.</span>
                            </div>
                            <div className="row detail-link-panel">
                                <Link to="/use-cases/sms-authentication"><span className="detail-text-link">Detail >></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3 use-case-item">
                            <div className="row use-case-title-panel">
                                <div className="col-md-3  d-flex align-items-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD%20Push%20Notification.png"} />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="/use-cases/ussd-authentication"><span className="use-case-title">USSD Push Authentication</span></Link>
                                </div>
                            </div>
                            <div className="row use-case-description-panel">
                                <span className="use-case-description">Improve your user experience when authenticate to your service by sending real-time pop up message on their mobile phone.</span>
                            </div>
                            <div className="row detail-link-panel">
                                <Link to="/use-cases/ussd-authentication"><span className="detail-text-link">Detail >></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 use-case-item">
                            <div className="row use-case-title-panel">
                                <div className="col-md-3 d-flex align-items-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/USSD%20Push%20Notification.png"} />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="/use-cases/ussd-notification"><span className="use-case-title">USSD Push Notification</span></Link>
                                </div>
                            </div>
                            <div className="row use-case-description-panel">
                                <span className="use-case-description">The notification is pushed in real time to the cell phone and “pop up” automatically, without the user having to dial the number.</span>
                            </div>
                            <div className="row detail-link-panel">
                                <Link to="/use-cases/ussd-notification"><span className="detail-text-link">Detail >></span></Link>
                            </div>
                        </div>
                        <div className="col-md-3 use-case-item">
                            <div className="row use-case-title-panel">
                                <div className="col-md-3 d-flex align-items-center">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Gift%20Data.png"} />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="/use-cases/gift-data"><span className="use-case-title">Gift Data</span></Link>
                                </div>
                            </div>
                            <div className="row use-case-description-panel">
                                <span className="use-case-description">Send digital rewards in the form of data quota to your customer as a marketing gimmick to grow your business.</span>
                            </div>
                            <div className="row detail-link-panel">
                                <Link to="/use-cases/gift-data"><span className="detail-text-link">Detail >></span></Link>
                            </div>
                        </div>
                        {/*<div className="col-md-3 use-case-item">*/}
                            {/*<div className="row use-case-title-panel">*/}
                                {/*<div className="col-md-3  d-flex align-items-center">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/VAS.png"} />*/}
                                {/*</div>*/}
                                {/*<div className="col-md-9 d-flex align-items-center">*/}
                                    {/*<Link to="/use-cases/vas-product-subscription"><span className="use-case-title">VAS Product Subscription</span></Link>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row use-case-description-panel">*/}
                                {/*<span className="use-case-description">VAS API catalog provide catalog of Indosat VAS product including its subscription management.</span>*/}
                            {/*</div>*/}
                            {/*<div className="row detail-link-panel">*/}
                                {/*<Link to="/use-cases/vas-product-subscription"><span className="detail-text-link">Detail >></span></Link>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className="row">*/}
                        {/*<div className="col-md-3 use-case-item">*/}
                            {/*<div className="row use-case-title-panel">*/}
                                {/*<div className="col-md-3 d-flex align-items-center">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS%20Notification.png"} />*/}
                                {/*</div>*/}
                                {/*<div className="col-md-9 d-flex align-items-center">*/}
                                    {/*<span className="use-case-title">SMS Notification</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row use-case-description-panel">*/}
                                {/*<span className="use-case-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 use-case-item">*/}
                            {/*<div className="row use-case-title-panel">*/}
                                {/*<div className="col-md-3 d-flex align-items-center">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/Mobile%20Number%20Verification.png"} />*/}
                                {/*</div>*/}
                                {/*<div className="col-md-9 d-flex align-items-center">*/}
                                    {/*<span className="use-case-title">Mobile Number Verification</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row use-case-description-panel">*/}
                                {/*<span className="use-case-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 use-case-item">*/}
                            {/*<div className="row use-case-title-panel">*/}
                                {/*<div className="col-md-3  d-flex align-items-center">*/}
                                    {/*<img className="img-fluid" src={process.env.PUBLIC_URL + "/img/SMS%20Bulk.png"} />*/}
                                {/*</div>*/}
                                {/*<div className="col-md-9 d-flex align-items-center">*/}
                                    {/*<span className="use-case-title">SMS Bulk</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="row use-case-description-panel">*/}
                                {/*<span className="use-case-description">LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default UseCases;
