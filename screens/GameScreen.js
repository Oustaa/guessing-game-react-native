import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent Guesse</Text>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      <View>{/*LOG Roundes */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;
