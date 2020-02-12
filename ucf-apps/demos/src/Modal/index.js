import React, { Component } from "react";
import Demo1 from './demo/Demo1.js'
import Demo2 from './demo/Demo2.js'
import Demo3 from './demo/Demo3.js'
import Demo4 from './demo/Demo4.js'
import './demo/Demo2.less'


class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 警告弹窗</div><Demo1/></div>
<div className='demo-item'><div className='demo-item-title'> 基本示例</div><Demo2/></div>
<div className='demo-item'><div className='demo-item-title'> 操作弹窗</div><Demo3/></div>
<div className='demo-item'><div className='demo-item-title'> 输入弹框</div><Demo4/></div>
      </div>
    );
  }
}

export default Exmple;