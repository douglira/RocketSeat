import React from 'react';
import Slider from 'rc-slider';

import VolumeIcon from 'assets/images/volume.svg';
import ShuffleIcon from 'assets/images/shuffle.svg';
import BackwardIcon from 'assets/images/backward.svg';
import PlayIcon from 'assets/images/play.svg';
import PauseIcon from 'assets/images/pause.svg';
import ForwardIcon from 'assets/images/forward.svg';
import RepeatIcon from 'assets/images/repeat.svg';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

const Player = () => (
  <Container>
    <Current>
      <img
        src="http://all4band.com/storage/works/LMy4hP5DIw2l4NZTlgrx8LppwjGhUok3yNJ4B8ea.jpeg"
        alt="Cover"
      />

      <div>
        <span>
Times like these
        </span>
        <small>
Foo fighters
        </small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Play" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>
1:39
        </span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>
4:25
        </span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
