import React, { Component } from 'react'
import { cSearchBar } from './index.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchWord: ''
    }
  }

  handleSearchWordChange (searchWord) {
    this.setState({searchWord})
    this.props.onSearchWordChange(searchWord)
  }

  render () {
    const { searchWord } = this.state

    return (
      <div className={cSearchBar}>
        <input
          value={searchWord}
          onChange={e => this.handleSearchWordChange(e.target.value)}
        />
      </div>
    )
  }
};

export default SearchBar
