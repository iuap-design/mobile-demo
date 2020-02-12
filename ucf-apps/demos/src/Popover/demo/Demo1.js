import { Popover, NavBar, Icon } from 'tinper-libraui';

const Item = Popover.Item;
class App extends React.Component {
  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt);
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  onClickPopoverItem = ( item ) => {
    alert(`you click the item: '${item}'`);
    this.setState({
      visible: false
    })
  }
  render() {
    return (<div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            type="ellipsis"
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <Item key="1" value="item1" type='check' data-seed="logId" onClick={()=> {this.onClickPopoverItem('item 1')}}>Item 1</Item>
            <Item key="2" value="item2" type='cross' style={{ whiteSpace: 'nowrap' }} onClick={()=> {this.onClickPopoverItem('item 2')}}>Item 2</Item>
          </Popover> 
        }
      >
        NavBar
      </NavBar>
    </div>);
  }
}

export default App;


//@title 基础示例
//@description 基本使用方式