import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Card, Text, TouchableRipple } from "react-native-paper";

const UserItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    <TouchableRipple
      onPress={() => navigation.navigate("UserDetails", { user: user })}
      rippleColor="rgba(0, 0, 0, .32)"
      style={{ flex: 1, marginBottom: 2 }}
    >
      <Card theme={{ roundness: 0 }} elevation={5}>
        <Card.Content>
          <Text variant="titleLarge">{user.name}</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};

export default UserItem;
