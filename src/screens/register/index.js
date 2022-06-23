import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../theme';
import {Text, Button, TextInput} from '../../components';
import styles from './styles';
import {
  onChangeName,
  onChangeEmail,
  onChangePassword,
  registerUser,
  resetField,
} from '../../actions/register-actions';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;
  const {name, email, password, errorMessage, loading} = useSelector(
    ({registerReducer}) => registerReducer,
  );

  useEffect(() => {
    dispatch(resetField());
  }, []);

  return (
    <View style={styles.formContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <TextInput
        label="Name"
        value={name}
        onChangeText={text => dispatch(onChangeName(text))}
        autoCapitalize="none"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => dispatch(onChangeEmail(text))}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => dispatch(onChangePassword(text))}
        autoCapitalize="none"
      />
      {!!errorMessage && (
        <View style={styles.error_area}>
          <Text style={styles.error_message}>{errorMessage}</Text>
        </View>
      )}

      <View style={styles.button_area}>
        <Button
          text="Sign Up"
          disabled={!(name && email && password)}
          loading={loading}
          onPress={() => {
            Keyboard.dismiss();
            dispatch(registerUser(navigation));
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Button
            transparent
            tintColor={Colors.white}
            text="I already have an account"
            onPress={() => navigate('auth')}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;
