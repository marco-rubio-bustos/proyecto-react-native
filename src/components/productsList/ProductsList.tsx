import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";
import { Products } from "../../data";
import { useResponsive } from "../../hooks";
import { Product } from "../../types";
import { colors } from "../../styles/globalStyles";

const ProductList = () => {
  const { isMobile } = useResponsive();

  return (
    <View style={tw`${isMobile ? "flex-col" : "flex-row"} flex-wrap`}>
      {Products.map((item: Product) => (
        <View
          style={tw`${isMobile ? "w-full" : "w-1/4"} flex  p-5`}
          key={item.id}
        >
          <Link href="/productos">
            <View style={tw`flex items-center p-5 border`}>
              <Image
                source={{ uri: item.image }}
                style={tw`w-full h-40`}
                resizeMode="contain"
              />
              <Text style={tw`pt-5 text-2xl`}>
                <span style={{ color: colors.secondary }}>$</span> {item.price}
              </Text>
              <Text style={tw`p-2 text-xl`}>{item.name}</Text>
            </View>
          </Link>
        </View>
      ))}
    </View>
  );
};

export default ProductList;
