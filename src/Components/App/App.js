import "./App.css";
import Playlist from "../Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Choccy Milk",
          artist: "Lactose Negros",
          album: "helpme",
          id: 1,
        },
      ],
      playlistName: "Playlist Name",
      playlistTracks: [
        {
          name: "Have a Sugar",
          artist: "Which one's pink",
          album: "the floor",
          id: 0,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    console.log(track);
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      let newPlaylistTracks = [ ...this.state.playlistTracks ];
      newPlaylistTracks.push(track);
      this.setState({ playlistTracks: newPlaylistTracks });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              results={this.state.searchResults}
              onAdd={this.addTrack}
            />
            {/* <!-- Add a SearchResults component -->
        <!-- Add a Playlist component --> */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
