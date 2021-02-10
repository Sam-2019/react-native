import * as React from "react";
import { Text, View, Button } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Props } from "../Props";
import { styles } from "../Styles";

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home!</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      <Button
        onPress={() => navigation.navigate("Notification")}
        title="Go to notifications"
      />

      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

export default HomeScreen;
