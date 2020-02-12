import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import Demo4 from './demo/Demo4.js'
import Demo5 from './demo/Demo5.js'
import Demo6 from './demo/Demo6.js'



class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> 固定高度</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> 自定义个数</div><Demo3/></div>
<div className='demo-item'><div className='demo-item-title'> 无动画</div><Demo4/></div>
<div className='demo-item'><div className='demo-item-title'> TabBar sticky</div><Demo5/></div>
<div className='demo-item'><div className='demo-item-title'> 垂直样式</div><Demo6/></div>
      </div>
    );
  }
}

export default Exmple;