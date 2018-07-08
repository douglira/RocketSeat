import React from 'react';

import ClockIcon from 'assets/images/clock.svg';
import PlusIcon from 'assets/images/plus.svg';

import { Container, Header, SongList } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
        alt="Playlist"
      />

      <div>
        <span>
PLAYLIST
        </span>
        <h1>
Rock Forever
        </h1>
        <p>
13 músicas
        </p>

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
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>
Papercut
          </td>
          <td>
Linkin Park
          </td>
          <td>
Hybrid Theory
          </td>
          <td>
3:26
          </td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
