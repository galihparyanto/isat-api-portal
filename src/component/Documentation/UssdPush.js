/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import './documentation.css';
import { Link, animateScroll as scroll} from 'react-scroll';

import img_flow from './img/img_logic.png';
import flow_ussd_push from './img/flow_ussd_push.png';
import flow_ussd_delivery from './img/flow_ussd_delivery.png';

class UssdPush extends Component {
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

    printJsonSample = (sample) => {
        const rs = JSON.stringify(sample)
        return rs
    }

    render() {
        const { toggle } = this.state
        const toggleClass = toggle ? 'show' : 'hide'

        let jsonSampleSms200 = {
            "refresh_token_expires_in": "0",
            "api_product_list": "[daniproduct]",
            "api_product_list_json": [
                "daniproduct"
            ],
            "organization_name": "indosatooredoo",
            "developer.email": "muhammad.asmara@indosatooredoo.com",
            "token_type": "BearerToken",
            "issued_at": "1527066957095",
            "client_id": "bu1SVHJ3vJRHE2xUct0RozUZiJArcUK2",
            "access_token": "XcHWLARsMvK4jbnYM0nBFcztAtb6",
            "application_name": "3f3e90e9-51c5-4b77-8c55-c4fe9f01c978",
            "scope": "",
            "expires_in": "3599",
            "refresh_count": "0",
            "status": "approved"
        }

        let jsonSampleSms401 = {
            "ErrorCode" : "invalid_client", 
            "Error" :"ClientId is Invalid"
        }

        let sendUssdSample200Status0 = {
            "msisdn": "08557777197",
            "transid": "12345678",
            "status": "0",
            "message": "Success Sent"
        }        
        

        let sendUssdSample200Status593 = {
            "msisdn": "081573008453",
            "transid": "201809211518",
            "status": "593",
            "message": "TCAPABORT"
        }
        

        let sendUssdSample200Status27 = {
            "msisdn": "081573008453",
            "transid": "201809211518",
            "status": "27",
            "message": "ABSENTSUBS"
        }

        let sendUssdSample200Status72 = {
            "msisdn": "081573008453",
            "transid": "201809211518",
            "status": "72",
            "message": "USSDBUSY"
        }
        
        let sendUssdSample400Status14 = {
            "status": "-14",
            "message": "Invalid Prefix"
        }
        
        let sendUssdSample400Status15 = {
            "status": "-15",
            "message": "Method not allowed."
        }

        let sendUssdSample401 = {
            "fault": {
                "faultstring": "Invalid access token",
                "detail": {
                    "errorcode": "oauth.v2.InvalidAccessToken"
                }
            }
        }
        

        
        
        

        let pushUssdRequestSample = {
            "sc" : "TEST",
            "msisdn" : "08557777197",
            "message" : "Hello from%20IndosatOooredoo!",
            "transid" : "12345678"
        }
        
                      
            

        return (
            <div className="containerFlex">

                

                <div className="sideBar">
                    <div className="sideBar__title">USSD Push API</div>
                    <ul className="listnav">
                        <li className="listnav__list">
                            <div className="hoverClass" onClick={this.handleToggle}>
                                <i className="icon icon_browser" />
                                <div className="listnav__list--text" onClick={this.handleToggle}>USSD Push API Overview</div>
                            </div>
                            <ul className={toggleClass}>
                                <li>
                                    <Link 
                                        to="accessToken"
                                        spy={true}
                                        smooth={true}
                                        duration={500}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Generate Access Token</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="sendUssd"
                                        spy={true}
                                        smooth={true}
                                        duration={500}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Send USSD</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="ussdDeliveryReport"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}
                                        activeClass={'active'}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">USSD Delivery Report</div>
                                    </Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>

                <div className="content">
                    <div className="content__title">
                        USSD Push Documentation API 
                    </div>
                    <div className="content__main">

                        <div id="accessToken">
                            <div className="content__subtitle content__subtitle--title">Generate Access Token</div>
                            <div className="content__text">
                                This web services is used to create access token. Indosat web services are using OAuth 2.0 authorization protocol. Upon partnership, a set of client key and client secret will be given to partner for accessing the web services. <br /> To access a service, partner must first generate access token. The access token can be used in 3600 s and must be renewed after expiration.
                            </div>
                            <div id="logicFlow" className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                <div>Generate Access Token is implemented as single synchronous flow as below.</div>
                                <img src={img_flow} />
                            </div>
                            <div id="reqEndpoint" className="content__subtitle">Request Endpoint</div>
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

                            <div className="bold">Response Example</div>
                            <div className="content__text">
                                Here are the parameters for every client request's.
                            </div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>HTTP Status</th>
                                            <th>Response</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>200</td>
                                            <td>
                                                <code>{this.printJsonSample(jsonSampleSms200)}</code>
                                            </td>
                                            <td>Success Response; use access_token element value as an access token upon sending sms.</td>
                                        </tr>
                                        <tr>
                                            <td>Body</td>
                                            <td><code>{this.printJsonSample(jsonSampleSms401)}</code></td>
                                            <td>Failed response; Invalid credentials</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div id="sendUssd">
                            <div className="content__subtitle content__subtitle--title">Send USSD Push</div>
                            <div className="content__text">
                                This web services is used to send USSD Push to Indosat Ooredoo  mobile number
                            </div>
                            <div id="logicFlow" className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                <div>
                                    Sending USSD Push is implemented as single synchronous flow as below.
                                </div>
                                <img width="100%" src={flow_ussd_push} />
                            </div>
                            <div id="reqEndpoint" className="content__subtitle">Request Endpoint</div>
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
                                            <td>POST</td>
                                            <td>http://[IP:port]/ussd</td>
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
                                            <td>Fill with “Bearer access_token”. See section 3.1</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>msisdn</td>
                                            <td>String</td>
                                            <td>Indosat Ooredoo mobile number; Accepted prefix: 0815/0816/0855/0856/0857/0858 </td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>message</td>
                                            <td>String</td>
                                            <td>Message to be sent; maximum character is 145.</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; unique</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bold">Request Example</div>
                            <div className="content__text content__text--border">
                                <code>{this.printJsonSample(pushUssdRequestSample)}</code>
                            </div>

                            <div className="bold">Response Example</div>
                            <div className="content__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>HTTP Status</th>
                                            <th>Response</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>200</td>
                                            <td><code>{this.printJsonSample(sendUssdSample200Status0)}</code></td>
                                            <td>Sending Success</td>
                                        </tr>
                                        <tr>
                                            <td>200</td>
                                            <td><code>{this.printJsonSample(sendUssdSample200Status593)}</code></td>
                                            <td>Sending Success</td>
                                        </tr>
                                        <tr>
                                            <td>200</td>
                                            <td><code>{this.printJsonSample(sendUssdSample200Status27)}</code></td>
                                            <td>Sending failed; Absent Subscriber</td>
                                        </tr>
                                        <tr>
                                            <td>200</td>
                                            <td><code>{this.printJsonSample(sendUssdSample200Status72)}</code></td>
                                            <td>Sending Failed; USSD Busy</td>
                                        </tr>
                                        <tr>
                                            <td>401</td>
                                            <td>{this.printJsonSample(sendUssdSample400Status14)}</td>
                                            <td>Invalid message header.</td>
                                        </tr>
                                        <tr>
                                            <td>401</td>
                                            <td>{this.printJsonSample(sendUssdSample400Status15)}</td>
                                            <td>Invalid HTTP hold.</td>
                                        </tr>
                                        <tr>
                                            <td>401</td>
                                            <td>{this.printJsonSample(sendUssdSample401)}</td>
                                            <td>Invalid access token.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div id="ussdDeliveryReport">
                            <div id="accessToken" className="content__subtitle content__subtitle--title">USSD Delivery Report</div>
                            <div className="content__text">
                                After the USSD has been delivered to user handset, API gateway will send delivery status to Partner’s callback URL. Upon registration, Partner will need to register callback URL for the delivery report.
                            </div>
                            <div id="logicFlow" className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                <img width="100%" src={flow_ussd_delivery} alt='flow_ussd_delivery' />
                                <div>
                                    After the USSD has been delivered to user handset, API gateway will send delivery status to Partner’s callback URL registered upon onboarding.
                                </div>
                            </div>
                            <div id="reqEndpoint" className="content__subtitle">Request Endpoint</div>
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
                                            <td>http://[IP:port]</td>
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
                                            <td>GET</td>
                                            <td>msisdn</td>
                                            <td>String</td>
                                            <td>Indosat Ooredoo mobile number; Accepted prefix: 0815/0816/0855/0856/0857/0858 </td>
                                        </tr>
                                        <tr>
                                            <td>GET</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id;</td>
                                        </tr>
                                        <tr>
                                            <td>GET</td>
                                            <td>status</td>
                                            <td>String</td>
                                            <td>
                                                Delivery status: 
                                                -	DELIVRD: success delivery or 
                                                -	UNDELIV: failed delivery
                                                -	EXPIRED: USSD session expired
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bold">Request Example</div>
                            <div className="content__text content__text--border">
                                <code>{this.printJsonSample(pushUssdRequestSample)}</code>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
        );
    }
}

export default UssdPush;
