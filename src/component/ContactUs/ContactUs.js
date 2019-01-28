/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import 'bootstrap';
// import './ContactUs.scss';
import './ContactUs.css';
import InputMaterial from '../../global/InputMaterial/InputMaterial';

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        reload : false,
        toggle: false,
        fullName: '',
        email: '',
        subject: '',
        message: '',
    };

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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =  (e) => {
        e.preventDefault()

        const { fullName, email, subject, message } = this.state


        const data = {
            fullName: fullName,
            email: email,
            subject: subject,
            message: message,
        }

        axios.post('http://localhost:3001/api/form', 
        qs.stringify(data),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then( (req, response) => {
            console.log('req: ', req)
            console.log('response: ', response)
        })
        .catch( error => {
            console.log('err: ', error.response)
        })



    }

    render() {
        const { toggle } = this.state
        
        return (
            <div className="container">
                <div>
                    <div>
                        <h2>Contact Us</h2>
                        <div>Please let us know it there’s anything that we can do to help you more.</div>
                    </div>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <InputMaterial nameTag='fullName' func={this.handleChange} id="txtFullName" title="Full Name" />
                        <InputMaterial nameTag='email' func={this.handleChange} id="txtEmail" title="Email" />
                        <InputMaterial nameTag='subject' func={this.handleChange} id="txtSubject" title="Subject" />
                        <InputMaterial nameTag='message' func={this.handleChange} id="txtMessage" title="Message" />
                        <button className="btn_primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUs;
