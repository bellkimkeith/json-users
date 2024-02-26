import React from "react";
import { Image, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
import NameAndCompany from "../components/ui/NameAndCompany";
import EmailAdressPhone from "../components/ui/EmailAdressPhone";
import { getStaticMap } from "../util/static-map";

const UserDetails = ({ route }) => {
  const { user } = route.params;
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.onPrimaryContainer }}>
      <View style={{ flex: 1, flexDirection: "column", gap: 3 }}>
        <Card mode="outlined" theme={{ roundness: 0 }}>
          <Card.Content>
            <NameAndCompany name={user.name} company={user.company.name} />
            <EmailAdressPhone
              email={user.email}
              address={user.address}
              phone={user.phone}
            />
          </Card.Content>
        </Card>
        <View style={{ flex: 1 }}>
          <Image
            height={100}
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: getStaticMap(user.address.geo.lat, user.address.geo.lng),
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
