import { Text } from "react-native";
import React from "react";

const UserDetails = ({ route }) => {
  const { user } = route.params;
  return <Text>{user.website}</Text>;
};

export default UserDetails;
