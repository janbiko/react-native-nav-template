import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class StackHeader extends Component {

  render() {
    return(
      <View style={ styles.header }>
        <Text>Customize here...</Text>
      </View>
    );
  }

}

export default StackHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
});
