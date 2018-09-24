import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Login extends Component {
    _Login = async () => {
        await AsyncStorage.setItem('@Authentication', 'true')
        Actions.timeline({})
    }

    render(){
        return(
            <View>
                <TextInput placeholder="Usuario" />
                <TextInput placeholder="Senha" />
                <TouchableOpacity onPress={() => this._Login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login