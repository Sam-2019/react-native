import React from "react";
import { View, StyleSheet } from "react-native";
import Artists from "./Artist/view";

export const data = [
  {
    id: 1,
    name: "J. Cole",
    imageURL:
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
  },
  {
    id: 2,
    name: "Marley G",
    imageURL:
      "https://montrealdancehall.com/wp-content/uploads/2019/11/skipmarleynewpic-800x445.png",
  },
  {
    id: 3,
    name: "Drake",
    imageURL:
      "https://media.pitchfork.com/photos/5b6db9f7f37ea104bc2b60b5/2:1/w_790/Drake.jpg",
  },
  {
    id: 4,
    name: "J. Cole",
    imageURL:
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
  },
  {
    id: 5,
    name: "Marley G",
    imageURL:
      "https://montrealdancehall.com/wp-content/uploads/2019/11/skipmarleynewpic-800x445.png",
  },
  {
    id: 6,
    name: "Drake",
    imageURL:
      "https://media.pitchfork.com/photos/5b6db9f7f37ea104bc2b60b5/2:1/w_790/Drake.jpg",
  },
  {
    id: 7,
    name: "J. Cole",
    imageURL:
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
  },
  {
    id: 8,
    name: "Marley G",
    imageURL:
      "https://montrealdancehall.com/wp-content/uploads/2019/11/skipmarleynewpic-800x445.png",
  },
  {
    id: 9,
    name: "Drake",
    imageURL:
      "https://media.pitchfork.com/photos/5b6db9f7f37ea104bc2b60b5/2:1/w_790/Drake.jpg",
  },
];

const Layout = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <Artists {...item} key={item.id} />
      ))}
    </View>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'red',
    height: '100%'
  },
});
