import { View } from "react-native";
import React from "react";
import { Icon, Text, useTheme } from "react-native-paper";

const NameAndCompany = ({ name, company }) => {
  const theme = useTheme();

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{name}</Text>
      <Text style={{ fontWeight: "300", fontSize: 16 }}>
        <Icon source="domain" color={theme.colors.primary} size={18} />
        {"  "}
        {company}
      </Text>
    </View>
  );
};

export default NameAndCompany;
