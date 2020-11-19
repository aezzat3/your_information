import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../common';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 36,
    textAlign: 'right',
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  desriptionText: {
    color: '#FFF',
    textAlign: 'right',
    fontSize: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: MAIN_COLOR,
  },
});

export default styles;
