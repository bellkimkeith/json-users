import React from "react";
import { Button, Icon } from "react-native-paper";

const CustomIconButton = ({ title, iconSource, onClick }) => {
  return (
    <Button
      icon={() => <Icon source={iconSource} color="black" size={24} />}
      textColor="black"
      labelStyle={{ fontSize: 20 }}
      mode="elevated"
      onPress={onClick}
      style={{ flex: 1 }}
      theme={{ roundness: 2 }}
    >
      {title}
    </Button>
  );
};

export default CustomIconButton;
