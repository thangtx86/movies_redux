import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.cloud_burst,
  },
  header: {
    backgroundColor: Colors.swiss_coffee,
    height: 200,
    paddingTop: 80,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    color: Colors.black,
  },
  error_area: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  error_message: {
    fontSize: 16,
    color: Colors.red,
  },

  sub_title: {
    marginTop: 4,
    fontSize: 18,
    color: Colors.red,
  },
  button_area: {
    marginBottom: 2,
    marginTop: 26,
  },
});

export default styles;
