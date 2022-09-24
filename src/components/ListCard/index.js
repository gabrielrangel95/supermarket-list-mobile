import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { px, colors } from "../../theme";
import { Feather } from "@expo/vector-icons";

export const ListCard = ({ name, quantity, checked }) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        backgroundColor: checked ? colors.light : colors.white,
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.checkedContainer,
          backgroundColor: checked ? colors.primary : colors.light,
        }}
      >
        {checked && <Feather name="check" size={px(16)} color={colors.white} />}
      </TouchableOpacity>
      <View>
        <Text
          style={{
            ...styles.title,
            color: checked ? colors.primary : colors.textColorDark,
          }}
        >
          {name}
        </Text>
        <Text>{quantity} unidades</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: px(358),
    height: px(58),
    backgroundColor: colors.light,
    borderColor: colors.primary,
    borderWidth: px(1),
    borderRadius: px(8),
    padding: px(8),
    marginBottom: px(12),
  },
  checkedContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: px(24),
    height: px(24),
    borderRadius: px(24),
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: px(2),
    marginRight: px(12),
  },
  title: {
    fontSize: px(16),
    color: colors.primary,
    fontWeight: "600",
  },
});
