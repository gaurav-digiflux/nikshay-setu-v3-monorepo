import { StyleSheet } from 'react-native';
import { appTheme } from './colorCode';

export const uiStyles = StyleSheet.create({
  InputTextContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15
  },
  InputTextLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: appTheme.lightcolors.colors.maisonGray,
  },
  TextInputInputComponent: {
    fontSize: 16,
  }
});

export const fontStyles = StyleSheet.create({
  InputTextErrorText: {
    color: 'red',
    paddingHorizontal: 5
  },
  resendOTPText: {
    color: appTheme.lightcolors.colors.maisonGray,

  }
});