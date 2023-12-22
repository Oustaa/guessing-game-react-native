import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreens from "./screens/StartGameScreens";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [entredNumber, setEntredNumber] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  let screen = (
    <StartGameScreens
      inputHandler={setEntredNumber}
      entredNumber={entredNumber}
      startGame={setGameStarted}
    />
  );

  if (gameStarted) screen = <GameScreen />;

  return (
    <LinearGradient
      style={styles.appcontainer}
      colors={["#4e0329", "#ddb52f"]}
      locations={[0.2, 0.9]}
    >
      <ImageBackground
        style={styles.appcontainer}
        source={require("./assets/images/backgroundImage.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.appcontainer}>
          {screen}
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
