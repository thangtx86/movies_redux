import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../components';
import {logout} from '../../actions/auth-actions';

import {Colors} from '../../theme';

const Welcome = ({navigation}) => {
  const {container, logoContainer, actionsContainer, welcomeContainer} = styles;
  const {navigate} = navigation;
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView style={container}>
        <View style={{flex: 1}}>
          <Button
            text="Log out"
            loading={false}
            onPress={() => {
              dispatch(logout());
            }}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
});

export default Welcome;
