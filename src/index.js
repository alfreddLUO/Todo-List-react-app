import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

// 3. 通过 ReactDOM 将 App.js 以虚拟 DOM 的形式渲染/挂载到 root 根节点，该节点在 index.html 中
ReactDOM.render(<TodoList />, document.getElementById('root'));