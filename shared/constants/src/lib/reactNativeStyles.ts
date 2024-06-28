import { moderateScale } from '@nikshay-setu-v3-monorepo/utils';
import { StyleSheet } from 'react-native';
import { appTheme } from './colorCode';




export const fontName = {
  MAISON_BOLD: "Maison-Bold",
  MAISON_DEMI: "Maison-Demi",
  MAISON_LIGHT: "Maison-Light",
  MAISON_MEDIUM: "Maison-Medium",
  MAISONMONO_BOLD: "MaisonMono-Bold",
  MAISONMONO_LIGHT: "MaisonMono-Light",
  MAISON_REGULAR: "Maison-Regular",
  MAISON_REG_OBLI: "Maison-RegularOblique"
}
export const uiStyles = StyleSheet.create({
  InputTextContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
  },
  InputTextLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: appTheme.lightcolors.colors.maisonGray,
  },
  TextInputInputComponent: {
    fontSize: 16,
  },
});

export const fontStyles = StyleSheet.create({
  InputTextErrorText: {
    color: 'red',
    paddingHorizontal: 5,
  },
  resendOTPText: {
    color: appTheme.lightcolors.colors.maisonGray,
  },
  Maison_500_20PX_26LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(18),
    lineHeight: moderateScale(26),
    fontWeight: "500"
  },
  Maison_500_18PX_21LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(21),
    fontWeight: "500"
  },
  Maison_500_10PX_13LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(11),
    lineHeight: moderateScale(13),
    fontWeight: "500"
  },
  Maison_500_22PX_29LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(22),
    lineHeight: moderateScale(29),
    fontWeight: "500"
  },
  Maison_500_20PX_25LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(25),
    fontWeight: "500"
  },
  Maison_500_12PX_15LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(15),
    fontWeight: "500",
  },
  Maison_700_28PX_33LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(28),
    lineHeight: moderateScale(33),
    fontWeight: "700",
  },
  Maison_600_20PX_23LH: {
    fontFamily: fontName.MAISON_DEMI,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(23),
    fontWeight: "600",
  },
});
