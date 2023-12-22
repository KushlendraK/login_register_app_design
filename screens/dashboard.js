import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { green, darkGreen } from "./color.js";
import { NavigationAction } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Dashboard = (props) => {
  return (
    <>
      <View>
        <Image
          source={require("/home/maitretech/Desktop/Kush_Maitretech/React_Native/Add_User/assets/leaves.jpg")}
          style={{ height: "100%" }}
        />
        <View style={{ position: "absolute" }}>
          <View style={{ alignItems: "center", width: 350 }}>
            <Text
              style={{
                color: "white",
                fontSize: 50,
                fontWeight: "bold",
                marginVertical: 20,
              }}
            >
              Dashboard
            </Text>

            <View
              style={{
                backgroundColor: "white",
                height: "150%",
                width: "110%",
                borderTopLeftRadius: 150,
                paddingTop: 50,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2BB789",
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                Welcome User
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
