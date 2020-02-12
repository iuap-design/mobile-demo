import React, { Component } from "react";
import { Label, WingBlank } from 'tinper-libraui';

class LabelExample extends Component{
    render(){
        return (
        <WingBlank>
          <Label label='small' type='small' className='Lss'/>
          <Label label='normal' type='normal' />
          <Label label='large' type='large' />
      </WingBlank>)
    }
}
export default LabelExample;

//@title 基础示例
//@description 基本使用方式