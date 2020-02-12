import { Drawer, List, NavBar, Icon } from 'tinper-libraui';
import './demo.less'
class App1 extends React.Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    console.log(this.state.open)
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = (<List>
      {[0, 1, 2, 3].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} onClick={()=>{console.log('xx')}}>Basic</NavBar>
      <div className='drawer-wrapper'>
      <Drawer
        className="my-drawer"
        // style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        Click upper-left corner
      </Drawer>
      </div>
    </div>);
  }
}
export default App1;

//@title 基础示例
//@description 基本使用方式