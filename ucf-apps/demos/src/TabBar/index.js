import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import './demo/Demo1.less'
import './demo/Demo2.less'
import './demo/Demo3.less'


class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> </div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> </div><Demo3/></div>
      </div>
    );
  }
}

export default Exmple;