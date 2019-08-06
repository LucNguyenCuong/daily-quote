import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Quote extends Component {
  state = {};

  constructor(props) {
    super(props)
    this.state = {... props}
  }

  componentWillMount(){
    
  }

  render() {
    return (
      <View>
        <Text>{this.state.props.text}</Text>
      </View>
    );
  }
}

export default Quote;