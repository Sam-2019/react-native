import React, { useRef, useState } from "react";
import { View, Button, Animated } from "react-native";
import { AlbumItemProps } from "../types";

function AlbumItem({ action }: AlbumItemProps) {
  return (
    <View>
      <Button onPress={action} title="Hide" />
    </View>
  );
}

export default AlbumItem;
