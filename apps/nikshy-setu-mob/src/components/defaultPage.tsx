import { themeProps } from '@nikshay-setu-v3-monorepo/types';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, ViewStyle } from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
  style?: ViewStyle;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  backgroundColor,
  statusBarStyle = 'light-content',
  style,
}) => {
  const { colors } = useTheme() as unknown as themeProps;
  console.log('scheme', colors);

  return (
    <React.Fragment>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor || colors.white} />
      <SafeAreaView
        style={[
          style,
          {
            flex: 1,
            backgroundColor: colors.white,
          },
        ]}
      >
        {children}
      </SafeAreaView>
    </React.Fragment>
  );
};

export default ScreenContainer;
