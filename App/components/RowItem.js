import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};
