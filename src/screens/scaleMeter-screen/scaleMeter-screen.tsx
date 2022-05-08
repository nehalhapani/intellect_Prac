import React, {FC, useMemo, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import styles from './styles';
import {NavigatorParamList} from '../../navigator';
import {Button, Text} from '../../components';
import {Screen} from '../../components/screen/screen';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, View, TouchableOpacity, ImageBackground} from 'react-native';
import {bgCounter, cancel} from '../../assets';
import Slider from 'react-native-slider';
import {colors} from '../../utils/colors';
import ProgressCircle from 'react-native-progress-circle';
import {scale, verticalScale} from '../../utils/scale';
import Dash from 'react-native-dash';

type NavigationType = StackScreenProps<NavigatorParamList, 'scaleMeter'>;
export const ScaleMeterScreen: FC<
  StackScreenProps<NavigatorParamList, 'scaleMeter'>
> = () => {
  const navigation: NavigationType = useNavigation();
  const [progress, setProgress] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [pyramidIndex, setPyramidIndex] = useState(0);

  const onNextPress = () => {
    if (currentIndex < 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const onCancelPress = () => {
    if (currentIndex != 1) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderTopBar = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {[...Array(5)].map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.spaceTop,
                {
                  backgroundColor:
                    index <= currentIndex - 1 ? colors.white : colors.grey,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };
  const renderCircularProgress = () => {
    return (
      <View style={styles.progressContainer}>
        {currentIndex == 1 ? (
          <View style={styles.outerCircleDashed}>
            <ProgressCircle
              percent={progress * 10}
              radius={scale(110)}
              borderWidth={6}
              color={colors.white}
              shadowColor={colors.primary}
              bgColor={colors.primaryLight}>
                <View style={styles.innderCircleWrapper}>
              <ImageBackground source={bgCounter} resizeMode='contain' style={styles.innerCircle}>
                <Text
                  style={styles.innerCircleText}
                  text={progress.toFixed(0)}
                />
              </ImageBackground>
                </View>
            </ProgressCircle>
          </View>
        ) : (
          <>
            <Text
              text={
                pyramidIndex == 5
                  ? 'High'
                  : pyramidIndex == 4 || pyramidIndex == 3
                  ? 'Medium'
                  : 'Low'
              }
              style={styles.manageText}
            />
            <View style={styles.triangleContainer}>
              <TouchableOpacity
                onPress={() => setPyramidIndex(5)}
                style={[
                  styles.triangle5,
                  {
                    borderTopColor:
                      pyramidIndex < 5 ? colors.borderLine : colors.white,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => setPyramidIndex(4)}
                style={[
                  styles.triangle4,
                  {
                    borderTopColor:
                      pyramidIndex < 4 ? colors.borderLine : colors.white,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => setPyramidIndex(3)}
                style={[
                  styles.triangle3,
                  {
                    borderTopColor:
                      pyramidIndex < 3 ? colors.borderLine : colors.white,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => setPyramidIndex(2)}
                style={[
                  styles.triangle2,
                  {
                    borderTopColor:
                      pyramidIndex < 2 ? colors.borderLine : colors.white,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => {
                  setPyramidIndex(1);
                }}
                style={[
                  styles.triangle,
                  {
                    borderTopColor:
                      pyramidIndex < 1 ? colors.borderLine : colors.white,
                  },
                ]}
              />
            </View>
          </>
        )}
      </View>
    );
  };
  const renderSlider = () => {
    return currentIndex == 1 ? (
      <Slider
        minimumValue={0}
        maximumValue={10}
        value={progress}
        minimumTrackTintColor={colors.secondry}
        maximumTrackTintColor={colors.white}
        thumbTintColor={colors.secondry}
        style={styles.trackContainer}
        trackStyle={styles.trackHeight}
        thumbStyle={styles.thumb}
        onValueChange={(value: number) => setProgress(value)}
      />
    ) : (
      <View style={styles.trackContainer} />
    );
  };
  const renderButton = () => {
    return (
      <SafeAreaView>
        <Button text="Next" onPress={() => onNextPress()} />
      </SafeAreaView>
    );
  };
  return (
    <Screen preset="fixed" style={styles.root}>
      <View style={styles.flexWrapperMain}>
        {renderTopBar()}
        <View style={styles.flexRowContainer}>
          <View style={styles.flexWrapper7}>
            <Text
              style={styles.rescueText}
              text="RESCUE SESSION: ANGER & FRUSTATION"
            />
          </View>
          <TouchableOpacity
            style={styles.flexWrapper1}
            onPress={() => onCancelPress()}>
            <Image source={cancel} style={styles.cancelIcon} />
          </TouchableOpacity>
        </View>
        <Text
          style={styles.titleText}
          preset="bold"
          text={`Pick the level your anger &\nfrustation right now`}
        />
      </View>
      {renderCircularProgress()}
      {renderSlider()}
      {renderButton()}
    </Screen>
  );
};
