import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';

class HomeView extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    console.log("component willMount;");
  }

  componentDidUpdate() {
    // axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(response => {
    //     //console.log(response);
    //   })
  }

  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => {
    //     const posts = response.data.slice(0, 1);
    //     const updatePosts = posts.map(post => {
    //       return {
    //         ...post, author: 'Max'
    //       }
    //     });
    //     this.setState({ posts: updatePosts });
    //     //console.log(response);
    //   });
  }

  render() {
    const FETCH_CATEGORY = gql`
    query fetch_category {
      sttm_category_v {
        category_id, 
        description,
        language_id,
        create_at
      }
    }`;

    return (
      <React.Fragment>
        <div className="page-container ptb-10">
          <div className="container">
            <div className="section deals-header-area ptb-30">
              <div className="row row-tb-20">
                <div className="col-xs-12 col-md-4 col-lg-3">
                  <aside>
                    <ul className="nav-coupon-category panel">
                      <Query query={FETCH_CATEGORY}>
                        {({ loading, error, data }) => {
                          if (loading) return <div>Fetching</div>
                          if (error) {
                            console.log(error)
                            return (
                              <div>error</div>
                            )
                          }

                          const categories = data.sttm_category_v
                          console.log(data);
                          return (
                            <React.Fragment>
                              {categories.map(s =>
                                <li><Link to={{ pathname: "/" }}><i className="fa fa-cutlery"></i>{s.description}</Link></li>)}
                            </React.Fragment>
                          )
                        }}
                      </Query>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeView;