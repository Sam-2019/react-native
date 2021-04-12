import React from "react";
import { View, Button } from "react-native";
import { AlbumItemProps } from "../types";

function AlbumItem({ action }: AlbumItemProps) {
  return (
    <View>
      <Button onPress={action} title="Hide" />
    </View>
  );
}

export default AlbumItem;
