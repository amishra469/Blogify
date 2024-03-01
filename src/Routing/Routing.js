import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from '../containers/TopNavbar/TopNavBar';
import Home from '../containers/Home/Home';
export default class Routing extends Component {
    render() {
        return (
            <Router>
                <TopNavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        )
    }
}
