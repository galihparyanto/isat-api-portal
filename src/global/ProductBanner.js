/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';
import { string } from 'prop-types'




const ProductBanner = (props) => {

    return (
        <div className="product-banner">
            <img className="img-fluid" src={props.imgSrc} alt="Product Detail"/>

            {
                props.from !== 'usecase' && (
                    <div className="product-banner-container">
                        <p className="product-banner-text-1">Better Experience For Your Customer</p>
                        <p className="product-banner-text-2">Rapid Idea Execution For Your Business</p>
                        <div className="product-banner-button">
                            <button className="btn d-flex justify-content-center banner-button" type="button">Try It</button>
                            <button className="btn banner-button" type="button">Contact Us</button>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
}

ProductBanner.propTypes = {
    imgSrc: string,
}

export default ProductBanner

