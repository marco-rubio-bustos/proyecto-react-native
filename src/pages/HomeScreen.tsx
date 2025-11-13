import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import ProductList from "../components/productsList/ProductsList";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-slate-50 px-4`}>
      < ProductList/>
      <Text style={tw`text-2xl font-semibold text-slate-800 text-center`}>
        Bienvenido a la pantalla principal 👋
      </Text>
      <Text style={tw`mt-2 text-base text-slate-500 text-center`}>
        Esta landing está lista para crecer con una estructura modular al estilo Scala Learning.
      </Text>
    </View>
  );
}
