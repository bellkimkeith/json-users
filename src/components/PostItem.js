import { View } from "react-native";
import React from "react";
import { Card, Icon, Text } from "react-native-paper";

const PostItem = ({ post }) => {
  return (
    <Card style={{ marginVertical: 5, marginHorizontal: 5 }} mode="outlined">
      <Card.Content>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Icon source="comment" size={36} />
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", flexWrap: "nowrap" }}
            >
              {post.title}
            </Text>
          </View>
          <View style={{ flexWrap: "nowrap" }}>
            <Text variant="titleLarge" style={{ fontStyle: "italic" }}>
              {post.body}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default PostItem;
