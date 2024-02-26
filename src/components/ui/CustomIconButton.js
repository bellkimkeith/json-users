import React from "react";
import { Button, Icon, useTheme } from "react-native-paper";

const CustomIconButton = ({ title, iconSource, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      icon={() => (
        <Icon
          source={iconSource}
          color={theme.colors.onPrimaryContainer}
          size={24}
        />
      )}
      textColor={theme.colors.onPrimaryContainer}
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
