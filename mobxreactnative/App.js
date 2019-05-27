import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Myapp from './index';
import storemobx from './services/storemobx';

export default class App extends Component {
  render() {
    return (
      <Provider store={storemobx}>
        <Myapp/>
      </Provider>
    );
  }
}