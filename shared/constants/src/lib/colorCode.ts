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

const colorScheme = Appearance.getColorScheme();

export const colorCode = {};
