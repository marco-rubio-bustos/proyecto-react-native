import {Image, Text, View } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";
import { useResponsive } from "../../hooks";
import { colors } from "../../styles/globalStyles";
const image ="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page280/sungla/images/about_img.png"

const AboutOurShop =  () => {
    const{isMobile}=useResponsive();
  return (
    <View style={[tw`${isMobile ? "flex-col" : "flex-row"} py-20`]}>
        <View style={[tw`${isMobile ? " w-full" :" w-1/2"} `]}>
            <Image
          source={{ uri: image }}
          style={tw`w-full h-[580px]`}
          resizeMode="contain"
        />
        </View>
        <View style={[tw`${isMobile ? "w-full" : "w-1/2"}`]}> 
            <View style={tw`border py-15 px-10`}> 
                <Text style={tw`text-2xl font-semibold mb-10`}>About Our Shop</Text>
                <Text style={tw``}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </Text>   
            </View> 
            <View style={[tw`${isMobile ? "items-center" : "items-start"} mt-4`]}> 
                <View style={tw`mt-10 border rounded-full py-5 px-10`}>Read more</View>
            </View>
            
        </View>
       
    </View>
  );
};

export default AboutOurShop;