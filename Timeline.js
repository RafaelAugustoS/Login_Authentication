import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Timeline extends Component {
    _Logout = async () => {
        await AsyncStorage.clear()
        Actions.login({})
    }

    render(){
        return(
            <View>
                <Text>Timeline</Text>
                <TouchableOpacity onPress={this._Logout}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Timeline