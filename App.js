import React, {Component} from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'

// Rotas
import Login from './Login'
import Timeline from './Timeline'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      Authentication: false
    }
  }

  async componentDidMount(){
    this.setState({
      Authentication: await AsyncStorage.getItem('@Authentication')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login" initial={!this.state.Authentication} />
            <Scene key="timeline" component={Timeline} title="Timeline" initial={this.state.Authentication} />
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
