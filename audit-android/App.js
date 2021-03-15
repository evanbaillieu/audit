import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Login from './app/components/login.component'


export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
  }

  onChangeLogin(text){
   this.user = text
  }
  login(){
    if(this.user == "evan" && this.password == "Baillieu78"){
      console.log("test")
    }
  }
  onChangePassword(text){
    this.password = text
   }
  

  render(){
  return (
    <View style={{flex:1}}>
      <Login />
    </View>
    );
  }
}

const style = StyleSheet.create({
  contenaire:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: 200,
    height: 30,
    marginTop: 20,
    paddingLeft:5,
    paddingRight:5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  titre: {
    fontSize: 20
  },
  button: {
    marginTop: 100,
    backgroundColor: "red"
  }

})
