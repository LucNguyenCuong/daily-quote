import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import Quote from './quote';

class Home extends Component {
  state = { quotes: [] };

  componentWillMount() {
    this.setState({ quotes: quotes });
  }

  renderQuotes() {
    return this.state.quotes.map(quote =>
      <Quote key={quote.id} props={quote}/>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderQuotes()}
      </ScrollView>
    )
  }
}

const quotes = [
  { "id": "1", "text": "meowww 123123" },
  { "id": "2", "text": "meowww1" },
  { "id": "3", "text": "meowww2" },
  { "id": "4", "text": "meowww3" },
  { "id": "5", "text": "meowww4" }
]

export default Home;