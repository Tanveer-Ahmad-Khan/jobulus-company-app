import { create } from "zustand";
import { setItem } from "@/storage";
import { APP_THEME } from "@/constants";

type ThemeType = "light" | "dark";
type SelectedOptionsMenu = {
  key: number;
  title: string;
};

interface AppState {
  appLoaded: boolean;
  isConnected: boolean;
  drawerStatus: boolean;
  theme: ThemeType;
  selectedOptionsMenu?: SelectedOptionsMenu;
  changeTheme: (data: ThemeType) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  selectOptionsMenu: (data: SelectedOptionsMenu) => void;
  setIsConnected: (data: boolean) => void;
}

export const useApp = create<AppState>((set, get) => ({
  appLoaded: false,
  isConnected: true,
  drawerStatus: false,
  theme: "light",
  selectedOptionsMenu: { key: 1, title: "Delivery" },
  changeTheme: (data) => {
    set({ theme: data });
    setItem(APP_THEME, data);
  },
  openDrawer: () => {
    set({ drawerStatus: true });
  },
  closeDrawer: () => {
    set({ drawerStatus: false });
  },
  toggleDrawer: () => {
    set({ drawerStatus: !get().drawerStatus });
  },
  selectOptionsMenu: (data: SelectedOptionsMenu) => {
    set({ selectedOptionsMenu: data });
  },
  setIsConnected: (data: boolean) => {
    set({ isConnected: data });
  },
}));

export const openDrawer = () => useApp.getState().openDrawer();
export const closeDrawer = () => useApp.getState().closeDrawer();
export const toggleDrawer = () => useApp.getState().toggleDrawer();
export const changeAppTheme = (theme: ThemeType) =>
  useApp.getState().changeTheme(theme);

export const selectOptionsMenu = (data: SelectedOptionsMenu) => {
  return useApp.getState().selectOptionsMenu(data);
};
export const setIsConnected = (data: boolean) => {
  return useApp.getState().setIsConnected(data);
};
