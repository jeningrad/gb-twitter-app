import React, { Component } from 'react';
import jsonResponse from './mockTweets.js';
import { Tweet } from './components/tweet';
import { SearchBar } from './components/searchBar';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false,
			tokens: window.location.search
		}
	}

	componentDidMount() {
  	this.getTwitterUser()
  }

	getTwitterUser() {
		fetch("http://127.0.0.1:3001/access-token"+window.location.search)
		  .then(user => user.json())
			.then(user => this.setState({ user: user }));
	}

  render() {
    if(this.state.user) {
			return (
	      <div className="twt__twitter-feed">
					<SearchBar />

					<p>[User Object response here]: {this.state.user.name}</p>

					<Tweet tweets={jsonResponse}/>
	      </div>
			)
		}
		return(
			<div>LOADING...</div>
		)
  }
}
