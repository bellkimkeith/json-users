import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import PostItem from "../components/PostItem";

const UserPosts = ({ route }) => {
  const { userId } = route.params;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const getUserPosts = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const jsonResult = await result.json();
      setPosts(jsonResult);
    };

    setTimeout(() => {
      getUserPosts();
    }, 1000);
    setIsLoading(false);
  }, []);

  const Content = isLoading ? (
    <ActivityIndicator
      animating={isLoading}
      size={48}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  ) : (
    <View style={{ backgroundColor: theme.colors.onPrimary }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );

  return Content;
};

export default UserPosts;
