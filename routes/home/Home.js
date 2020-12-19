import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
export default function Home({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Card
        containerStyle={{
          borderRadius: "10%",
          height: "90%",
          backgroundColor: "#333",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "white",
            textAlign: "center",
          }}
        >
          Welcome to Society Check!{" "}
        </Text>
      </Card>
    </ScrollView>
  );
}
