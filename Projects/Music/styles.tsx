import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  another: {
    position: "fixed",
    width: "100%",
    height: "100%",
    bottom: 0,
    top: "100%",
    backgroundColor: "#1fa67a",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {},
  artists: {
    flex: 1,
    flexDirection: "column",
  },
  allArtists: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  newArtists: {
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  artistItem: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  layout: {},
  text: {
    fontSize: 30,
  },
  scrollView: {
    flex: 1,
  },
  imageURL: {
    width: 110,
    height: 109,
    borderRadius: 20,
  },
  name: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
  contentContainerStyle: {
    backgroundColor: "green",
    paddingVertical: 10,
    marginTop: 40,
  },
  body: {
    flex: 1,
  },
  tip_menu: {},
  button: {
    backgroundColor: "blue",
  },
});
