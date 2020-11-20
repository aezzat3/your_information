/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {MAIN_COLOR, TEXTS} from '../../common';
import {Button} from 'react-native-elements';

const TestScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.buttons}>
        <Button
          buttonStyle={[
            styles.button,
            {
              borderWidth: 1,
              backgroundColor: '#FFF',
              borderColor: MAIN_COLOR,
            },
          ]}
          titleStyle={{color: MAIN_COLOR}}
          title={TEXTS.back}>
          {}
        </Button>
        <Button
          buttonStyle={[styles.button, {backgroundColor: MAIN_COLOR}]}
          title={TEXTS.next}></Button>
      </View>
    </View>
  );
};
export default TestScreen;
