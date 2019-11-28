import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import Books from "../components/Books";


// const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
          }`
      }
    });
  }
});
class App extends Component {
  render() {
    return (
      <div>
        <h2>My first Apollo app</h2>
        {/* <Books /> */}
      </div>

    );
  }
}

export default App;