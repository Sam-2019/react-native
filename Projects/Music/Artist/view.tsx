import React, { useRef, useState } from "react";
import { View, Animated, Pressable } from "react-native";
import ArtistItem from "./artiste-item";
import Detail from "../Album/Albums";
import { styles } from "../styles";

const ClickItem = ({ name, imageURL, id }) => {
  return (
    <View>
      <Pressable style={styles.pressable}>
        <ArtistItem name={name} imageURL={imageURL} id={id} />
      </Pressable>
    </View>
  );
};

export default ClickItem;
