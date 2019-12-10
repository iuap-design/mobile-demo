import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
replaceImportant
import 'antd-mobile/dist/antd-mobile.css'
import './app.less'


class App extends Component{
    render(){
        return (<div className='link'>
        <Link to="/">首页</Link>
        replaceLink
    </div>)
    }
}

class Routers extends Component{
    render(){
        return (
            <Router path="/" >
                <div className='demo-sidebar'>
                    replaceRoute
                </div>
            </Router>
        )
    }
}




replaceRender
