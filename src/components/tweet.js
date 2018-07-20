import React, { Component } from 'react';
import { UserDisplayName, UserScreenName, UserImage, TweetContent, TweetTime } from './userComponents'

export class Tweet extends Component {
  render() {
    return (
      <div>
        {this.props.tweets.map(tweet =>
          <div class="twt__tweet">

            <div class="twt__tweet-left">
              <UserImage image={tweet.user.profile_image_url} />
            </div>

            <div class="twt__tweet-right">
              <div class="twt__user-info">
                <span class="twt__user--name"><UserDisplayName name={tweet.user.name} /></span>
                <span class="twt__user--sname"><UserScreenName sname={tweet.user.screen_name} /></span>
                <span class="twt__user--time"><TweetTime time={tweet.created_at} /></span>
              </div>
              <span class="twt__text"><TweetContent content={tweet.text} /></span>
            </div>

          </div>
        )}
      </div>
    )
  }
}
