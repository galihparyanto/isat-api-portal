/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import 'bootstrap';
import './documentation.css';
import { animateScroll as scroll} from 'react-scroll';


import img_flow from './img/img_logic.png';

class Documentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reload : false,
            toggle: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        alert(nextProps.reload);
    }

    componentDidMount() {
        // if (this.props.children !== prevProps.children) {
        //     window.location.reload(false);
        // }
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const { toggle } = this.state
        const toggleClass = toggle ? 'show' : 'hide'
        return (
            <div className="containerFlex">
                <div className="containerBox">
                    <Link to="/documentation/sms">
                        <div className="box">
                            <i className="icon icon_sms" />
                            <div className="box__title">SMS API</div>
                        </div>
                    </Link>
                    <Link to="/documentation/ussd">
                        <div className="box">
                            <i className="icon icon_ussd" />
                            <div className="box__title">Indosat USSD Push Service</div>
                        </div>
                    </Link>
                    <Link to="/documentation/digital-reward">
                        <div className="box">
                            <i className="icon icon_gift" />
                            <div className="box__title">Data Reward API</div>
                        </div>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Documentation;
