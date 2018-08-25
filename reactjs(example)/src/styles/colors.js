import Color from 'color';

export default {
  main: {
    primary: {
      darken: '#6d8e46',
      normal: '#9ccc65',
      lighten: '#afd683',
    },

    secondary: {
      darken: '#45568C',
      normal: '#6B84D9',
      lighten: '#98AFFF',
    },

    white: {
      darken: Color('#FFF')
        .darken(0.05)
        .hex(),
      normal: '#FFF',
    },
    lighter: {
      darken: Color('#EEE')
        .darken(0.05)
        .hex(),
      normal: '#EEE',
      lighten: Color('#EEE')
        .lighten(0.05)
        .hex(),
    },
    light: {
      darken: Color('#DDD')
        .darken(0.05)
        .hex(),
      normal: '#DDD',
      lighten: Color('#DDD')
        .lighten(0.05)
        .hex(),
    },
    smoke: {
      darken: Color('#CCC')
        .darken(0.05)
        .hex(),
      normal: '#CCC',
      lighten: Color('#CCC')
        .lighten(0.05)
        .hex(),
    },
    shadow: {
      darken: Color('#BBB')
        .darken(0.05)
        .hex(),
      normal: '#BBB',
      lighten: Color('#BBB')
        .lighten(0.05)
        .hex(),
    },
    regular: {
      darken: Color('#999')
        .darken(0.1)
        .hex(),
      normal: '#999',
      lighten: Color('#999')
        .lighten(0.1)
        .hex(),
    },
    dark: {
      darken: Color('#666')
        .darken(0.1)
        .hex(),
      normal: '#666',
      lighten: Color('#666')
        .lighten(0.1)
        .hex(),
    },
    darker: {
      darken: Color('#333')
        .darken(0.1)
        .hex(),
      normal: '#333',
      lighten: Color('#333')
        .lighten(0.1)
        .hex(),
    },
    black: {
      normal: '#000',
      lighten: Color('#000')
        .lighten(0.05)
        .hex(),
    },

    transparent: 'transparent',
    darkTransparent: 'rgba(0, 0, 0, 0.6)',
    whiteTransparent: 'rgba(255, 255, 255, 0.3)',

    success: '#2e7d32',
    danger: '#E37A7A',
  },
};
