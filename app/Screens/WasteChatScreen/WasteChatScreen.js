import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import Logo from "../../assets/logo.png";
import getb from "../../assets/get.png";
import Co2 from "../../assets/co2.png";
import Conv from "../../assets/conv.png";
import doc from "../../assets/doc.png";
import styles from "../style";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

const CabonChatScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const screenWidth = Dimensions.get("window").width;

  data={
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [25, 30, 50, 90, 60, 75]
      }
    ]
    
  }

  data2={
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [45, 70, 80, 120, 104, 75]
      }
    ]
    
  }


  data3={
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [45, 55, 80, 115, 125, 75]
      }
    ]
    
  }

  data4={
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [45, 25, 80, 30, 50, 75]
      }
    ]
    
  }
  data5={
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [45, 25, 80, 30, 50, 75]
      }
    ]
    
  }
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onhome = () => {
    navigation.navigate("Tab");
  };
  const onSignup = () => {
    navigation.navigate("ConfirmEmailScreen");
  };

  const onTermsofusePressed = () => {
    console.warn("Terms of Use");
  };

  const PrivacyPolicy = () => {
    console.warn("Privacy Policy");
  };
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../../assets/backgroud2.png")}
    >
      
        <View style={styles.newcontainer}>
          <Image
            source={Logo}
            style={[styles.createlogo, { height: height * 0.15 }]}
            resizeMode="contain"
          />
<ScrollView>
<View style={styles.cpss}>
          {/* console.log(Dimensions.get) */}
          <Text style={styles.Thome}>Mensah Waste Bin</Text>
          <BarChart
            data={data}
            width={screenWidth}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#e4ede6",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `#007b42`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
          />
          <Text style={styles.Thome}>BBS Waste Bin</Text>
          <BarChart
            data={data2}
            width={screenWidth}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#e4ede6",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `#007b42`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
          />

<Text style={styles.Thome}>EAH Waste Bin</Text>
          <BarChart
            data={data3}
            width={screenWidth}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#e4ede6",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `#007b42`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }} 
          />

<Text style={styles.Thome}>BUTH Waste Bin</Text>
          <BarChart
            data={data4}
            width={screenWidth}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#e4ede6",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `#007b42`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
            
          />

<Text style={styles.Thome}>SAT Waste Bin</Text>
          <BarChart
            data={data5}
            width={screenWidth}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#e4ede6",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `#007b42`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
            
          />
     </View>
 </ScrollView>
        </View>
       

      <View style={styles.abc}>
        <Pressable style={styles.foot} onPress={onhome}>
          <Ionicons
            name="home"
            onPress={onhome}
            style={styles.footIcon}
            size={30}
            color="black"
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default CabonChatScreen;
