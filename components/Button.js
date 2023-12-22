import { Pressable, Text, StyleSheet, View, Platform } from "react-native";

const Button = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          Platform.OS === "android"
            ? styles.buttonInnerContainer
            : pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    padding: 6,
    backgroundColor: "#4e0329",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Button;
