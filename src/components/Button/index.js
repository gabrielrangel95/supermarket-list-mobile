import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, px } from "../../theme";

export const Button = ({ children, marginTop, onClick, variant, size }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.buttonContainer,
        marginTop: marginTop || 0,
        backgroundColor: variant === "outline" ? colors.light : colors.primary,
        width: size === "small" ? px(200) : px(358),
      }}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: variant === "outline" ? colors.primary : colors.white,
        }}
      >
        {children}
      </Text>
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
    borderColor: colors.primary,
    borderWidth: px(2),
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: "bold",
    color: colors.white,
  },
});
