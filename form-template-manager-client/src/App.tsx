import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { View } from 'react-native';
import MymoidForm from './MymoidForm';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache(),
});

type State = {
    booted: boolean;
};


client.query({ query: gql`{
    template(id: "59f31a53926fb6a5f350d251") {
        id
        headerPrimary
    }
}` }).then(console.log);

export default class App extends React.Component<{}, State> {
  state: State = {
    booted: false,
  };

  async componentWillMount() {
    this.setState({ booted: true });
  }

  onPress = () => { console.log('Screen pressed') };

  render() {
    if (!this.state.booted) return false;
    return (
      <ApolloProvider client={client}>
        <View style={{flex: 1}}>
            <MymoidForm />
        </View>
      </ApolloProvider>
    );
  }
}
