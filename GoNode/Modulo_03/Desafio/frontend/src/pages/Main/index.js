import React from 'react';
import { api } from 'services/api';

class Main extends React.Component {
  async componentDidMount() {
    try {
      const response = await api.get('/posts');
      console.log('posts', response);
    } catch (err) {
      console.log(err.response);
    }
  }

  render() {
    return <h1>Main page...</h1>;
  }
}

export default Main;
