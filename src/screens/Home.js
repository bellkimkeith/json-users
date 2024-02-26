import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users/");
      const jsonResult = await result.json();
      setUsers(jsonResult);
    };

    getUsers();
  }, []);

  const UserItem = ({ user }) => {
    return <Text>{user.name}</Text>;
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
