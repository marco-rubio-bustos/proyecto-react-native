export interface NavbarItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
}

export type NavbarItems = NavbarItem[];

