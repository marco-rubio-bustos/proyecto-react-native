import React from "react";
import { Linking, Pressable, Text, View } from "react-native";
import tw from "twrnc";

import { CTA_BUTTON, NAV_ITEMS } from "../../constants";
import { useUI } from "../../context";
import { useResponsive } from "../../hooks";
import { NavbarItem } from "../../types";
import { estilos } from "../../styles/globalStyles";



const handleItemPress = async (item: NavbarItem) => {
  if (!item.href) {
    return;
  }

  try {
    await Linking.openURL(item.href);
  } catch (error) {
    console.warn(`No se pudo abrir la ruta ${item.href}`, error);
  }
};

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useUI();
  const { isMobile } = useResponsive();

  const renderItems = (orientation: "row" | "column") => (
    <View style={orientation === "row" ? tw`flex-row` : tw`flex-col`}>
      {NAV_ITEMS.map((item, index) => (
        <Pressable
          key={item.id}
          onPress={() => handleItemPress(item)}
          style={tw.style(
            "px-2 py-1 rounded-md",
            orientation === "row" && index < NAV_ITEMS.length - 1 ? "mr-2" : null,
            orientation === "column" && index < NAV_ITEMS.length - 1 ? "mb-2" : null
          )}
        >
          <Text style={tw`text-slate-600 text-base`}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    
    <View style={tw`bg-white border-b border-slate-200`}>
      <View style={tw`flex-row items-center justify-between px-4 py-3`}>
        <Text style={tw`text-xl font-bold text-slate-900`}>Scala Landing</Text>

        {isMobile ? (
          <Pressable
            onPress={toggleMenu}
            style={tw`bg-slate-100 px-3 py-2 rounded-md`}
          >
            <Text style={tw`text-slate-800 font-semibold text-base`}>
              {isMenuOpen ? "Cerrar" : "Menú"}
            </Text>
          </Pressable>
        ) : (
          <>
            {renderItems("row")}
            <Pressable
              onPress={() => handleItemPress(CTA_BUTTON)}
              style={tw`bg-indigo-600 px-3 py-2 rounded-md ml-4`}
            >
              <Text style={tw`text-white font-semibold text-base`}>
                {CTA_BUTTON.label}
              </Text>
            </Pressable>
          </>
        )}
      </View>

      {isMobile && isMenuOpen && (
        <View style={tw`px-4 pb-4`}>
          <View style={tw`border-t border-slate-200 mt-3 pt-3`}>
            {renderItems("column")}
            <Pressable
              onPress={() => handleItemPress(CTA_BUTTON)}
              style={tw`bg-indigo-600 px-3 py-2 rounded-md mt-2`}
            >
              <Text style={tw`text-white font-semibold text-base`}>
                {CTA_BUTTON.label}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default Navbar;

