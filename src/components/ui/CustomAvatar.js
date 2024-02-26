import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const CustomAvatar = ({ name }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Avatar.Image
        source={{
          uri: `https://api.dicebear.com/7.x/adventurer/jpg?scale=200&seed=${name}`,
        }}
      />
    </View>
  );
};

export default CustomAvatar;
