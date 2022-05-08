import { TextStyle } from "react-native"
import { colors } from "../../utils/colors"
import { verticalScale } from "../../utils/scale"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  color: colors.white,
  fontSize: verticalScale(16),
  fontWeight:'600'
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "700" } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, color: colors.textBlack } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
