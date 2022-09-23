import { TextInput, View, Text, StyleSheet } from "react-native";

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 358,
    height: 56,
    borderColor: "#7785DB",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    padding: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
  textInput: {
    fontSize: 16,
    marginTop: 4,
  },
});
