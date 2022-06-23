import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../theme';
import {Text, Button, TextInput} from '../../components';
import styles from './style';

import {
  onChangeEmail,
  onChangePassword,
  login,
  resetField,
} from '../../actions/auth-actions';

const Auth = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;

  const {email, password, loading, errorMessage} = useSelector(
    ({authReducer}) => authReducer,
  );

  // useEffect(() => () => dispatch(resetField()), []);
  return (
    <View style={styles.formContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.sub_title}>Continue your adventure</Text>
      </View>

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
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />

      {!!errorMessage && (
        <View style={styles.error_area}>
          <Text style={styles.error_message}>{errorMessage}</Text>
        </View>
      )}

      <View style={styles.button_area}>
        <Button
          text="Sign In"
          disabled={!(email && password)}
          loading={loading}
          onPress={() => {
            Keyboard.dismiss();
            dispatch(login());
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Button
            transparent
            tintColor={Colors.white}
            text="Create an account"
            onPress={() => navigate('register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
