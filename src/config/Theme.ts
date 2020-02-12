const colors = {
  primary: '#98B7D7', // Color for buttons or links
  secondary: '#5E62A3',
  warning: '#FA6900',
  error: '#D32F2F',
  neonPink: '#DA2EB8',
  neonBlue: '#0AB7EB',
  bg: '#fff', // Background color
  white: '#fff',
  grey: {
    main: 'rgba(23, 23, 23)',
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
    bluish: '#0E1114',
  },
};

const gradients = {
  primary: (angle: number) => `linear-gradient(${angle}deg, ${colors.primary}, ${colors.secondary})`,
  warning: (angle: number) => `linear-gradient(${angle}deg, ${colors.warning}, ${colors.error})`,
  neonBlue: (angle: number) => `linear-gradient(${angle}deg, ${colors.neonBlue}, ${colors.secondary})`,
  neonPink: (angle: number) => `linear-gradient(${angle}deg, ${colors.neonPink}, ${colors.error})`,
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  smallest: '0.75rem',
  small: '0.9rem',
  medium: '1.5rem',
  big: '2.9rem',
  biggest: '4.5rem',
};

export const theme = {
  colors,
  transitions,
  fontSize,
  gradients
};

export type Theme = typeof theme;
