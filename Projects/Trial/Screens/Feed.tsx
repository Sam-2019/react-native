import * as React from "react";
import { Text, View, Button } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Props } from "../Props";

const FeedScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default FeedScreen;
