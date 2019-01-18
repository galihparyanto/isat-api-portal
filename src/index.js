import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Home from './component/Home';
import Documentation from './component/Documentation/Documentation';
import DigitalRewardDocs from './component/Documentation/DigitalReward';
import UssdPush from './component/Documentation/UssdPush';
import SmsDocs from './component/Documentation/Sms';
import Products from './component/Products';
import UseCases from './component/UseCases';
import SMS from './component/SMS';
import USSD from './component/USSD';
import DigitalReward from './component/DigitalReward';
import SMSNotification from './component/SMSNotification';
import SMSBulk from './component/SMSBulk';
import MobileNumberVerification from './component/MobileNumberVerification';
import GiftData from './component/GiftData';
import USSDNotification from './component/USSDNotification';
import Terms from './component/Terms';
import VASCatalog from './component/VASCatalog';
import SMSAuthentication from './component/SMSAuthentication';
import USSDAuthentication from './component/USSDAuthentication';
import VASProductSubscription from './component/VASProductSubscription';
import NoMatch from './component/NoMatch';
import ContactUs from './component/ContactUs';
import * as serviceWorker from './lib/serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ScrollToTop from './lib/ScrollToTop';

ReactDOM.render((
    <Router history={browserHistory}>
        <ScrollToTop>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/contact-us" component={ContactUs}/>
                <Route path="/documentation" component={Documentation}/>
                <Route path="/documentation/digital-reward" component={DigitalRewardDocs}/>
                <Route path="/documentation/ussd" component={UssdPush}/>
                <Route path="/documentation/sms" component={SmsDocs}/>
                <Route path="/products" component={Products}/>
                <Route path="/products/sms" component={SMS}/>
                <Route path="/products/ussd" component={USSD}/>
                <Route path="/products/digital-reward" component={DigitalReward}/>
                <Route path="/products/vas-catalog" component={VASCatalog}/>
                <Route path="/use-cases" component={UseCases}/>
                <Route path="/use-cases/sms-notification" component={SMSNotification}/>
                <Route path="/use-cases/sms-authentication" component={SMSAuthentication}/>
                <Route path="/use-cases/sms-bulk" component={SMSBulk}/>
                <Route path="/use-cases/mobile-number-verification" component={MobileNumberVerification}/>
                <Route path="/use-cases/ussd-notification" component={USSDNotification}/>
                <Route path="/use-cases/ussd-authentication" component={USSDAuthentication}/>
                <Route path="/use-cases/gift-data" component={GiftData}/>
                <Route path="/use-cases/vas-product-subscription" component={VASProductSubscription}/>
                {/* <Route path="*" component={NoMatch} /> */}
            </Route>
        </ScrollToTop>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
