import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Login extends Component {

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
      
    
    render() {
        return (
            <View style={style.contenaire}>
                <Text style={style.titre}> Login !</Text>
                <TextInput
                style={style.textInput}
                onChangeText={text => this.onChangeLogin(text)}
                value={this.user}
                placeholder="login"
                />
                <TextInput
            
                style={[style.textInput, {marginBottom:10}]}
                onChangeText={text => this.onChangePassword(text)}
                value={this.password}
                secureTextEntry={true}
                password={true}
                placeholder="mot de passe"
                />
                <View style={{borderRadius: 15, borderColor: red}}>
                    <Button
                    style={style.submit}
                    onPress={this.login()}
                    title="Submit"
                    />
                </View>
            </View>
        )
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
    submit: {
      color: 'red'
    }
  
  })