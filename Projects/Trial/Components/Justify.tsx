import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Props } from "../Props";

const Justify: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <Feather
      name="align-justify"
      size={24}
      color="black"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default Justify;
