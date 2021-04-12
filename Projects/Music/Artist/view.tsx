import React from "react";
import { View, Pressable } from "react-native";
import ArtistItem from "./artiste-item";
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
