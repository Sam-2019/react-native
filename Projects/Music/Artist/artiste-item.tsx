import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ArtistItemProps } from "../types";
import { styles } from "../styles";

function ArtistItem({ name, imageURL, open }: ArtistItemProps) {
  return (
    <TouchableOpacity onPress={open}>
      <View style={styles.artistItem}>
        <Image source={{ uri: imageURL }} style={styles.imageURL} />
        <Text style={styles.name}> {name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ArtistItem;
