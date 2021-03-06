import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../text/text';
import {viewPresets, textPresets} from './button.presets';
import {ButtonProps} from './button.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    disabled,
    ...rest
  } = props;

  const viewStyle = [viewPresets[preset] || viewPresets.primary, styleOverride];
  const textStyle = [textPresets.primary, textStyleOverride];

  const content = children || <Text tx={tx} text={text} style={textStyle} />;

  return (
    <TouchableOpacity
      style={[viewStyle, {opacity: disabled ? 0.7 : 1}]}
      disabled={disabled}
      {...rest}>
      {content}
    </TouchableOpacity>
  );
}
