import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LatestNewsView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section latest-news-area blog-area blog-grid blog-3-col ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Latest News</h3>
            <a href="blog_classic_right_sidebar.html" className="btn btn-o btn-xs pos-a right-10 pos-tb-center">Visit Blog</a>
          </header>

          <div className="row row-tb-20">


            <div className="blog-post col-xs-12 col-sm-6 col-md-4">
              <article className="entry panel">
                <figure className="entry-media post-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/blog/post_01.jpg">
                  <div className="entry-date">
                    <h4>13</h4>
                    <h6>JUN</h6>
                  </div>
                </figure>
                <div className="entry-wrapper pt-20 pb-10 prl-20">
                  <header className="entry-header">
                    <h4 className="entry-title mb-10 mb-md-15 font-xs-16 font-sm-18 font-md-16 font-lg-16">
                      <a href="blog_single_standard.html">Restaurant Employer Read Clients Orders On His iPad</a>
                    </h4>
                    <div className="entry-meta mb-10">
                      <ul className="tag-info list-inline">
                        <li><i className="icon fa fa-user"></i> By : John Doe</li>
                        <li><i className="icon fa fa-comments"></i>14 Comments </li>
                      </ul>
                    </div>
                  </header>
                  <div className="entry-content">
                    <p className="entry-summary">Vivamus sem massa, cursus at mollis eu, euismod id risus. Vestibulum nunc ante, sagittis ut nisl at, porta porttitor justo. Nam imperdiet im...</p>
                  </div>
                  <footer className="entry-footer text-right">
                    <a href="blog_single_standard.html" className="more-link btn btn-link">Continue reading <i className="icon fa fa-long-arrow-right"></i></a>
                  </footer>
                </div>
              </article>
            </div>



            <div className="blog-post col-xs-12 col-sm-6 col-md-4">
              <article className="entry panel">
                <figure className="entry-media embed-responsive embed-responsive-16by9">
                  <iframe src={`https://player.vimeo.com/video/28786762?portrait=0`}
                    title="2"
                    allowFullScreen={true}
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"></iframe>
                  <div className="entry-date">
                    <h4>13</h4>
                    <h6>JUN</h6>
                  </div>
                </figure>
                <div className="entry-wrapper pt-20 pb-10 prl-20">
                  <header className="entry-header">
                    <h4 className="entry-title mb-10 mb-md-15 font-xs-16 font-sm-18 font-md-16 font-lg-16">
                      <a href="blog_single_vimeo.html">Amazing Classic Interior Design With Perfect Lighting</a>
                    </h4>
                    <div className="entry-meta mb-10">
                      <ul className="tag-info list-inline">
                        <li><i className="icon fa fa-user"></i> By : John Doe</li>
                        <li><i className="icon fa fa-comments"></i> 14 Comments </li>
                      </ul>
                    </div>
                  </header>
                  <div className="entry-content">
                    <p className="entry-summary">Vivamus sem massa, cursus at mollis eu, euismod id risus. Vestibulum nunc ante, sagittis ut nisl at, porta porttitor justo. Nam imperdiet im...</p>
                  </div>
                  <footer className="entry-footer text-right">
                    <a href="blog_single_vimeo.html" className="more-link btn btn-link">Continue reading <i className="icon fa fa-long-arrow-right"></i></a>
                  </footer>
                </div>
              </article>
            </div>


            <div className="blog-post col-xs-12 col-sm-6 col-md-4">
              <article className="entry panel">
                <figure className="entry-media embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/mcixldqDIEQ?v=mcixldqDIEQ"
                    title="1"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen={true}></iframe>
                  <div className="entry-date">
                    <h4>13</h4>
                    <h6>JUN</h6>
                  </div>
                </figure>
                <div className="entry-wrapper pt-20 pb-10 prl-20">
                  <header className="entry-header">
                    <h4 className="entry-title mb-10 mb-md-15 font-xs-16 font-sm-18 font-md-16 font-lg-16">
                      <a href="blog_single_youtube.html">English Breakfast Tea With Tasty Donut Desserts</a>
                    </h4>
                    <div className="entry-meta mb-10">
                      <ul className="tag-info list-inline">
                        <li><i className="icon fa fa-user"></i> By : John Doe</li>
                        <li><i className="icon fa fa-comments"></i> 14 Comments </li>
                      </ul>
                    </div>
                  </header>
                  <div className="entry-content">
                    <p className="entry-summary">Vivamus sem massa, cursus at mollis eu, euismod id risus. Vestibulum nunc ante, sagittis ut nisl at, porta porttitor justo. Nam imperdiet im...</p>
                  </div>
                  <footer className="entry-footer text-right">
                    <a href="blog_single_youtube.html" className="more-link btn btn-link">Continue reading <i className="icon fa fa-long-arrow-right"></i></a>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section subscribe-area ptb-40 t-center">
          <div className="newsletter-form">
            <h4 className="mb-20"><i className="fa fa-envelope-o color-green mr-10"></i>Sign up for our weekly email newsletter</h4>
            <p className="mb-20 color-mid">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi animi magni accusantium architecto possimus.</p>
            <form method="post" action="#">
              <div className="input-group mb-10">
                <input type="email" className="form-control bg-white" placeholder="Email Address" required="required" />
                <span className="input-group-btn">
                  <button className="btn" type="submit">Subscribe</button>
                </span>
              </div>
            </form>
            <p className="color-muted"><small>We’ll never share your email address with a third-party.</small> </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LatestNewsView;