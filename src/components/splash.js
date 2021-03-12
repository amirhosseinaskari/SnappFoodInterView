import React from "react";
import logo from '../assets/images/logo.png';
function Splash(props) {
    return (
    <div className="loader-container">
        <img src={logo} />
        <b className="loading">در حال بارگزاری ...</b>
    </div>);
}

export default Splash;