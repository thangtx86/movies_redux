import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../../../theme';
import {Text, Button, TextInput} from '../../../../components';
import styles from './styles';
import TabBarItem from '../item-tab-bar-categories';

import categories from './categories.json';

const TabBarCategories = ({navigation}) => {
  // const {response, loading} = useFetchDataLocal('./categories.json');

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={item => <TabBarItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TabBarCategories;
