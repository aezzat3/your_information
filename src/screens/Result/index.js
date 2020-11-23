//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {MAIN_COLOR, TEXTS} from '../../common';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Result = () => {
  const navigation = useNavigation();

  const {score} = useSelector((state) => {
    return {
      score: state.test.score,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{`${TEXTS.test_score} : `}</Text>
      <Text style={styles.scoreText}>{`(${score} / 5)`}</Text>
      <View>
        <Button
          title={TEXTS.retake_test}
          buttonStyle={styles.buttonStyle}
          color={'#FFF'}
          onPress={() => navigation.navigate('Test')}
        />
        <Button
          title={TEXTS.home}
          buttonStyle={[styles.buttonStyle, {backgroundColor: '#333'}]}
          color={'#FFF'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 35,
    color: '#333',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 35,
    color: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: MAIN_COLOR,
    marginBottom: 10,
  },
});
export default Result;
