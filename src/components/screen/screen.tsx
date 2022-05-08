import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {ScreenProps} from './screen.props';
import {isNonScrolling, offsets, presets} from './screen.presets';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeArea();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};
  const insetStyle = {paddingTop: props.unsafe ? 0 : insets.top};
  const keyboardDismiss = props.enableKeyboardDismiss
    ? props.enableKeyboardDismiss
    : false;
  // const keyboardVerticalOffset = Platform.OS === 'ios' ?

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      {keyboardDismiss ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={[preset.inner, style, insetStyle]}>
            {props.children}
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
      )}
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeArea();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};
  const insetStyle = {paddingTop: props.unsafe ? 0 : insets.top};
  const keyboardDismiss = props.enableKeyboardDismiss
    ? props.enableKeyboardDismiss
    : false;

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}>
          {keyboardDismiss ? (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              {props.children}
            </TouchableWithoutFeedback>
          ) : (
            <>{props.children}</>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
