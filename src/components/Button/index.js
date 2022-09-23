import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({ text, marginTop, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ ...styles.buttonContainer, marginTop: marginTop || 0 }}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 358,
    height: 56,
    borderRadius: 24,
    backgroundColor: "#7785DB",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
