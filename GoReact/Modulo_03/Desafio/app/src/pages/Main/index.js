import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import { MAPBOX_TOKEN } from 'config/mapbox';

import { Container } from './styles';

const width =
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const height =
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

class Main extends Component {
  state = {
    viewport: {
      width,
      height,
      latitude: 0,
      longitude: 0,
      zoom: 15,
    },
  };

  componentDidMount() {
    this.initialLocation();
  }

  handleClick = (event) => {
    const { lngLat } = event;
  };

  initialLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const viewport = { ...this.state.viewport };
      viewport.latitude = pos.coords.latitude;
      viewport.longitude = pos.coords.longitude;

      this.setState({ viewport });
    });
  };

  render() {
    return (
      <Container>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this.handleClick}
        />
      </Container>
    );
  }
}

export default Main;
