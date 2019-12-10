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
                    <App/>
                    <Route exact path="/" component='首页' />
                    replaceRoute
                </div>
            </Router>
        )
    }
}





ReactDOM.render(<Routers/>, document.getElementById('mobileDemo'));