// ProgressBar.tsx

import { themeProps } from '@nikshay-setu-v3-monorepo/types';
import { useTheme } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';

interface ProgressBarProps {
  progress: number;
  height?: number;
  containerStyle?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 10,
  containerStyle,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme() as unknown as themeProps;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={[styles.container, { height, backgroundColor: colors.grayline }, containerStyle]}
    >
      <Animated.View
        style={[
          styles.progressBar,
          {
            backgroundColor: colors.primary,
            width: widthInterpolated,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default ProgressBar;
