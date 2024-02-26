import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const CustomAvatar = ({ name }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Avatar.Text size={104} label={name[0]} />
    </View>
  );
};

export default CustomAvatar;
