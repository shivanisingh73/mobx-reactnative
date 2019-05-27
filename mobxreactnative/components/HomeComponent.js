import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
Button
} from 'react-native';
import {observer,inject} from 'mobx-react';


type Props = {};

//injecting store 
@inject("store")
@observer //decorator for observer
export default class Home extends Component<Props> {

   state={
    inputOne:0,
    inputTwo:0
  }

  componentDidMount() {
    console.log(this.props.store)
  }

  func=()=>{
    console.warn(this.props.store.numOne);
    console.warn(this.props.store.numTwo);
    this.props.store.check()
  }
  //function to call check action 

  render() {
    return (
      <View>
      <View>
      <Text>enter first number</Text>
      </View>
      <View>
      <TextInput
      style={{backgroundColor:'pink'}}
      onChangeText={(value)=> this.props.store.numOne = parseInt(value)}
      />
      </View>
      <View>
      <Text>enter first number</Text>
      </View>
      <View>
      <TextInput
      style={{backgroundColor:'pink'}}
      onChangeText={(value)=> this.props.store.numTwo = parseInt(value)}
      />
      </View>

      <View>
      <Button
      title="Add"
      onPress={ ()=> this.func() }
      />
      </View>
      <Text> {this.props.store.sum} </Text>
      </View>
    );
  }
}