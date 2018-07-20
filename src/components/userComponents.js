import React, { Component } from 'react';

/* user components */
export class UserDisplayName extends Component {
  render() {
    return (
     <span>{this.props.name}</span>
    )
  }
}
export class UserScreenName extends Component {
  render() {
    return (
      <a href={"http://www.twitter.com/" + this.props.sname}>@{this.props.sname}</a>
    )
  }
}
export class UserImage extends Component {
  render() {
    return (
     <img src={this.props.image} />
    )
  }
}

/* tweet components  */
export class TweetContent extends Component {
  render() {
    return (
      <span>{this.props.content}</span>
    )
  }
}
export class TweetTime extends Component {
  render() {
    return (
     <span>{this.props.time}</span>
    )
  }
}
