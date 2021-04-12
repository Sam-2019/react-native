import React from "react";
import { Text, View, Image } from "react-native";
import { ArtistItemProps } from "../types";
import { styles } from "../styles";

function ArtistItem({ name, imageURL, id }: ArtistItemProps) {
  return (
    <View style={styles.artistItem} key={id}>
      <Image
        source={{ uri: imageURL }}
        style={{ width: 110, height: 109, borderRadius: 20 }}
      />
      <Text style={styles.name}> {name}</Text>
    </View>
  );
}

export default ArtistItem;
