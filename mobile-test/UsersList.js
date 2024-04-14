import React from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import UserItem from './UserItem';
import { styles } from './styles';

function UsersList({navigation}) {

    const fetchUsers = async () => {
        const response = await axios.get('https://dev.api.syncremote.co/api/v1/admin/users');
         return response.data.users;
    };

    const { data, error, isLoading } = useQuery('users', fetchUsers);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>An error occurred{error.message}</Text>;
    if (!data) return <Text>No data to display</Text>;

    const renderItem = ({ item }) => (
      <UserItem 
      user={item} 
      onPress={() => navigation.navigate('Details', { user: item })}
    />
    );

return(
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      style={styles.container}
    />
);
}

export default UsersList;