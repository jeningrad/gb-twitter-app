import React, { Component } from 'react';
import jsonResponse from './mockTweets.js';
import { Tweet } from './components/tweet';
import { SearchBar } from './components/searchBar';

// import { App } from './App';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			srtString: undefined,
			bool: false
		}
	}

	redirectToRequestToken() {
    window.location.href = "http://localhost:3001/request-token";
  }

  render() {
    return (
      <div>
				<SearchBar />
        <button onClick={this.redirectToRequestToken} type="submit" className="twt__signin-btn"></button>
					<div className="twt__twitter-feed">
		        <Tweet tweets={jsonResponse} />
		      </div>
      </div>
		)
  }
}
