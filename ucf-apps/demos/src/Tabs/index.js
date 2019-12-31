import React, { Component } from "react";
import Demo1 from './demo/Basic'
import Demo2 from './demo/Fixedheight'
import Demo3 from './demo/Mutlitabs'
import Demo4 from './demo/Noanim'
import Demo5 from './demo/Sticky'
import Demo6 from './demo/Vertical'
class Exmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'><div className='demo-item-title'> 基础示例</div><Demo1/></div>
        <div className='demo-item'><div className='demo-item-title'> 固定高度</div><Demo2/></div>
        <div className='demo-item'><div className='demo-item-title'> 自定义个数，超出界面宽度，多于5个标签</div><Demo3/></div>
        <div className='demo-item'><div className='demo-item-title'> 无动画</div><Demo4/></div>
        <div className='demo-item'><div className='demo-item-title'> TabBar sticky</div><Demo5/></div>
        <div className='demo-item'><div className='demo-item-title'> 垂直样式</div><Demo6/></div>
      </div>
    );
  }
}

export default Exmple;