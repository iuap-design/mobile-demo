import React, { Component } from "react";
import Demo1 from './demo/Basic'
import Demo2 from './demo/MultiSelect'
import Demo3 from './demo/SingleMulti'
import Demo4 from './demo/SingleSelect'

class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
        <div className='demo-item'><div className='demo-item-title'> 菜单多选</div><Demo2/></div>
        <div className='demo-item'><div className='demo-item-title'> 单级菜单多选</div><Demo3/></div>
        <div className='demo-item'><div className='demo-item-title'> 单级菜单</div><Demo4/></div>
      </div>
    );
  }
}

export default Exmple;