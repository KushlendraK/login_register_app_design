import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { green, darkGreen } from "./color.js";
import { useState } from "react";
const Login = (props) => {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  console.log(mail);
  console.log(pass);
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
              Login
            </Text>

            <View
              style={{
                backgroundColor: "white",
                height: "120%",
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
                Welcome Back
              </Text>
              <Text style={{ color: "grey", fontSize: 15 }}>
                Login to your account
              </Text>

              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={darkGreen}
                keyboardType={"email-address"}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 50,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 20,
                }}
                onChangeText={(e) => setmail(e)}
                Email={mail}
              />
              <Text></Text>

              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={darkGreen}
                secureTextEntry={true}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 50,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
                onChangeText={(e) => setpass(e)}
              />

              <View
                style={{
                  marginVertical: 20,
                  marginLeft: "60%",
                }}
              >
                <Text
                  style={{ color: "#006A42", fontSize: 14, fontWeight: "bold" }}
                >
                  Forgot Password?
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => props.navigation.navigate("Dashboard")}
                style={{
                  width: "70%",
                  borderRadius: 100,
                  height: 50,
                  backgroundColor: "#2BB789",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    // padding: 5,
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
