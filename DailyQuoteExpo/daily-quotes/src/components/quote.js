import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Quote extends Component {
  state = {};

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  componentWillMount() {

  }

  render() {
    const { viewStyle, textStyle } = style;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.state.props.text}</Text>
      </View>
    );
  }
}

const style = {
  viewStyle: {
    top: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {}
}

export default Quote;