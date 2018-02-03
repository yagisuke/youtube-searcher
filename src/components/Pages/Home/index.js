import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Templates from '../../Templates';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';
import VideoList from './video-list';

const API_KEY = 'AIzaSyDJS5UK-ExFAPj2QFKCHtNUKFmUsZwWrgo';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleSearchWordChange('TOKYO OLYMPIC 2020');
  }

  handleSearchWordChange(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const handleSearchWordChange = _.debounce(searchWord => {
      this.handleSearchWordChange(searchWord)
    }, 300);

    return (
      <Templates>
        <div className='clearfix'>
          <SearchBar onSearchWordChange={handleSearchWordChange} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}
          />
        </div>
      </Templates>
    );
  }
};

export default Home;
