// import React from "react";
// import { Image } from "expo-image";
// import { icons, IconTypes } from "@/assets/icons";
// import { scale } from "react-native-size-matters";

// type TabBarIconProps = {
//   color?: string;
//   name: IconTypes;
//   focused: boolean;
//   size?: number;
// };

// const HOME = "home";
// const Vacancies = "vacancies";
// const AddPost = "plus";
// const Candidates = "candidates";
// const Settings = "more";

// // get icon when tab is not focused
// const getIcon = (name) => {
//   switch (name) {
//     case HOME:
//       return "home";
//       break;
//     case Vacancies:
//       return "vacancies";
//       break;
//     case AddPost:
//       return "plus";
//       break;
//     case Settings:
//       return "more";
//       break;
//     case Candidates:
//       return "candidates";
//       break;
//     default:
//       break;
//   }
// };

// // get icon when tab is  focused
// const getIconFocused = (name) => {
//   switch (name) {
//     case HOME:
//       return "home";
//       break;
//     case Vacancies:
//       return "vacancies";
//       break;
//     case AddPost:
//       return "plus";
//       break;
//     case Candidates:
//       return "candidates";
//       break;
//     case Settings:
//       return "more";
//       break;
//     default:
//       break;
//   }
// };

// const TabBarIcon = ({ color, name, focused, size = scale(18) }: TabBarIconProps) => {
//   return (
//     <Image
//       style={{
//         width: size,
//         height: size,
//         tintColor: color,
//       }}
//       //   // @ts-ignore
//       source={focused ? icons[getIconFocused(name)] : icons[getIcon(name)]}
//       contentFit="contain"
//     />
//   );
// };

// export default TabBarIcon;

import { Image } from 'expo-image';
import React from 'react';
import { scale } from 'react-native-size-matters';

import type { IconTypes } from '@/assets/icons';
import { icons } from '@/assets/icons';

type TabBarIconProps = {
  color?: string;
  name: IconTypes;
  focused: boolean;
  size?: number;
};

const HOME = 'home';
const Vacancies = 'vacancies';
const AddPost = 'plus';
const Candidates = 'candidates';
const Settings = 'more';

// get icon when tab is not focused
const getIcon = (name) => {
  switch (name) {
    case HOME:
      return 'home';
    case Vacancies:
      return 'vacancies';
    case AddPost:
      return 'plus';
    case Candidates:
      return 'candidates';
    case Settings:
      return 'more';
    default:
      break;
  }
};

// get icon when tab is focused
const getIconFocused = (name) => {
  switch (name) {
    case HOME:
      return 'home';
    case Vacancies:
      return 'vacancies';
    case AddPost:
      return 'plus';
    case Candidates:
      return 'candidates';
    case Settings:
      return 'more';
    default:
      break;
  }
};

const TabBarIcon = ({
  color,
  name,
  focused,
  size = scale(18),
}: TabBarIconProps) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
      // @ts-ignore
      source={focused ? icons[getIconFocused(name)] : icons[getIcon(name)]}
      contentFit="contain"
    />
  );
};

export default TabBarIcon;
