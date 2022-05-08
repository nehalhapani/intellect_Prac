import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from 'react-native'
import { colors } from '../../utils/colors'
import { scale, verticalScale } from '../../utils/scale'

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: scale(20)
  } as ViewStyle,  

  // Top view
  titleText:{
    fontSize: verticalScale(18),
    lineHeight: verticalScale(26),
    marginVertical:scale(20)
  } as TextStyle,
  cancelIcon:{
    height: verticalScale(16),
    width: scale(16),
    tintColor: colors.white,
    resizeMode:'contain',
  } as ImageStyle,
  flexRowContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  } as ViewStyle,
  rescueText:{
    fontSize: verticalScale(13),
    lineHeight: verticalScale(26),
  } as TextStyle,
  flexWrapperMain:{
    flex: 1,
    marginVertical: verticalScale(10)
  },
  flexWrapper1:{
    flex: 1, alignItems: 'flex-end'
  } as ViewStyle,
  flexWrapper7:{
    flex: 7
  } as ViewStyle,

  // Slider styles
  trackContainer:{
    flex:1,
    marginHorizontal: scale(20),
    marginBottom: verticalScale(20)
  } as ViewStyle,
  trackHeight:{
    height: verticalScale(16),
    borderRadius: scale(10)
  } as ViewStyle,
  thumb:{
    height: scale(24),
    width: scale(24),
    borderRadius: scale(12),
    borderWidth: scale(4),
    borderColor: colors.secondryLight
  } as ViewStyle,

  // Circular Progress
  progressContainer:{
    flex: 2,
    justifyContent: 'center',
    alignItems:'center',
  } as ViewStyle,
  progressWrapper:{
    height: scale(212),
    width: scale(212),
    borderRadius: scale(106),
  } as ViewStyle,
  innderCircleWrapper: {
    height: scale(200),
    width: scale(200),
    borderRadius: scale(100), 
    borderWidth: 26, 
    borderColor: colors.primaryLight
  }as ViewStyle,
  innerCircle:{
    height: scale(148),
    width: scale(148),
    borderRadius: scale(74),
    overflow: 'hidden',
    backgroundColor: colors.secondry,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  } as ViewStyle,
  innerCircleText:{
    fontSize: verticalScale(36),
    lineHeight: verticalScale(50),
    fontWeight:'bold',
  } as TextStyle,
  outerCircleDashed:{
    height: scale(280),
    width: scale(280),
    borderRadius: scale(140),
    borderWidth: scale(2),
    borderColor: colors.borderLine,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderStyle:'dashed',
  } as ViewStyle,

  // Top dash view
  spaceTop:{
    marginVertical: verticalScale(10),  
    marginBottom: verticalScale(10),
    width: scale(58),
    height: verticalScale(4),
    marginRight: 12,
    borderRadius: 30,
    backgroundColor:'red'
  } as ViewStyle,

  // Pyramid View
  triangleContainer:{
    alignItems:'center',
    alignSelf:'center',
  } as ViewStyle, 
  triangle: {
    width: 40,
    height: 0,
    borderRadius:10,
    borderTopWidth: 40,
    borderTopColor: "white",
    borderLeftWidth: 20,
    borderLeftColor: colors.primary,
    borderRightColor: colors.primary,
    borderRightWidth: 20,
    borderStyle: "solid",
    marginBottom: scale(20)
  } as ViewStyle,
  triangle2: {
    width: 100,
    height: 0,
    borderRadius:40,
    borderTopWidth: 40,
    borderTopColor: "white",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginBottom: scale(20)
  }as ViewStyle,
  triangle3: {
    width: 150,
    height: 0,
    borderRadius:40,
    borderTopWidth: 40,
    borderTopColor: "white",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginBottom: scale(20)
  }as ViewStyle,
  triangle4: {
    width: 200,
    height: 0,
    borderRadius:40,
    borderTopWidth: 40,
    borderTopColor: "white",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginBottom: scale(20)
  }as ViewStyle,
  triangle5: {
    width: 250,
    height: 0,
    borderRadius:40,
    borderTopWidth: 40,
    borderTopColor: "white",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderStyle: "solid",
    marginBottom: scale(20)
  }as ViewStyle,
  manageText:{
    marginTop: verticalScale(40),
    marginBottom: verticalScale(20),
  } as TextStyle
})
