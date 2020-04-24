import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackHeader from '../components/StackHeader';


class Screen2 extends Component {

  static navigationOptions = {
    headerTitle: props => <StackHeader { ...props } />,
  };

  render() {
    return(
      <View style={ styles.container }>
        <Text>Screen2</Text>
      </View>
    );
  } 
}

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
