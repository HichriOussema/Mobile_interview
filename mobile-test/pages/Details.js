import React from 'react';
import { View, Text } from 'react-native';

function Details({ route }) {
    const { user } = route.params;
  
    const interestsString = user.interest.length > 0 
                            ? user.interest.join(', ') 
                            : 'No interests specified';
  
    return (
      <View>
        <Text>Name: {user.name}</Text>
        <Text>Interest: {interestsString}</Text>
      </View>
    );
  }
  
export default Details;