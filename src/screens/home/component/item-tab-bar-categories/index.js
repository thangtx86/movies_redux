import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../../../theme';
import {Text, Button, TextInput} from '../../../../components';
import styles from './styles';

const TabBarItem = props => {
  const {item} = props.item;
  return (
    <View style={styles.container}>
      <Text style={styles.tab_name}>{item.name}</Text>
    </View>
  );
};

export default TabBarItem;
