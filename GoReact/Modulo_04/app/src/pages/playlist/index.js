import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsAction } from 'store/ducks/playlistDetails';

import ClockIcon from 'assets/images/clock.svg';
import PlusIcon from 'assets/images/plus.svg';

import Loading from 'components/Loading';
import { Container, Header, SongList } from './styles';

class Playlist extends Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>
PLAYLIST
            </span>
            <h1>
              {playlist.title}
            </h1>
            {!!playlist.songs && (
            <p>
              {playlist.songs.length}
              {' '}
música (s)
            </p>
            )}

            <button type="button">
PLAY
            </button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>
Título
            </th>
            <th>
Artista
            </th>
            <th>
Álbum
            </th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>
Nenuma música adicionada
                </td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>
                    {song.title}
                  </td>
                  <td>
                    {song.author}
                  </td>
                  <td>
                    {song.album}
                  </td>
                  <td>
3:26
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = ({ playlistDetails }) => ({
  playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
