import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native'
import Quote from './quote';

class Home extends Component {

  state = { quote: { "id": "", "text": "" }, time: '' };

  componentWillMount() {
    // this.setState({ quotes: quotes });

    quotes.map(quote => {
      setInterval(() =>
        this.setState({ quote: quote })
        , 1000);
    })

    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  // renderQuotes() {

  //   return this.state.quotes.map(quote =>
  //     <Quote key={quote.id} props={quote} />
  //   );
  // }

  render() {
    const { viewStyle, textStyle } = style;
    //  return this.state.quotes.map(quote => {
    //     return (<View key={quote.id}>
    //       <Quote  props={quote} />
    //     </View>)
    //   });
    return (
      <View id={this.state.quote.id} style={viewStyle}>
        <Text style={textStyle}> {this.state.quote} </Text>
      </View>
    );
  }
}

const quotes = [
  { "id": "1", "text": "meowww 1231233" },
  { "id": "2", "text": "meowww1" },
  { "id": "3", "text": "meowww2" },
  { "id": "4", "text": "meowww3" },
  { "id": "5", "text": "meowww4" }
]

const style = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20
  }
}

export default Home;