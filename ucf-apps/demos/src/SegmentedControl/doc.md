# 分段器 SegmentedControl

由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。

## 代码演示

## API

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| prefixCls  | 样式前缀        | String |  `am-segment`  |
| className | 样式类        | String |    |
| style | 自定义样式        | Object | `{}`   |
| tintColor  | 组件主色调        | String |  `#2DB7F5`  |
| disabled  | 是否启用        | Boolean |  false  |
| selectedIndex  | 选中项在数组中的索引        | Number |  0  |
| values  | 选项数组,值是字符串        | array |  []  |
| onChange    | 回调函数, 其中`e.nativeEvent.selectedSegmentIndex`是选中项索引, `e.nativeEvent.value`是选中的值. | (e): void |  function(){}  |
| onValueChange    |    回调函数   | (val): void |  function(){}  |

## 注意事项

暂无

## 更新日志
