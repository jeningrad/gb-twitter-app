import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="twt__search">
        <input type="text" placeholder="Search Twitter" />
        <button type="submit">GO</button>
      </div>
    )
  }
}
