import React, { Component } from 'react';

import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  }

  componentWillMount() {

  }

  componentDidUpdate() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        console.log(response);
      })
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data.slice(0, 1);
        const updatePosts = posts.map(post => {
          return {
            ...post, author: 'Max'
          }
        });
        this.setState({ posts: updatePosts });
        console.log(response);
      });
  }

  render() {
    return (
      <div></div >
    )
  }

}

export default Home;