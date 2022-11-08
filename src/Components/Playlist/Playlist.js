
import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        {/* <!-- Add a TrackList component --> */}
        <TrackList tracks={this.props.playlistTracks}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
