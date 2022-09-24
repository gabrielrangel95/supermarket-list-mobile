import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors, px } from "../../theme";

export const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
