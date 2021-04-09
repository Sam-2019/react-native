import React from "react";
import { Text, View, Image } from "react-native";
import { ArtistItemProps } from "../types";
import { styles } from "../styles";

function ArtistItem({ name, imageURL }: ArtistItemProps) {

  return (
    <View style={styles.artistItem}>
      <Image source={{ uri: imageURL }} style={styles.imageURL} />
      <Text style={styles.name}> {name}</Text>
    </View>
  );
}

export default ArtistItem;
