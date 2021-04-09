import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles";
import ArtistsAll from "./allArtists";
import ArtistsNew from "./newArtists";

export const data = [
  {
    key: 1,
    name: "J. Cole",
    imageURL:
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
  },
  {
    key: 2,
    name: "Marley G",
    imageURL:
      "https://montrealdancehall.com/wp-content/uploads/2019/11/skipmarleynewpic-800x445.png",
  },
  {
    key: 3,
    name: "Drake",
    imageURL:
      "https://media.pitchfork.com/photos/5b6db9f7f37ea104bc2b60b5/2:1/w_790/Drake.jpg",
  },
  {
    key: 4,
    name: "J. Cole",
    imageURL:
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
  },
  {
    key: 5,
    name: "Marley G",
    imageURL:
      "https://montrealdancehall.com/wp-content/uploads/2019/11/skipmarleynewpic-800x445.png",
  },
  {
    key: 6,
    name: "Drake",
    imageURL:
      "https://media.pitchfork.com/photos/5b6db9f7f37ea104bc2b60b5/2:1/w_790/Drake.jpg",
  },
];

const Artists = () => {
  return (
    <View style={styles.artists}>
      <Text>Added Recently</Text>

      <View>
        <ScrollView
          showsHorizontalScrollIndicator={true}
          style={styles.newArtists}
          horizontal={true}
          showsVerticalScrollIndicator={true}
        >
          <ArtistsNew />
        </ScrollView>
      </View>

      <Text>All</Text>
      <View style={styles.allArtists}>
        <ArtistsAll />
      </View>
    </View>
  );
};

export default Artists;
