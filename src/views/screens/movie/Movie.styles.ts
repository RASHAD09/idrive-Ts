import {Assets} from '@iDRIVE/assets';
import {
  fontSizing,
  getWindowHeight,
  hp,
  ImageStyleSheet,
  spacing,
  TextStyleSheet,
  ViewStyleSheet,
} from '@iDRIVE/utils';
import {StyleSheet} from 'react-native';

const viewStyles = ViewStyleSheet({
  background: {
    backgroundColor: Assets.colors.background,
  },
  container: {
    paddingHorizontal: hp(spacing.m),
    paddingBottom: hp(spacing.l),
  },
  backContainer: {
    position: 'absolute',
    top: hp(spacing.m),
    left: hp(spacing.m),
    zIndex: 10,
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
    ...fontSizing(14, 0),
    marginTop: hp(spacing.m),
    textAlign: 'center',
    fontWeight: '600',
  },
  rating: {
    color: Assets.colors.text,
    ...fontSizing(20, 0),
    marginTop: hp(spacing.s),
    textAlign: 'center',
    fontWeight: '600',
  },
  title: {
    color: Assets.colors.text,
    ...fontSizing(32, 0),
    marginTop: hp(spacing.m),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  highlightedText: {
    color: Assets.colors.secondary,
    fontWeight: 'bold',
    ...fontSizing(20, 0),
    textAlign: 'left',
    marginTop: hp(spacing.s),
  },
  subtitle: {
    color: Assets.colors.primary,
    fontWeight: 'bold',
    ...fontSizing(14, 0),
    textAlign: 'left',
    marginTop: hp(spacing.m),
  },
  normalText: {
    color: Assets.colors.text,
    fontWeight: '600',
    ...fontSizing(14, 0),
    textAlign: 'left',
    marginTop: hp(spacing.s),
  },
});
const imageStyles = ImageStyleSheet({
  poster: {
    width: '100%',
    height: getWindowHeight() / 2.5,
    justifyContent: 'flex-end',
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
