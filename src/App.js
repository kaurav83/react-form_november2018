import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Form from './containers/Form/Form';

class App extends Component {
  render() {
    return (
      <Layout>
        <Form />
      </Layout>
    );
  }
}

export default App;
