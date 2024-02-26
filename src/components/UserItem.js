import React from "react";
import { Card, Text, TouchableRipple } from "react-native-paper";

const UserItem = ({ user }) => {
  return (
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(0, 0, 0, .32)"
      style={{ flex: 1 }}
    >
      <Card theme={{ roundness: 0 }}>
        <Card.Content>
          <Text variant="titleLarge">{user.name}</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};

export default UserItem;
