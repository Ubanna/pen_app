import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          // tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Feather
                name="circle"
                color={focused ? "#e32f45" : "#748c94"}
                size={23}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 11 }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
        name="Dashboard"
        component={Screen1}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Feather
                name="plus-circle"
                color={focused ? "#e32f45" : "#748c94"}
                size={43}
              />
            </View>
          ),
        }}
        name="Inventory"
        component={Screen2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Feather
                name="circle"
                color={focused ? "#e32f45" : "#748c94"}
                size={23}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 11 }}
              >
                Jarvis Pension
              </Text>
            </View>
          ),
        }}
        name="Explore"
        component={Screen3}
      />
    </Tab.Navigator>
  );
};

const Screens = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      // mode="modal"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="user-plus"
                size={32}
                color="#000"
                style={{ paddingHorizontal: 20 }}
              />
            </TouchableOpacity>
          ),
        })}
        name="Tabs"
      >
        {(props) => <Tabs {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Navigation;
