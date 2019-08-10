import React, { Component } from 'react';
import { ScrollView, View } from 'react-native'
import Quote from './quote';

class Home extends Component {
  state = { quote: { "id": "0", "text": "" }, };

  componentDidMount() {
    quotes.forEach((quote, i) => {
      this.setQuoteTiming(quote, i)
    });
  }

  setQuoteTiming(quote, second) {
    setTimeout(() => {
      this.setState({ quote: quote });
    }, 1000 * second);
  }

  render() {
    return (
      <Quote key={this.state.quote.id} props={this.state.quote} />
    )
  }
}


const quotes = [
  { "id": "1", "text": "meowww 123123" },
  { "id": "2", "text": "meowww1" },
  { "id": "3", "text": "meowww2" },
  { "id": "4", "text": "meowww3" },
  { "id": "5", "text": "meowww4" },

]

export default Home;