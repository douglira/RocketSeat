import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from 'store/ducks/playlists';

import Loading from 'components/Loading';

import AddPlaylistIcon from 'assets/images/add_playlist.svg';
import { Container, NewPlaylist, Nav } from './styles';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">
Navegar
              </Link>
            </li>
            <li>
              <a href="aaa">
Rádio
              </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>
SUA BIBLIOTECA
              </span>
            </li>
            <li>
              <a href="aaa">
Seu Daily Mix
              </a>
            </li>
            <li>
              <a href="aaa">
Tocados recentemente
              </a>
            </li>
            <li>
              <a href="aaa">
Músicas
              </a>
            </li>
            <li>
              <a href="aaa">
Álbums
              </a>
            </li>
            <li>
              <a href="aaa">
Artistas
              </a>
            </li>
            <li>
              <a href="aaa">
Estações
              </a>
            </li>
            <li>
              <a href="aaa">
Arquivos locais
              </a>
            </li>
            <li>
              <a href="aaa">
Vídeos
              </a>
            </li>
            <li>
              <a href="aaa">
Podcasts
              </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>
PLAYLISTS
              </span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>
                  {playlist.title}
                </Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
