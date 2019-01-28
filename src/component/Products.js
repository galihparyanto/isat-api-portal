/**
 * Created by galihparyanto on 29/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import Slogan from '../global/Slogan';
import ProductBanner from '../global/ProductBanner';
import {Link} from 'react-router';
import ScrollToTopOnMount from '../lib/ScrollToTopOnMount';

class Products extends Component {
    componentDidMount() {
    }

    render() {
        let props = {
            imgSrc: process.env.PUBLIC_URL + "/img/produk-sms-push.png",
            from: 'product',
        }
        return (
            <div className="Products">
                <ScrollToTopOnMount/>
                <ProductBanner {...props}/>
                <Slogan />

                {/* <div className="slogan-row row">
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">All in One</span>
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">Many Benefit</span>
                    </div>
                    <div className="col-md-4 text-center">
                        <span className="slogan-text">Straightforward</span>
                    </div>
                </div> */}

                <div className="container navigation">
                    <p><Link className="navigation-link" to="/">Home</Link> \ <span className="navigation-detail">Products</span></p>
                </div>

                <div className="container product-detail">
                    {/*<div className="product-detail-text">*/}
                        {/*<p className="text-header text-center">Products</p>*/}
                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>*/}
                    {/*</div>*/}
                    <div className="row products-item">
                        <div className="col-md-4 products-item-img no-padding">
                            <img className="img-fluid products-item-img-panel" src={process.env.PUBLIC_URL + "/img/SMS.png"} />
                        </div>
                        <div className="col-md-8 product-item-detail">
                            <p className="product-item-title">SMS</p>
                            <p>SMS (short message service) is used to send text messages to mobile phones. The messages can typically be up to 160 characters in length.</p>
                            <Link to="/products/sms"><button type="button" className="btn product-detail-button">See Detail</button></Link>
                        </div>
                    </div>
                    <div className="row products-item">
                        <div className="col-md-4 products-item-img no-padding">
                            <img className="img-fluid products-item-img-panel" src={process.env.PUBLIC_URL + "/img/USSD.png"} />
                        </div>
                        <div className="col-md-8 product-item-detail">
                            <p className="product-item-title">USSD</p>
                            <p>USSD (Unstructured Supplementary Service Data). The notification is pushed in real time to the cell phone and “pop up” automatically.</p>
                            <Link to="/products/ussd"><button type="button" className="btn product-detail-button">See Detail</button></Link>
                        </div>
                    </div>
                    <div className="row products-item">
                        <div className="col-md-4 products-item-img no-padding">
                            <img className="img-fluid products-item-img-panel" src={process.env.PUBLIC_URL + "/img/Reward.png"} />
                        </div>
                        <div className="col-md-8 product-item-detail">
                            <p className="product-item-title">Digital Reward</p>
                            <p>Digital Reward helps users try new apps with data rewards, while giving opportunities for Carriers to expand new channel & developers to engage more with their users.</p>
                            <Link to="/products/digital-reward"><button type="button" className="btn product-detail-button">See Detail</button></Link>
                        </div>
                    </div>
                    {/*<div className="row products-item">*/}
                        {/*<div className="col-md-4 products-item-img no-padding">*/}
                            {/*<img className="img-fluid products-item-img-panel" src={process.env.PUBLIC_URL + "/img/VAS-catalog.jpg"} />*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8 product-item-detail">*/}
                            {/*<p className="product-item-title">VAS Catalog</p>*/}
                            {/*<p>VAS API catalog provide catalog of Indosat VAS product including its subscription management.</p>*/}
                            {/*<Link to="/products/vas-catalog"><button type="button" className="btn product-detail-button">See Detail</button></Link>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Products;
