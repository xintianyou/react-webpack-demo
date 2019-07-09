import React from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    }
  }
  async aa() {
    let res = await this.$api.get(`newsBanner/queryNewsBanner`)
    const banners = res.data;
    this.setState({ banners });
  }
  render() {
    let reactSwipeEl;
    return (
      <div>
        {/* <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}
        >
          {this.state.banners.map(banner =>
            <div
              style={{ width: '100%' }}
              key={banner.picture.toString()}
              style={{ height: '480px', width: '100%', backgroundImage: 'url(' + banner.picture + ') top center no-repeat' }}> 
            </div>
          )}
        </ReactSwipe>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
        <h2>home</h2>
      </div>
    )
  }
  componentDidMount() {
    this.aa()
  }
}