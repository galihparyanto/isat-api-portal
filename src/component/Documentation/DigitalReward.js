/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import './documentation.css';
import { Link, animateScroll as scroll} from 'react-scroll';

import img_flow from './img/img_logic.png';

class DigitalReward extends Component {
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

                

                <div className="sideBar">
                    <div className="sideBar__title">Digital Reward API</div>
                    <ul className="listnav">
                        <li className="listnav__list">
                            <div className="hoverClass" onClick={this.handleToggle}>
                                <i className="icon icon_browser" />
                                <div className="listnav__list--text" onClick={this.handleToggle}>API Overview</div>
                            </div>
                            <ul className={toggleClass}>
                                <li>
                                    <Link 
                                        to="token"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Generate Access Token</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="flow"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Logical Flow</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="request_endpoint"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}
                                        activeClass={'active'}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Request Endpoint</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="test"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}
                                        activeClass={'active'}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Request Endpoint</div>
                                    </Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>

                <div className="content">
                    <div className="content__title">
                        Digital Reward API 
                    </div>
                    <div className="content__main">

                        <div id="token">
                            <div className="content__subtitle">Generate Access Token</div>
                            <div className="content__text">
                                This web services is used to create access token. Indosat web services are using OAuth 2.0 authorization protocol. Upon partnership, a set of client key and client secret will be given to partner for accessing the web services. To access a service, partner must first generate access token. The access token can be used in 3600 s and must be renewed after expiration. Partner is allowed to hit Generate Access Token twice per hour.
                            </div>
                        </div>

                        <div className="mt-20" id="flow">
                            <div className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                Generate Access Token is implemented as single synchronous flow as below.
                                <img src={img_flow} />
                            </div>
                        </div>

                        <div className="mt-20" id="request_endpoint">
                            <div className="content__subtitle">Request Endpoint</div>
                            <div className="content__text">
                                Here are the endpoint for every client request's.
                            </div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Method</th>
                                            <th>URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GET</td>
                                            <td>http://[IP:port]/oauth2-client/accesstoken</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bold">Request Parameter</div>
                            <div className="content__text">
                                Here are the parameters for every client request's.
                            </div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Parameter</th>
                                            <th>Values</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Header</td>
                                            <td>Authorization</td>
                                            <td>String</td>
                                            <td>Fill with Base 64 encoding of Client Key:Client Secret.</td>
                                        </tr>
                                        <tr>
                                            <td>Body</td>
                                            <td>grant_type</td>
                                            <td>String</td>
                                            <td>Fill with “client_credentials”</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <div className="mt-20" id="test">
                            <div className="content__subtitle">Request Endpoint</div>
                            <div className="content__text">
                                Here are the endpoint for every client request's.
                            </div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Method</th>
                                            <th>URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GET</td>
                                            <td>http://[IP:port]/oauth2-client/accesstoken</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bold">Request Parameter</div>
                            <div className="content__text">
                                Here are the parameters for every client request's.
                            </div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Parameter</th>
                                            <th>Values</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Header</td>
                                            <td>Authorization</td>
                                            <td>String</td>
                                            <td>Fill with Base 64 encoding of Client Key:Client Secret.</td>
                                        </tr>
                                        <tr>
                                            <td>Body</td>
                                            <td>grant_type</td>
                                            <td>String</td>
                                            <td>Fill with “client_credentials”</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>




                    </div>
                </div>


            </div>
        );
    }
}

export default DigitalReward;
