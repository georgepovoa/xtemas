import React, { Component } from 'react'
import './sideBar.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";



class sideBar extends Component {
    render() {
        return (
            <div>
                <nav className="menu" tabindex="0">
                    <div className="smartphone-menu-trigger"></div>
                    <header className="avatar">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
                        <h2>John D.</h2>
                    </header>
                    <ul>
                        <li tabindex="0" className="icon-dashboard"><span>Dashboard</span></li>
                        <li tabindex="0" className="icon-customers"><span>Customers</span></li>
                        <li tabindex="0" className="icon-users"><span>Users</span></li>
                        <li tabindex="0" className="icon-settings"><span>Settings</span></li>
                    </ul>
                </nav>

            </div>
        )
    }


}


export default sideBar;
