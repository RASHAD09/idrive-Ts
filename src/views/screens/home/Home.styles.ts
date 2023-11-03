import {Assets} from '@iDRIVE/assets';
import {
  fontSizing,
  getWindowHeight,
  hp,
  ImageStyleSheet,
  spacing,
  TextStyleSheet,
  ViewStyleSheet,
  wp,
} from '@iDRIVE/utils';
import {StyleSheet} from 'react-native';

const viewStyles = ViewStyleSheet({
  button: {
    width: '100%',
    backgroundColor: Assets.colors.secondary,
    borderRadius: 5,
    height: hp(56),
    marginTop: hp(spacing.xl),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textStyles = TextStyleSheet({
  buttonText: {
    color: Assets.colors.text,
    ...fontSizing(16, 0),
    fontWeight: '600',
  },
  text: {
    color: Assets.colors.text,
    ...fontSizing(16, 0),
    marginTop: hp(spacing.l),
  },
  resetText: {
    color: Assets.colors.secondary,
    ...fontSizing(16, 0),
    marginTop: hp(spacing.xl),
  },
  highlightedText: {
    color: Assets.colors.secondary,
    fontWeight: 'bold',
  },
});
const imageStyles = ImageStyleSheet({
  background: {
    backgroundColor: Assets.colors.background,
    height: getWindowHeight() / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(spacing.m),
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
