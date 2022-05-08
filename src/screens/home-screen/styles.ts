import { ViewStyle, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { scale, verticalScale } from '../../utils/scale'

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent:'center',
    paddingHorizontal: scale(20)
  } as ViewStyle,  
  greeting:{
    textAlign:'center',
    marginBottom: verticalScale(5)
  },
  buttonWrapper:{
    marginVertical: verticalScale(5)
  }
})
