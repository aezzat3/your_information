import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TEXTS} from '../../common';
import styles from './styles';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/images/bg.jpg')}
      resizeMode={'cover'}>
      <Text style={styles.titleStyle}>{TEXTS.test_your_self}</Text>
      <Text style={styles.desriptionText}>{TEXTS.test_desc}</Text>
      <Button
        title={TEXTS.start_test}
        buttonStyle={styles.buttonStyle}
        color={'#FFF'}
        onPress={() => navigation.navigate('Test')}
      />
    </ImageBackground>
  );
};
export default HomeScreen;
