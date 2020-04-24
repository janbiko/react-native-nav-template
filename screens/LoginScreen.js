import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class LoginScreen extends Component {

  login = () => {
    this.props.navigation.navigate('Screen1');
  }

  render() {
    return(
      <View style={ styles.container }>
        <Button title="Login" onPress={() => this.login()} />
      </View>
    );
  } 
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
