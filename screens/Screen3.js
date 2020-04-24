import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Screen3 extends Component {

  render() {
    return(
      <View style={ styles.container }>
        <Text>Screen3</Text>
      </View>
    );
  }

}

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
