import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { green, darkGreen } from "./color.js";
const SignUp = (props) => {
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
                marginTop: 20,
              }}
            >
              Register
            </Text>
            <Text
              style={{ color: "white", marginBottom: 20, fontWeight: "bold" }}
            >
              Create a new account
            </Text>

            <View
              style={{
                backgroundColor: "white",
                height: "120%",
                width: "110%",
                borderTopLeftRadius: 150,
                // paddingTop: 50,

                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="First Name"
                placeholderTextColor={darkGreen}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 40,
                }}
              />

              <TextInput
                placeholder="Last Name"
                placeholderTextColor={darkGreen}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
              />

              <TextInput
                placeholder="Email"
                placeholderTextColor={darkGreen}
                keyboardType={"email-address"}
                style={{
                  textAlign: "center",
                  // textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
              />

              <TextInput
                placeholder="Contact Number"
                placeholderTextColor={darkGreen}
                style={{
                  // textAlign: "center",
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor={darkGreen}
                secureTextEntry={true}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
              />

              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={darkGreen}
                keyboardType={"email-address"}
                style={{
                  textAlign: "center",
                  width: "70%",
                  borderRadius: 100,
                  height: 40,
                  backgroundColor: "rgb(220,220, 220)",
                  marginTop: 10,
                }}
              />

              <View
                style={{
                  // borderWidth: 5,
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 8,
                }}
              >
                <Text style={{ color: "gray", fontSize: 14 }}>
                  By signing in, you agree to our{" "}
                  <Text style={{ color: "#006A42", fontWeight: "bold" }}>
                    Terms & Conditions
                  </Text>{" "}
                  and
                  <Text style={{ color: "#006A42", fontWeight: "bold" }}>
                    {" "}
                    Privacy Policy
                  </Text>
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => props.navigation.navigate("Dashboard")}
                style={{
                  width: "70%",
                  borderRadius: 100,
                  height: 50,
                  backgroundColor: "#006A42",
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
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;
