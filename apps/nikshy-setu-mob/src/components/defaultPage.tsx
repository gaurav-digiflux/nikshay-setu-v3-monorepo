import { colorCode } from '@nikshay-setu-v3-monorepo/constants';
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
    backgroundColor = colorCode.commonCode.background,
    statusBarStyle = 'light-content',
    style
}) => {
    return (
        <React.Fragment>
            <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
            <SafeAreaView
                style={[style, {
                    flex: 1,
                    backgroundColor: colorCode.commonCode.background
                }]}
            >
                {children}
            </SafeAreaView>
        </React.Fragment>
    );
};

export default ScreenContainer;
