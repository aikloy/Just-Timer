import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Timer from './components/Timer';
import Setting from './components/Setting';
import reducer from './reducer'


let store = createStore(reducer);

console.log(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
      
      // <View style={{backgroundColor:"black", flex : 1, alignItems : "center", justifyContent : "center",}}>
      // <Image source={require('./assets/logo.jpg')} />
      // </View>
    );
  }
}
