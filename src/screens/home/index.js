import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../theme';
import {Text, Button, TextInput} from '../../components';
import styles from './styles';
import {useFetch} from '../../hooks';
import {TabBarCategories} from './component';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;
  const {response, loading} = useFetch({path: 'movie/popular'});

  return (
    <View>
      <TabBarCategories />
    </View>
  );
};

export default Home;
