
import { SegmentedControl, WingBlank } from 'tinper-libraui';
import './Demo1.less'
class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <WingBlank size="lg" className="sc-example">
        <p className="sub-title">Simplest</p>
        <SegmentedControl values={['Segment1', 'Segment2']} />

        <p className="sub-title">Disabled</p>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />

        <p className="sub-title">SelectedIndex</p>
        <SegmentedControl selectedIndex={1} values={['Segment1', 'Segment2', 'Segment3']} />

        <p className="sub-title">TintColor</p>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor={'#ff0000'}
          style={{ height: '40px', width: '250px' }}
        />

        <p className="sub-title">onChange/onValueChange</p>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </WingBlank>
    );
  }
}
export default SegmentedControlExample

//@title 基础示例
//@description 基本使用方式