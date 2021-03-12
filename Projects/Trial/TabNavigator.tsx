import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute, useIsFocused } from "@react-navigation/native";
import { MainStackNavigator, SettingStackNavigator } from "./Stacks";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = isFocused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = isFocused ? "settings" : "settings-outline";
          }

          return <Ionicons text={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Settings" component={SettingStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
