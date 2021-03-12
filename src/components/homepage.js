import '../assets/style/components/homepage.scss'
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import React from 'react';
function HomePage(props) {
    return (
    <div className="container">
        <img src={logo} className="logo" />
        <Link className="container__nextBtn--pink" to='/vendorlist'>
            رفتن به لیست
        </Link>
    </div>);
}

export default HomePage;