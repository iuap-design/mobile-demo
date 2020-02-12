/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Accordion from "./Accordion/index";
import ActivityIndicator from "./ActivityIndicator/index";
import Badge from "./Badge/index";
import Button from "./Button/index";
import Calendar from "./Calendar/index";
import Card from "./Card/index";
import Carousel from "./Carousel/index";
import Checkbox from "./Checkbox/index";
import DatePicker from "./DatePicker/index";
import DatePickerView from "./DatePickerView/index";
import Drawer from "./Drawer/index";
import Flex from "./Flex/index";
import Grid from "./Grid/index";
import Icon from "./Icon/index";
import ImagePicker from "./ImagePicker/index";
import InputItem from "./InputItem/index";
import Label from "./Label/index";
import List from "./List/index";
import ListView from "./ListView/index";
import Menu from "./Menu/index";
import Modal from "./Modal/index";
import NavBar from "./NavBar/index";
import NoticeBar from "./NoticeBar/index";
import Pagination from "./Pagination/index";
import Picker from "./Picker/index";
import PickerView from "./PickerView/index";
import Popover from "./Popover/index";
import Progress from "./Progress/index";
import PullToRefresh from "./PullToRefresh/index";
import Radio from "./Radio/index";
import Range from "./Range/index";
import Result from "./Result/index";
import SearchBar from "./SearchBar/index";
import SegmentedControl from "./SegmentedControl/index";
import Slider from "./Slider/index";
import Stepper from "./Stepper/index";
import SwipeAction from "./SwipeAction/index";
import Switch from "./Switch/index";
import TabBar from "./TabBar/index";
import Tabs from "./Tabs/index";
import Tag from "./Tag/index";
import TextareaItem from "./TextareaItem/index";
import WhiteSpace from "./WhiteSpace/index";
import WingBlank from "./WingBlank/index";
import "tinper-libraui/dist/index.css"
import "./app.less";

class App extends Component{
    render(){
        return (<div className='link'>
        <Link to="/Accordion">Accordion</Link>
<Link to="/ActivityIndicator">ActivityIndicator</Link>
<Link to="/Badge">Badge</Link>
<Link to="/Button">Button</Link>
<Link to="/Calendar">Calendar</Link>
<Link to="/Card">Card</Link>
<Link to="/Carousel">Carousel</Link>
<Link to="/Checkbox">Checkbox</Link>
<Link to="/DatePicker">DatePicker</Link>
<Link to="/DatePickerView">DatePickerView</Link>
<Link to="/Drawer">Drawer</Link>
<Link to="/Flex">Flex</Link>
<Link to="/Grid">Grid</Link>
<Link to="/Icon">Icon</Link>
<Link to="/ImagePicker">ImagePicker</Link>
<Link to="/InputItem">InputItem</Link>
<Link to="/Label">Label</Link>
<Link to="/List">List</Link>
<Link to="/ListView">ListView</Link>
<Link to="/Menu">Menu</Link>
<Link to="/Modal">Modal</Link>
<Link to="/NavBar">NavBar</Link>
<Link to="/NoticeBar">NoticeBar</Link>
<Link to="/Pagination">Pagination</Link>
<Link to="/Picker">Picker</Link>
<Link to="/PickerView">PickerView</Link>
<Link to="/Popover">Popover</Link>
<Link to="/Progress">Progress</Link>
<Link to="/PullToRefresh">PullToRefresh</Link>
<Link to="/Radio">Radio</Link>
<Link to="/Range">Range</Link>
<Link to="/Result">Result</Link>
<Link to="/SearchBar">SearchBar</Link>
<Link to="/SegmentedControl">SegmentedControl</Link>
<Link to="/Slider">Slider</Link>
<Link to="/Stepper">Stepper</Link>
<Link to="/SwipeAction">SwipeAction</Link>
<Link to="/Switch">Switch</Link>
<Link to="/TabBar">TabBar</Link>
<Link to="/Tabs">Tabs</Link>
<Link to="/Tag">Tag</Link>
<Link to="/TextareaItem">TextareaItem</Link>
<Link to="/WhiteSpace">WhiteSpace</Link>
<Link to="/WingBlank">WingBlank</Link>
    </div>)
    }
}

class Routers extends Component{
    render(){
        return (
            <Router path="/" >
                <div className='demo-sidebar'>
                    <Route exact path="/Accordion" component={Accordion} /> 
<Route exact path="/ActivityIndicator" component={ActivityIndicator} /> 
<Route exact path="/Badge" component={Badge} /> 
<Route exact path="/Button" component={Button} /> 
<Route exact path="/Calendar" component={Calendar} /> 
<Route exact path="/Card" component={Card} /> 
<Route exact path="/Carousel" component={Carousel} /> 
<Route exact path="/Checkbox" component={Checkbox} /> 
<Route exact path="/DatePicker" component={DatePicker} /> 
<Route exact path="/DatePickerView" component={DatePickerView} /> 
<Route exact path="/Drawer" component={Drawer} /> 
<Route exact path="/Flex" component={Flex} /> 
<Route exact path="/Grid" component={Grid} /> 
<Route exact path="/Icon" component={Icon} /> 
<Route exact path="/ImagePicker" component={ImagePicker} /> 
<Route exact path="/InputItem" component={InputItem} /> 
<Route exact path="/Label" component={Label} /> 
<Route exact path="/List" component={List} /> 
<Route exact path="/ListView" component={ListView} /> 
<Route exact path="/Menu" component={Menu} /> 
<Route exact path="/Modal" component={Modal} /> 
<Route exact path="/NavBar" component={NavBar} /> 
<Route exact path="/NoticeBar" component={NoticeBar} /> 
<Route exact path="/Pagination" component={Pagination} /> 
<Route exact path="/Picker" component={Picker} /> 
<Route exact path="/PickerView" component={PickerView} /> 
<Route exact path="/Popover" component={Popover} /> 
<Route exact path="/Progress" component={Progress} /> 
<Route exact path="/PullToRefresh" component={PullToRefresh} /> 
<Route exact path="/Radio" component={Radio} /> 
<Route exact path="/Range" component={Range} /> 
<Route exact path="/Result" component={Result} /> 
<Route exact path="/SearchBar" component={SearchBar} /> 
<Route exact path="/SegmentedControl" component={SegmentedControl} /> 
<Route exact path="/Slider" component={Slider} /> 
<Route exact path="/Stepper" component={Stepper} /> 
<Route exact path="/SwipeAction" component={SwipeAction} /> 
<Route exact path="/Switch" component={Switch} /> 
<Route exact path="/TabBar" component={TabBar} /> 
<Route exact path="/Tabs" component={Tabs} /> 
<Route exact path="/Tag" component={Tag} /> 
<Route exact path="/TextareaItem" component={TextareaItem} /> 
<Route exact path="/WhiteSpace" component={WhiteSpace} /> 
<Route exact path="/WingBlank" component={WingBlank} /> 
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routers/>, document.getElementById('testPhone'));