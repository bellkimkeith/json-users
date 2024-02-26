import { View } from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";

const EmailAdressPhone = ({ email, address, phone }) => {
  return (
    <View>
      <Text variant="titleSmall">
        <Icon source="email" color="black" size={16} />
        {"  "}
        {email}
      </Text>
      <Text variant="titleSmall">
        <Icon source="map-marker" color="black" size={16} />
        {"  "}
        {address.city}
      </Text>
      <Text variant="titleSmall">
        <Icon source="phone" color="black" size={16} />
        {"  "}
        {phone}
      </Text>
    </View>
  );
};

export default EmailAdressPhone;
