import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";

const File = () => {
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [textLayoutHeight, setTextLayoutHeight] = useState(0);
  const [updatedHeight, setUpdatedtHeight] = useState(0);
  const [expand, setExpand] = useState(false);
  const [text, setText] = useState("Click Here To Expand");

  const expand_collapse_Function = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expand == false) {
      setUpdatedtHeight(textLayoutHeight),
        setExpand(true),
        setText("Click Here To Collapse");
    } else {
      setUpdatedtHeight(0);
      setExpand(false), setText("Click Here To Expand");
    }
  };

  function getHeight(height) {
    setTextLayoutHeight(height);
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ChildView}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={expand_collapse_Function}
          style={styles.TouchableOpacityStyle}
        >
          <Text style={styles.TouchableOpacityTitleText}>{text}</Text>
        </TouchableOpacity>
        <View style={{ height: updatedHeight, overflow: "hidden" }}>
          <Text
            style={styles.ExpandViewInsideText}
            onLayout={(value) => getHeight(value.nativeEvent.layout.height)}
          >
            Hello
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  ChildView: {
    borderWidth: 1,
    borderColor: "#00BCD4",
    margin: 5,
  },
  TouchableOpacityStyle: {
    padding: 10,
    backgroundColor: "#00BCD4",
  },
  TouchableOpacityTitleText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  ExpandViewInsideText: {
    fontSize: 16,
    color: "#000",
    padding: 12,
  },
});

export default File
