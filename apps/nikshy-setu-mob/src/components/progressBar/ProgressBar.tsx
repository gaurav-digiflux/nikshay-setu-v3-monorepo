// ProgressBar.tsx

import { colorCode } from '@nikshay-setu-v3-monorepo/constants';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';

interface ProgressBarProps {
  progress: number; // value between 0 and 1
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  containerStyle?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 10,
  backgroundColor = colorCode.commonColor.grayline,
  progressColor = colorCode.primaryColor.primary,
  containerStyle,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

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
      style={[styles.container, { height, backgroundColor }, containerStyle]}
    >
      <Animated.View
        style={[
          styles.progressBar,
          {
            backgroundColor: progressColor,
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
