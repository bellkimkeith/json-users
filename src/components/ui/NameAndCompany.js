import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const NameAndCompany = ({ name, company }) => {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{name}</Text>
      <Text style={{ fontWeight: "300", fontSize: 16 }}>
        <Icon source="domain" color="black" size={18} />
        {"  "}
        {company}
      </Text>
    </View>
  );
};

export default NameAndCompany;
