
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const UserItem = ({ user, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.listItem}>
    <Text style={styles.listItemText}>{user.name}</Text>
  </TouchableOpacity>
);

export default UserItem;
