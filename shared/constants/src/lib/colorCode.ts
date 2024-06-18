import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Appearance } from 'react-native';

enum colors {}

export const appTheme = {
  colors: {
    ...DefaultTheme.colors,
    gray1: '#E8F1FF',
    black: '#000000',
    white: '#000000',
    primary: '#394F89',
    grayline: '#CCCCCC',
    maisonGray: '#495555',
    darkGray1: '#2E2E2E',
    darkPrimary: '#1A237E',
    darkBackground: '#121212',
    darkGrayline: '#444444',
    darkMaisonGray: '#B0BEC5',
  },
  lightcolors: {
    colors: {
      ...DefaultTheme.colors,
      gray1: '#E8F1FF',
      black: '#000000',
      white: '#FFFFFF',
      primary: '#394F89',
      grayline: '#CCCCCC',
      maisonGray: '#495555',
      darkGray1: '#2E2E2E',
      darkPrimary: '#1A237E',
      darkBackground: '#121212',
      darkGrayline: '#444444',
      darkMaisonGray: '#B0BEC5',
    },
    dark: false,
  },
  darkcolors: {
    colors: {
      ...DarkTheme.colors,
      gray1: '#E8F1FF',
      black: '#ffffff',
      white: '#000000',
      primary: '#394F89',
      grayline: '#CCCCCC',
      maisonGray: '#495555',
      darkGray1: '#2E2E2E',
      darkPrimary: '#1A237E',
      darkBackground: '#121212',
      darkGrayline: '#444444',
      darkMaisonGray: '#B0BEC5',
    },
    dark: true,
  },
};

const lightColorScheme = {
  primaryColor: {
    primary: colors.primary,
  },
  commonColor: {
    black: colors.black,
    white: colors.white,
    background: colors.white,
    grayline: colors.grayline,
  },
  textColor: {
    gray: colors.gray1,
    maisonGray: colors.maisonGray,
  },
};

const darkColorScheme = {
  primaryColor: {
    primary: colors.darkPrimary,
  },
  commonColor: {
    black: colors.white, // In dark mode, we often use white for text
    white: colors.black, // and black for background
    background: colors.darkBackground,
    grayline: colors.darkGrayline,
  },
  textColor: {
    gray: colors.darkGray1,
    maisonGray: colors.darkMaisonGray,
  },
};

const colorScheme = Appearance.getColorScheme();

export const colorCode =
  colorScheme === 'dark' ? darkColorScheme : lightColorScheme;
