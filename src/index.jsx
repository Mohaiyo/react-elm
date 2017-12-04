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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store/reducer/reducer'
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';

let store = createStore(todoApp)

console.log(store.getState())

var FastClick = require('fastclick')

//解决移动端300毫秒延迟
FastClick.attach(document.body)

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>   
                <Component/>
            </Provider>
        </AppContainer>,    
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextRootContainer = require('./App.jsx').default
        render(NextRootContainer)
    });
}