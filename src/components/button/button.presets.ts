import { ViewStyle, TextStyle } from "react-native"
import { colors } from "../../utils/colors"
import { scale, verticalScale, moderateVerticalScale } from "../../utils/scale"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingHorizontal: scale(4),
  borderRadius: scale(20),
  justifyContent: "center",
  alignItems: "center",
  marginVertical: verticalScale(8)
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: scale(12),
  fontWeight:'700'
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: colors.white, height: verticalScale(42), } as ViewStyle,
  smallBtn: { ...BASE_VIEW, backgroundColor: colors.white, height: verticalScale(38), } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: moderateVerticalScale(16),
    color: colors.textBlack,
    textAlign: 'center',
    letterSpacing: 0
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
