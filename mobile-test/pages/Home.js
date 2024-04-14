import React from 'react';
import { View, Text } from 'react-native';
import UsersList from '../UsersList';

function Home ({navigation}) {
    return <UsersList navigation={navigation} />;
}
export default Home;