/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import {Link} from 'react-router';

class Footer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-red"></div>
                <div className="footer-black">
                    <div className="footer-menu">
                        <span><Link className="footer-link" to="#">About</Link>  |  <Link className="footer-link" to="#">FAQ</Link>  |  <Link className="footer-link" to="/terms">Terms</Link>  |  <Link className="footer-link" to="/contact-us">Contact Us</Link></span>
                    </div>
                    <div className="copyright">
                        <span className="copyright-text">Indosat Ooredoo © 2019 All Right Reserved</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
