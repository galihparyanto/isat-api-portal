/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import 'bootstrap';
import './documentation.css';
import { Link, animateScroll as scroll} from 'react-scroll';

import img_flow from './img/img_logic.png';
import flow_logic from './img/flow_sms.png';

class Sms extends Component {
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

        let exampleRequest = {
            "sc" : "APITest",
            "msisdn" : "08557777197",
            "message" : "Hello from IndosatOooredoo!",
            "transid" : "12345678"
        }

        let sendSmsSample200 = {
            "msisdn": "08557777197",
            "transid": "12345678",
            "status": "0",
            "message": "Success Quota : -1.0 Valid Period : 31/12/2020"
        }
        
        let sendSmsSample401 = {
            "fault": {
                "faultstring": "Invalid access token",
                "detail": {
                    "errorcode": "oauth.v2.InvalidAccessToken"
                }
            }            
        }

        let sendSmsSample400Status14 = {
            "status": "-14",
            "message": "Invalid Prefix"
        }

        let sendSmsSample400Status15 = {
            "status": "-15",
            "message": "Method Not Allowed"
        }
                      
            

        return (
            <div className="containerFlex">

                

                <div className="sideBar">
                    <div className="sideBar__title">SMS API</div>
                    <ul className="listnav">
                        <li className="listnav__list">
                            <div className="hoverClass" onClick={this.handleToggle}>
                                <i className="icon icon_browser" />
                                <div className="listnav__list--text" onClick={this.handleToggle}>SMS API Overview</div>
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
                                        to="sendSms"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">Send SMS</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="smsDeliveryReport"
                                        spy={true}
                                        smooth={true}
                                        duration= {500}
                                        activeClass={'active'}>
                                        <i className="icon icon_folder" />
                                        <div className="listnav__list--text">SMS Delivery Report</div>
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
                        SMS Documentation API 
                    </div>
                    <div className="content__main">

                        <div id="token">
                            <div id="accessToken" className="content__subtitle content__subtitle--title">Generate Access Token</div>
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

                            <div id="reqParameter" className="bold">Request Parameter</div>
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

                            <div id="reqParameter" className="bold">Response Example</div>
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

                        <div id="sendSms">
                            <div id="accessToken" className="content__subtitle content__subtitle--title">Send SMS</div>
                            <div className="content__text">
                                This command is used to send SMS to Indosat Ooredoo mobile number using specified sender’s masking. For testing purpose, each partner will have quota of 10 request per day.
                            </div>
                            <div id="logicFlow" className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                <img width="100%" src={flow_logic} />
                                <div>
                                    Send SMS is implemented as single synchronous flow as above. Partner shall hit sendSMS method to send SMS and receive sending status as synchronous response. Indosat API Gateway will then sending the SMS. 
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
                                            <td>POST</td>
                                            <td>http://[IP:port]/sms</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Message to be sent</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender; For development endpoint, use “APITest”</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; MUST be unique for settlement purpose</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="reqParameter" className="bold">Request Example</div>
                            <div className="content__text content__text--border">
                                <code>{this.printJsonSample(exampleRequest)}</code>
                            </div>

                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Message to be sent</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender; For development endpoint, use “APITest”</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; MUST be unique for settlement purpose</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Message to be sent</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender; For development endpoint, use “APITest”</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; MUST be unique for settlement purpose</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div id="reqParameter" className="bold">Response example</div>
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
                                            <td><code>{this.printJsonSample(sendSmsSample200)}</code></td>
                                            <td>Sending Success</td>
                                        </tr>
                                        <tr>
                                            <td>400</td>
                                            <td><code>{this.printJsonSample(sendSmsSample400Status14)}</code></td>
                                            <td>Invalid message sender.</td>
                                        </tr>
                                        <tr>
                                            <td>400</td>
                                            <td><code>{this.printJsonSample(sendSmsSample400Status15)}</code></td>
                                            <td>String</td>
                                        </tr>
                                        <tr>
                                            <td>401</td>
                                            <td>{this.printJsonSample(sendSmsSample401)}</td>
                                            <td>Invalid access token</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>


                        <div id="smsDeliveryReport">
                            <div id="accessToken" className="content__subtitle content__subtitle--title">SMS Delivery Report</div>
                            <div className="content__text">
                                After the SMS has been delivered to user handset, API gateway will send delivery status to Partner’s callback URL. Upon registration, Partner will need to register callback URL for the delivery report.
                            </div>
                            <div id="logicFlow" className="content__subtitle">Logical Flow</div>
                            <div className="content__text">
                                <img width="100%" src={flow_logic} />
                                <div>
                                    After the SMS has been delivered to user handset, API gateway will send delivery status to Partner’s callback URL registered upon onboarding.
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
                                            <td>http://[IP:port]/sms</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Delivery status: 2 : Success; 3 : Undelivered; 4 : Grace Period; 5 : System Error</td>
                                        </tr>
                                        <tr>
                                            <td>GET</td>
                                            <td>longmessage</td>
                                            <td>String</td>
                                            <td>Long message status i.e. more than 160 chars: 0 : standard SMS; 1 : long message.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div id="reqParameter" className="bold">Request Example</div>
                            <div className="content__text content__text--border">
                                <code>http://10.34.232.6:9090/example?transid=123456781&msisdn=08563137663&status=2&longmessage=1</code>
                            </div>

                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Message to be sent</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender; For development endpoint, use “APITest”</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; MUST be unique for settlement purpose</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="reqParameter" className="bold">Request Parameter</div>
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
                                            <td>Message to be sent</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>sc</td>
                                            <td>String</td>
                                            <td>Message Sender; For development endpoint, use “APITest”</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>transid</td>
                                            <td>String</td>
                                            <td>Partner’s transaction id; MUST be unique for settlement purpose</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div id="reqParameter" className="bold">Response example</div>
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
                                            <td><code>{this.printJsonSample(sendSmsSample200)}</code></td>
                                            <td>Sending Success</td>
                                        </tr>
                                        <tr>
                                            <td>400</td>
                                            <td><code>{this.printJsonSample(sendSmsSample400Status14)}</code></td>
                                            <td>Invalid message sender.</td>
                                        </tr>
                                        <tr>
                                            <td>400</td>
                                            <td><code>{this.printJsonSample(sendSmsSample400Status15)}</code></td>
                                            <td>String</td>
                                        </tr>
                                        <tr>
                                            <td>401</td>
                                            <td>{this.printJsonSample(sendSmsSample401)}</td>
                                            <td>Invalid access token</td>
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

export default Sms;
