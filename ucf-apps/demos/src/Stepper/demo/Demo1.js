import React from "react";
import { List, Stepper } from 'tinper-libraui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
      val1: 2,
    };
  }
  onChange = (val) => {
    console.log(val);
    this.setState({ val });
  }
  onChange1 = (val1) => {
    // console.log(val);
    this.setState({ val1 });
  }
  render() {
    console.log(List)
    console.log(List.Item)
    return (
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              defaultValue={this.state.val}
              onChange={this.onChange}
            />
          }
        >
        Show number value
        </List.Item>
        {/* <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            showNumber
            max={10}
            min={1}
            defaultValue={3}
            disabled
          />}
        >
        Disabled
        </List.Item> */}
      </List>
    );
  }
}

export default Demo;

//@title 基础示例
//@description 基本使用方式