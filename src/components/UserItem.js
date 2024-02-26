import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button, Card, Icon, Text } from "react-native-paper";
import CustomAvatar from "./ui/CustomAvatar";
import NameAndCompany from "./ui/NameAndCompany";
import EmailAdressPhone from "./ui/EmailAdressPhone";
import CustomIconButton from "./ui/CustomIconButton";

const UserItem = ({ user }) => {
  const navigation = useNavigation();

  const clickPostHandler = () => {
    navigation.navigate("UserDetails", { user: user });
  };

  const clickDetailsHandler = () => {
    console.log("Show more user details");
  };

  return (
    <Card theme={{ roundness: 0 }} elevation={5} style={{ marginBottom: 3 }}>
      <Card.Content style={{ flex: 1, flexDirection: "column", gap: 10 }}>
        <View>
          <View style={{ flex: 1, flexDirection: "row", gap: 18 }}>
            <CustomAvatar name={user.name} />
            <View style={{ flex: 1, flexDirection: "column", gap: 18 }}>
              <Card mode="outlined">
                <Card.Content>
                  <NameAndCompany
                    name={user.name}
                    company={user.company.name}
                  />
                  <EmailAdressPhone
                    email={user.email}
                    address={user.address}
                    phone={user.phone}
                  />
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <CustomIconButton
            title="Details"
            iconSource="account-circle"
            onClick={clickDetailsHandler}
          />
          <CustomIconButton
            title="Posts"
            iconSource="comment-multiple"
            onClick={clickPostHandler}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default UserItem;
