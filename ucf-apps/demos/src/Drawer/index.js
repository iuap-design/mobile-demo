import React, { Component } from "react";
import Demo1 from './demo/Basic'
import Demo2 from './demo/Dock'


class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
        <div className='demo-item'><div className='demo-item-title'> 嵌入文档模式</div><Demo2/></div>
      </div>
    );
  }
}

export default Exmple;