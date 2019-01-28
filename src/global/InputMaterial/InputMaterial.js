/**
 * Created by galihparyanto on 30/10/18.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import './InputMaterial.css';


class InputMaterial extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="group">      
                <input name={this.props.nameTag} onChange={this.props.func} id={this.props.id} type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.title}</label>
            </div>
        );
    }
}

export default InputMaterial;
