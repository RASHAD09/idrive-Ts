import {Dimensions, Platform, TextStyle} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const getWindowHeight = () => Dimensions.get('window').height;

export const getWindowWidth = () => Dimensions.get('window').width;

const DESIGN_SCREEN_HEIGHT = 932;
const DESIGN_SCREEN_WIDTH = 430;

// Calculate the adaptive width given the design screen width dimension.
// To be used for style props like: width, marginHorizontal, fontSize, ...
export const wp = (designWidth: number) => {
  return widthPercentageToDP((designWidth * 100) / DESIGN_SCREEN_WIDTH);
};

// Calculate the adaptive height given the design screen height dimension.
// To be used for style props like: height, marginVertical, ...
export const hp = (designHeight: number) => {
  return heightPercentageToDP((designHeight * 100) / DESIGN_SCREEN_HEIGHT);
};

export function fontSizing(size: number, spacing: number): TextStyle {
  return {
    fontSize: Platform.OS === 'ios' ? wp(size) : wp(size) - 1,
    letterSpacing: spacing,
  };
}

export enum spacing {
  xs = 4,
  s = 8,
  m = 16,
  l = 24,
  xl = 32,
  '2xl' = 40,
  '3xl' = 48,
  '4xl' = 56,
}
