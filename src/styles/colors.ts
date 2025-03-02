interface Colors {
  white: string;
  black: string;
}

const LIGHT_COLOR: Colors = {
  white: '#FFFFFF',
  black: '#000000',
} as const;

const DARK_COLOR: Colors = {
  white: '#000000',
  black: '#FFFFFF',
} as const;

export {LIGHT_COLOR, DARK_COLOR, type Colors};
