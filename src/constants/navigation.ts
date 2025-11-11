import { NavbarItem, NavbarItems } from "../types/navigation";

export const NAV_ITEMS: NavbarItems = [
  { id: "home", label: "Inicio" },
  { id: "features", label: "Características" },
  { id: "pricing", label: "Planes" },
  { id: "contact", label: "Contacto" },
];

export const CTA_BUTTON: NavbarItem = {
  id: "cta",
  label: "Comenzar",
  href: "https://expo.dev",
  isExternal: true,
};

