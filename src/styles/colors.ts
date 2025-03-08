/************************************
 * Colors 인터페이스 및 COLORS 상수
 ************************************/
export interface Colors {
  transparent: string;

  black000000: string;
  black101010: string;
  black202020: string;
  black313639: string;
  black323232: string;
  black4d4d4d: string;
  black616161: string;
  black808080: string;
  black999999: string;
  blackb8b8b8: string;

  whiteFFFFFF: string;
  f3f4f6: string;

  blue500: string;
  blue700: string;

  d9d9d9: string;
  e5e5e5: string;

  red500: string;
  red700: string;
}

export const COLORS: Colors = {
  transparent: 'rgba(255, 255, 255, 0)',

  black000000: '#000000',
  black101010: '#101010',
  black202020: '#202020',
  black313639: '#313639',
  black323232: '#323232',
  black4d4d4d: '#4d4d4d',
  black616161: '#616161',
  black808080: '#808080',
  black999999: '#999999',
  blackb8b8b8: '#b8b8b8',

  whiteFFFFFF: '#FFFFFF',
  f3f4f6: '#F3F4F6',

  blue500: '#4192EF',
  blue700: '#18A2FD',

  d9d9d9: '#D9D9D9',
  e5e5e5: '#E5E5E5',

  red500: '#EA333E',
  red700: '#FE0135',
};

/************************************
 * LIGHT_COLOR, DARK_COLOR 인터페이스
 ************************************/
export interface ThemeColor {
  'themes-background-background': string;
  'themes-background-background-blue': string;
  'themes-background-background-inverted': string;
  'themes-background-background-muted': string;
  'themes-background-background-red': string;

  'themes-border-border': string;
  'themes-border-border-blue': string;
  'themes-border-border-inverted': string;
  'themes-border-border-muted': string;
  'themes-border-border-neutral': string;
  'themes-border-border-red': string;

  'themes-icon-icon': string;
  'themes-icon-icon-blue': string;
  'themes-icon-icon-inverted': string;
  'themes-icon-icon-muted': string;
  'themes-icon-icon-red': string;
  'themes-icon-icon-subtle': string;

  'themes-text-text': string;
  'themes-text-text-blue': string;
  'themes-text-text-inverted': string;
  'themes-text-text-muted': string;
  'themes-text-text-red': string;

  'themes-transparent': string;
}

/************************************
 * Light Mode 디자인 토큰
 ************************************/
export const LIGHT_COLOR: ThemeColor = {
  // backgrounds
  'themes-background-background': COLORS.whiteFFFFFF,
  'themes-background-background-blue': COLORS.blue500,
  'themes-background-background-inverted': COLORS.black101010,
  'themes-background-background-muted': COLORS.f3f4f6,
  'themes-background-background-red': COLORS.red500,

  // borders
  'themes-border-border': COLORS.whiteFFFFFF,
  'themes-border-border-blue': COLORS.blue500,
  'themes-border-border-inverted': COLORS.black101010,
  'themes-border-border-muted': COLORS.e5e5e5,
  'themes-border-border-neutral': COLORS.d9d9d9,
  'themes-border-border-red': COLORS.red500,

  // icons
  'themes-icon-icon': COLORS.black000000,
  'themes-icon-icon-blue': COLORS.blue500,
  'themes-icon-icon-inverted': COLORS.f3f4f6,
  'themes-icon-icon-muted': COLORS.black4d4d4d,
  'themes-icon-icon-red': COLORS.red500,
  'themes-icon-icon-subtle': COLORS.blackb8b8b8,

  // texts
  'themes-text-text': COLORS.black000000,
  'themes-text-text-blue': COLORS.blue500,
  'themes-text-text-inverted': COLORS.whiteFFFFFF,
  'themes-text-text-muted': COLORS.black999999,
  'themes-text-text-red': COLORS.red500,

  // transparent
  'themes-transparent': COLORS.transparent,
} as const;

/************************************
 * Dark Mode 디자인 토큰
 ************************************/
export const DARK_COLOR: ThemeColor = {
  // backgrounds
  'themes-background-background': COLORS.black101010,
  'themes-background-background-blue': COLORS.blue700,
  'themes-background-background-inverted': COLORS.whiteFFFFFF,
  'themes-background-background-muted': COLORS.black202020,
  'themes-background-background-red': COLORS.red700,

  // borders
  'themes-border-border': COLORS.black101010,
  'themes-border-border-blue': COLORS.blue700,
  'themes-border-border-inverted': COLORS.whiteFFFFFF,
  'themes-border-border-muted': COLORS.black313639,
  'themes-border-border-neutral': COLORS.black323232,
  'themes-border-border-red': COLORS.red700,

  // icons
  'themes-icon-icon': COLORS.f3f4f6,
  'themes-icon-icon-blue': COLORS.blue700,
  'themes-icon-icon-inverted': COLORS.black000000,
  'themes-icon-icon-muted': COLORS.blackb8b8b8,
  'themes-icon-icon-red': COLORS.red700,
  'themes-icon-icon-subtle': COLORS.black4d4d4d,

  // texts
  'themes-text-text': COLORS.f3f4f6,
  'themes-text-text-blue': COLORS.blue700,
  'themes-text-text-inverted': COLORS.black000000,
  'themes-text-text-muted': COLORS.black616161,
  'themes-text-text-red': COLORS.red700,

  // transparent
  'themes-transparent': COLORS.transparent,
} as const;
