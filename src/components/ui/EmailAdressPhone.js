import { View } from "react-native";
import React from "react";
import { Icon, Text, useTheme } from "react-native-paper";

const EmailAdressPhone = ({ email, address, phone }) => {
  const theme = useTheme();

  return (
    <View>
      <Text variant="titleSmall">
        <Icon source="email" color={theme.colors.primary} size={16} />
        {"  "}
        {email}
      </Text>
      <Text variant="titleSmall">
        <Icon source="map-marker" color={theme.colors.primary} size={16} />
        {"  "}
        {address.city}
      </Text>
      <Text variant="titleSmall">
        <Icon source="phone" color={theme.colors.primary} size={16} />
        {"  "}
        {phone}
      </Text>
    </View>
  );
};

export default EmailAdressPhone;
