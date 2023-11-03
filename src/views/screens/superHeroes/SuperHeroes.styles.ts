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
  background: {
    backgroundColor: Assets.colors.background,
  },
  container: {
    gap: hp(spacing.m),
    paddingBottom: hp(spacing.m),
    paddingHorizontal: hp(spacing.m),
  },
  button: {
    width: '100%',
    backgroundColor: Assets.colors.secondary,
    borderRadius: 5,
    height: hp(56),
    marginTop: hp(spacing.xl),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroCard: {
    backgroundColor: Assets.colors.tertiary,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Assets.colors.secondary,
    flexGrow: 1 / 3,
    flexShrink: 1,
    flex: 1,
    marginHorizontal: wp(spacing.xs),
    minHeight: hp(200),
  },
  header: {
    width: '100%',
    backgroundColor: Assets.colors.dark,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(spacing.m),
    paddingVertical: hp(spacing.l),
  },
  safeArea: {
    backgroundColor: Assets.colors.dark,
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
    marginTop: hp(spacing.s),
    textAlign: 'center',
    fontWeight: '600',
  },
  highlightedText: {
    color: Assets.colors.secondary,
    fontWeight: 'bold',
  },
});
const imageStyles = ImageStyleSheet({
  heroImage: {
    width: '100%',
    height: hp(125),
  },
});

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
});

export default styles;
