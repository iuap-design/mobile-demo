
# 对话框 Modal

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

## 如何使用
```
import { Modal } from 'tinper-libraui';

```

## 代码演示


## API

### Modal

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| afterClose | Modal 完全关闭后的回调 | function | 无 |
| visible | 对话框是否可见 | Boolean | false |
| closable | 是否显示关闭按钮 | Boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| onClose | 点击 x 或 mask 回调 | (): void | 无 |
| transparent | 是否背景透明 | Boolean | false |
| popup | 是否弹窗模式 | Boolean | false |
| animationType | 可选: 'slide-down / up' / 'fade' / 'slide' | String | fade |
| title | 标题 | React.Element | 无 |
| footer | 底部内容 | Array [{text, onPress}] | [] |
| platform  | 设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios` | String | `ios'`|
| transitionName  | Modal 主内容动画 className | String | |
| maskTransitionName  | mask 动画 className | String | |
| className  | 手动设置 Modal 的 className | String | |
| wrapClassName  | 手动设置 Modal wrap 的 className | String | |

### Modal.alert(title, message, actions?, platform?)

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.alert(title, message, actions?, platform?).close()` 可以在外部关闭 Alert

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数  | Array or Function | 无  |
| type | prompt 的样式 | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue | 默认值(input 为 password 类型不支持) | String | -  |
| placeholders | ['', '']  | String[] | -  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?).close()` 可以在外部关闭 prompt`

### Modal.operation(actions?, platform?)

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

`Modal.operation(actions?, platform?).close()` 可以在外部关闭 operation`

## 注意事项

暂无

## 更新日志
