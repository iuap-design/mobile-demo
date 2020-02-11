import React from 'react'
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const operation = Modal.operation;

const App = () => (
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Button onClick={() => operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ])}
    >operation</Button>
    <WhiteSpace size="lg" />
  </WingBlank>
);
export default App

//@title 操作弹窗