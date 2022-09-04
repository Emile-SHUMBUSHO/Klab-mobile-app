import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { useDispatch } from "react-redux";
import { CheckCode } from "../../../redux/actions";

const CodeVerficationScreen = ({ route, navigation }) => {
  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dispatch = useDispatch();
  const CheckCodeFunction = () => {
    dispatch(CheckCode(value));
  };
  CheckCodeFunction();
  const code = value;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ margin: 10, right: 100 }}
          onPress={() => {
            navigator.navigation.navigate("signIn");
          }}
        >
          <Entypo name="chevron-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "black",
          }}
        />
        <View style={styles.content}>
          <Text style={{ fontWeight: "bold", fontSize: 18, margin: 1 }}>
            Enter Recovery code
          </Text>
          <Text style={{ fontSize: 15, margin: 1 }}>
            we have sent recovery code on summilef1@gmail.com
          </Text>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Text style={{ fontWeight: "bold", fontSize: 15, margin: 1 }}>
            This code will expire in 5 minutes{code}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigator.navigation.navigate("newPassword", code);
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CodeVerficationScreen;
const CELL_COUNT = 6;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "25%",
    borderBottomLeftRadius: 50,
  },
  footer: {
    height: "75%",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 40,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    color: "white",
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
