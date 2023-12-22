import {
  View,
  TextInput,
  StyleSheet,
  backgroundColor,
  Alert,
} from "react-native";

import Button from "../components/Button";

const StartGameScreens = ({ inputHandler, entredNumber, startGame }) => {
  const startGameHandler = () => {
    const entredNumberInt = +entredNumber;

    if (entredNumberInt < 0 || entredNumberInt > 99 || !entredNumberInt) {
      Alert.alert(
        "the number must be a number greater than zero and less than 99"
      );
      return;
    }
    startGame(true);
    // inputHandler(null);
  };

  const resetHandler = () => {
    inputHandler(null);
  };

  return (
    <View style={styles.startGameContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputHandler}
          value={entredNumber}
        />
      </View>
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <Button onPress={resetHandler}>Reset</Button>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={startGameHandler}>Start</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startGameContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  input: {
    textAlign: "center",
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    fontWeight: "bold",
  },
  btnsContainer: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  btnContainer: {
    flex: 1,
  },
});

export default StartGameScreens;
