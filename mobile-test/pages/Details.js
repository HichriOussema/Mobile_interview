import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

function Details({ route }) {
    const { user } = route.params;
  
    const interestsString = user.interest.length > 0 
                            ? user.interest.join(', ') 
                            : 'No interests specified';
  
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Name: {user.name}</Text>
        <Text style={styles.detailText}>Interest: {interestsString}</Text>
      </View>
    );
  }
  
export default Details;