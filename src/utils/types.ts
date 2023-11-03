import {ImageStyle, TextStyle, ViewStyle} from 'react-native/types';

// Trick to convert view style object `obj` type form {[key in string]: ViewStyle} to
// {[key in keysof typeof obj]: ViewStyle }
export function ViewStyleSheet<V extends string>(obj: Record<V, ViewStyle>) {
  return obj;
}

// Trick to convert text style object `obj` type form {[key in string]: TextStyle} to
// {[key in keysof typeof obj]: TextStyle }
export function TextStyleSheet<V extends string>(obj: Record<V, TextStyle>) {
  return obj;
}

// Trick to convert image style object `obj` type form {[key in string]: ImageStyle} to
// {[key in keysof typeof obj]: ImageStyle }
export function ImageStyleSheet<V extends string>(obj: Record<V, ImageStyle>) {
  return obj;
}
