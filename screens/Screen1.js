import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Screen1 extends Component {

  render() {
    return(
      <View style={ styles.container }>
        <Text>Screen1</Text>
      </View>
    );
  }

}

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
