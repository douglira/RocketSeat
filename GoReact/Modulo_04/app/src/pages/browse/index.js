import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>
Navegar
    </Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
          alt="Playlist"
        />
        <strong>
Rock dos bons
        </strong>
        <p>
Os melhores rocks para se escutar enquanto programa!
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
          alt="Playlist"
        />
        <strong>
Rock dos bons
        </strong>
        <p>
Os melhores rocks para se escutar enquanto programa!
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
          alt="Playlist"
        />
        <strong>
Rock dos bons
        </strong>
        <p>
Os melhores rocks para se escutar enquanto programa!
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
          alt="Playlist"
        />
        <strong>
Rock dos bons
        </strong>
        <p>
Os melhores rocks para se escutar enquanto programa!
        </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
