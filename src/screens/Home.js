import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import UserItem from "../components/UserItem";
import { ActivityIndicator, useTheme } from "react-native-paper";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users/");
      const jsonResult = await result.json();
      setUsers(jsonResult);
    };

    getUsers();
    setIsLoading(false);
  }, []);

  const Content = isLoading ? (
    <ActivityIndicator
      animating={isLoading}
      size={48}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  ) : (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );

  return Content;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
