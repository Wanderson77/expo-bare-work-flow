/*This is an Example of Calling Other Class Function in React Native*/
import React, { Component } from 'react';
import { StyleSheet, View, Alert, Platform, Button } from 'react-native';

export default class CallOtherClass extends Component {
  handlerSimpleCall = () => {
    //Calling a function of other class (without arguments)
    new OtherClass().functionWithoutArg();
  };

  handlerArgCall = () => {
    //Calling a function of other class (with argument)
    new OtherClass().functionWithArg('About React');
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#F5FCFF',
        }}>
        <View style={{ margin: 10 }}>
          <Button
            title="Function Without Argument"
            onPress={this.handlerSimpleCall}
            color="#606070"
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title=" Function With Argument"
            onPress={this.handlerArgCall}
            color="#606070"
          />
        </View>
      </View>
    );
  }
}

class OtherClass extends Component {
  functionWithoutArg = () => {
    //function to be called from default class (without args)
    alert('Function Called Without Argument ');
  };

  functionWithArg = Value => {
    //function to called from default class (with args)
    alert(Value);
  };
}