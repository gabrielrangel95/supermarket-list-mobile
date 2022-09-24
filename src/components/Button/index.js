import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, px } from "../../theme";

export const Button = ({ children, marginTop, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ ...styles.buttonContainer, marginTop: marginTop || 0 }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: px(358),
    height: px(56),
    borderRadius: px(24),
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: "bold",
    color: colors.white,
  },
});
