import { View, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import UserItem from "../components/UserItem";
import { useTheme } from "react-native-paper";

const Home = () => {
  const [users, setUsers] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users/");
      const jsonResult = await result.json();
      setUsers(jsonResult);
    };

    getUsers();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
