import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

function UsersList({navigation}) {

    const fetchUsers = async () => {
        const response = await axios.get('https://dev.api.syncremote.co/api/v1/admin/users');
         return response.data.users;
    };

    const { data, error, isLoading } = useQuery('users', fetchUsers);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>An error occurred{error.message}</Text>;
    if (!data) return <Text>No data to display</Text>;

return(
   <View>
      {data.map(user => (
        <TouchableOpacity key={user._id} onPress={() => navigation.navigate('Details', { userId: user._id })}>
          <Text>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
);
}

export default UsersList;