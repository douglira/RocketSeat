import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'http://i.imgur.com/JDIMEbk.png',
        author: 'Mário Gonçalves',
        createdAt: '3 min',
        content:
          'Lorem ipsum netus nullam dapibus rutrum aenean tempus cras, nunc malesuada fermentum pharetra quis mattis aptent, ut dictum tristique rutrum maecenas volutpat nibh. habitasse faucibus odio amet aenean curabitur adipiscing feugiat scelerisque posuere, diam sapien blandit euismod class curabitur enim phasellus turpis condimentum, lacinia est accumsan leo venenatis leo tincidunt nam. libero tempus nam conubia adipiscing elit sem eleifend, quisque interdum class aliquet etiam. eleifend sed vivamus placerat rutrum maecenas phasellus euismod quis suspendisse, litora proin molestie sociosqu adipiscing erat nec amet turpis, litora sem laoreet est elit hac fringilla conubia.',
      },
      {
        id: 2,
        avatar: 'http://i.imgur.com/JDIMEbk.png',
        author: 'Patrícia Almeida',
        createdAt: '3 min',
        content:
          'Lorem ipsum netus nullam dapibus rutrum aenean tempus cras, nunc malesuada fermentum pharetra quis mattis aptent, ut dictum tristique rutrum maecenas volutpat nibh. habitasse faucibus odio amet aenean curabitur adipiscing feugiat scelerisque posuere, diam sapien blandit euismod class curabitur enim phasellus turpis condimentum, lacinia est accumsan leo venenatis leo tincidunt nam. libero tempus nam conubia adipiscing elit sem eleifend, quisque interdum class aliquet etiam. eleifend sed vivamus placerat rutrum maecenas phasellus euismod quis suspendisse, litora proin molestie sociosqu adipiscing erat nec amet turpis, litora sem laoreet est elit hac fringilla conubia.',
      },
      {
        id: 3,
        avatar: 'http://i.imgur.com/JDIMEbk.png',
        author: 'Carlos Alberto',
        createdAt: '3 min',
        content:
          'Lorem ipsum netus nullam dapibus rutrum aenean tempus cras, nunc malesuada fermentum pharetra quis mattis aptent, ut dictum tristique rutrum maecenas volutpat nibh. habitasse faucibus odio amet aenean curabitur adipiscing feugiat scelerisque posuere, diam sapien blandit euismod class curabitur enim phasellus turpis condimentum, lacinia est accumsan leo venenatis leo tincidunt nam. libero tempus nam conubia adipiscing elit sem eleifend, quisque interdum class aliquet etiam. eleifend sed vivamus placerat rutrum maecenas phasellus euismod quis suspendisse, litora proin molestie sociosqu adipiscing erat nec amet turpis, litora sem laoreet est elit hac fringilla conubia.',
      },
      {
        id: 4,
        avatar: 'http://i.imgur.com/JDIMEbk.png',
        author: 'Fábio de Souza',
        createdAt: '3 min',
        content:
          'Lorem ipsum netus nullam dapibus rutrum aenean tempus cras, nunc malesuada fermentum pharetra quis mattis aptent, ut dictum tristique rutrum maecenas volutpat nibh. habitasse faucibus odio amet aenean curabitur adipiscing feugiat scelerisque posuere, diam sapien blandit euismod class curabitur enim phasellus turpis condimentum, lacinia est accumsan leo venenatis leo tincidunt nam. libero tempus nam conubia adipiscing elit sem eleifend, quisque interdum class aliquet etiam. eleifend sed vivamus placerat rutrum maecenas phasellus euismod quis suspendisse, litora proin molestie sociosqu adipiscing erat nec amet turpis, litora sem laoreet est elit hac fringilla conubia.',
      },
    ],
  };

  renderPosts = () => this.state.posts.map(post => <Post key={post.id} data={post} />);

  render() {
    return (
      <div className="container">
        <Header />
        {this.renderPosts()}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
