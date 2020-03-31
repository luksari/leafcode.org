const colors = {
  primary: '#633C78', // Color for buttons or links
  secondary: '#633C78',
  accent: '#F2B31B',
  accentSecondary: '#B1800C',
  warning: '#FA6900',
  error: '#D32F2F',
  neonPink: '#DA2EB8',
  neonBlue: '#0AB7EB',
  bgLight: '#ffffff', // Background color
  darkText: '#231F20',
  lightText: '#ffffff',
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
  accent: (angle: number) => `linear-gradient(${angle}deg, ${colors.accent}, ${colors.accentSecondary})`,
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

export type ThemeInterface = typeof theme;
