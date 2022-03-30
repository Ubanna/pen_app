import "react-native-gesture-handler";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();
import React from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Navigation from "./navigation/Navigation";

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      {
        // add as many fonts as you want here ....
        Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
        Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
        Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
      },
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
