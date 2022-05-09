import React, {FC} from 'react';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import {NavigatorParamList} from '../../navigator';
import {Button, Text} from '../../components';
import {Screen} from '../../components/screen/screen';
import {useNavigation} from '@react-navigation/native';

type NavigationType = StackNavigationProp<NavigatorParamList, 'home'>;

/**
 * Home screen
 */
export const HomeScreen: FC<
  StackScreenProps<NavigatorParamList, 'home'>
> = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <Screen preset="fixed" style={styles.root}>
      <Text text="Welcome to the Intellect world!" style={styles.greeting} />
      <Button
        text="Start Anger Measurement"
        onPress={() => navigation.navigate('scaleMeter')}
      />
    </Screen>
  );
};
