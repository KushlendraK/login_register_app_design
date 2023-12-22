import react from "react";
import { View, Text, Image } from "react-native";

const Background = (child) => {
  return (
    <>
      <View>
        <Image
          source={require("/home/maitretech/Desktop/Kush_Maitretech/React_Native/Add_User/assets/leaves.jpg")}
          style={{ height: "100%" }}
        />
        <View style={{ position: "absolute" }}>{child}</View>
      </View>
    </>
  );
};

export default Background;
