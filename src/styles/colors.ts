interface Colors {
  white: string;
  black: string;
  black90: string;
  background: string;
}

const COLORS: Colors = {
  white: '#FFFFFF',
  black: '#000000',
  black90: '#2f2f2f',
  background: '#FFFFFF',
};

interface ThemeColor {
  text: string;
  background: string;
}

const LIGHT_COLOR: ThemeColor = {
  text: COLORS.black,
  background: COLORS.white,
} as const;

const DARK_COLOR: ThemeColor = {
  text: COLORS.white,
  background: COLORS.black90,
} as const;

export { COLORS, LIGHT_COLOR, DARK_COLOR, type Colors, type ThemeColor };
