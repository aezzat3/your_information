/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {MAIN_COLOR, TEXTS} from '../../common';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchTaskQuestions,
  onSelectAnswer,
} from '../../Redux/Action/TestActions';
import {QuestionCard} from './QuestionCard';

const TestScreen = () => {
  const dispatch = useDispatch();
  const [selected_question_index, setSelected_question_index] = useState(0);

  const {questions} = useSelector((state) => {
    return {
      questions: state.test.questions,
    };
  });

  useEffect(() => {
    dispatch(fetchTaskQuestions());
  }, [dispatch]);

  const _renderItem = ({item, index}) => {
    console.log('ITEM ', item);
    return (
      <QuestionCard
        question={item}
        onSelectAnswer={(answer) =>
          onSelectAnswer({
            answer,
            index,
            //Check if the user select the correct answer or not
            isCorrect:
              questions[selected_question_index].correct_answer === answer,
          })
        }
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{paddingTop: 10}}
        scrollEnabled={false}
        // ref={(flatlist) => (this.flatlist = flatlist)}
        data={questions}
        keyExtractor={(i, index) => `${index}`}
        renderItem={_renderItem}
        horizontal={true}
        pagingEnabled
      />
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
