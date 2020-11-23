/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {createRef, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import styles from './styles';
import {MAIN_COLOR, TEXTS} from '../../common';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  fetchTaskQuestions,
  onSelectAnswer,
} from '../../Redux/Action/TestActions';
import {QuestionCard} from './QuestionCard';

const flatlist = createRef(0);
const TestScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected_question_index, setSelected_question_index] = useState(0);

  const {questions, loading, answers} = useSelector((state) => {
    return {
      questions: state.test.questions,
      loading: state.test.loading,
      answers: state.test.answers,
    };
  });

  useEffect(() => {
    dispatch(fetchTaskQuestions());
  }, [dispatch]);

  const _renderItem = ({item, index}) => {
    return (
      <QuestionCard
        question={item}
        onSelectAnswer={(answer) => {
          dispatch(
            onSelectAnswer({
              answer,
              index,
              //Check if the user select the correct answer or not
              isCorrect:
                questions[selected_question_index].correct_answer === answer,
            }),
          );
        }}
      />
    );
  };
  const onPressNext = () => {
    //make sure that the user select answer
    if (answers[selected_question_index]) {
      //check if the user at the last question
      if (selected_question_index === 4) {
        navigation.navigate('Result');
      } else {
        flatlist.current.scrollToIndex({index: selected_question_index + 1});
        setSelected_question_index((prev) => prev + 1);
      }
    } else {
      Alert.alert(
        '',
        TEXTS.select_answer,
        [
          {
            text: TEXTS.ok,
            onPress: () => console.log('Cancel Pressed'),
            style: 'ok',
          },
        ],
        {cancelable: false},
      );
    }
  };

  const onPressBack = () => {
    if (selected_question_index !== 0) {
      flatlist.current.scrollToIndex({
        index: selected_question_index - 1,
      });
      setSelected_question_index((prev) => prev - 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator size={'large'} color={MAIN_COLOR} />
      ) : (
        <FlatList
          style={{paddingTop: 10}}
          scrollEnabled={false}
          ref={flatlist}
          data={questions}
          keyExtractor={(i, index) => `${index}`}
          renderItem={_renderItem}
          horizontal={true}
          pagingEnabled
        />
      )}
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
          onPress={onPressBack}
          titleStyle={{color: MAIN_COLOR}}
          title={TEXTS.back}></Button>
        <Button
          onPress={onPressNext}
          buttonStyle={[styles.button, {backgroundColor: MAIN_COLOR}]}
          title={TEXTS.next}></Button>
      </View>
    </View>
  );
};
export default TestScreen;
