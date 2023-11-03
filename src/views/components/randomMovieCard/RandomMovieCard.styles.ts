import {Assets} from '@iDRIVE/assets';
import {
  fontSizing,
  getWindowWidth,
  hp,
  ImageStyleSheet,
  spacing,
  TextStyleSheet,
  ViewStyleSheet,
  wp,
} from '@iDRIVE/utils';
import {StyleSheet} from 'react-native';

const viewStyles = ViewStyleSheet({
  container: {
    height: hp(460),
    width: getWindowWidth() * 0.75,
    borderRadius: 5,
    borderWidth: wp(3),
    borderColor: Assets.colors.secondary,
    backgroundColor: Assets.colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
});
const textStyles = TextStyleSheet({
  movieText: {
    ...fontSizing(16, 0),
    color: Assets.colors.text,
    textAlign: 'center',
    marginBottom: hp(spacing.l),
    fontWeight: 'bold',
    backgroundColor: Assets.colors.tertiary,
    paddingHorizontal: wp(spacing.m),
    paddingVertical: hp(spacing.s),
  },
});
const imageStyles = ImageStyleSheet({
  emptyImage: {
    width: wp(100),
    height: wp(100),
  },
  movieImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
