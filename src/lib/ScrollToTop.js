/**
 * Created by galihparyanto on 25/12/18.
 */
import React, { Component } from 'react';
import { withRouter } from "react-router";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            alert('Scroll to top');
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);