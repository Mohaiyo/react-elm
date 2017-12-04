/*
* @Author: Administrator
* @Date:   2017-09-19 22:47:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 16:26:52
* @ 引入polyfill支持es6新的API，比如Iterator、Generator、Set、Maps、Promise等等
*/
//引入react
import React from 'react'
//引入react-dom 渲染
import ReactDOM from 'react-dom'
//引入路由
import routes from './router/router'


import { AppContainer } from 'react-hot-loader';

import App from './app';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  });
}