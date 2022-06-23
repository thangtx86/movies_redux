import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.cloud_burst,
  },
  header: {
    backgroundColor: Colors.swiss_coffee,
    height: 220,
    borderBottomLeftRadius: 30,
    paddingTop: 100,
    paddingHorizontal: 16,
    marginBottom: 60,
  },
  title: {
    fontSize: 28,
    color: Colors.black,
  },
  sub_title: {
    marginTop: 4,
    fontSize: 18,
    color: Colors.black,
  },
  button_area: {
    marginBottom: 2,
    marginTop: 26,
  },
  error_area: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  error_message: {
    fontSize: 16,
    color: Colors.red,
  },
});

export default styles;
