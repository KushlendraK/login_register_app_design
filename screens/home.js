import react from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// import Background from "./background.js";

const Home = (props) => {
  return (
    <>
      {/* <ReactNativeZoomableView> */}
      <View>
        <StatusBar animated={true} backgroundColor="#2BB789" />
        <Image
          source={require("/home/maitretech/Desktop/Kush_Maitretech/React_Native/Add_User/assets/leaves.jpg")}
          style={{ height: "100%" }}
        />
        <View
          style={{
            position: "absolute",
          }}
        >
          <View
            style={{
              marginHorizontal: 40,
              marginVertical: 100,
              // borderWidth: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 64 }}>Let's start</Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#2BB789",
                borderRadius: 100,
                alignItems: "center",
                marginTop: "5%",
                paddingVertical: "2%",
                marginVertical: "4%",
              }}
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 100,
                alignItems: "center",
                paddingVertical: "2%",
                marginVertical: "4%",
              }}
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ color: "#2BB789", fontSize: 25, fontWeight: "bold" }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ReactNativeZoomableView> */}
    </>
  );
};
export default Home;
