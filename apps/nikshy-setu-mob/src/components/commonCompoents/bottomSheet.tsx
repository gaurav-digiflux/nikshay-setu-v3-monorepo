import { moderateScale } from '@nikshay-setu-v3-monorepo/utils';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';


interface BottomSheetProps {
    isOpen: boolean;
    toggleBottomSheet: () => void;
    children?: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, toggleBottomSheet, children }) => {
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    const lastOffset = useRef(Dimensions.get('window').height);

    useEffect(() => {
        if (isOpen) {
            Animated.spring(translateY, {
                toValue: 0,
                velocity: 10,
                useNativeDriver: true
            }).start();
        } else {
            Animated.spring(translateY, {
                toValue: Dimensions.get('window').height,
                velocity: 10,
                useNativeDriver: true
            }).start();
        }
    }, [isOpen]);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: true }
    );
    const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const { translationY, velocityY } = event.nativeEvent;

            let toValue = 0;

            if (translationY > 0 && velocityY > 1000) {
                // Dragging down with sufficient velocity to close
                toValue = Dimensions.get('window').height;
            } else {
                // Determine if should snap to bottom or stay open
                if (translationY > Dimensions.get('window').height / 2 || velocityY > 1000) {
                    // Snap to closed position
                    toValue = Dimensions.get('window').height;
                } else {
                    // Snap to open position
                    toValue = 0;
                }
            }

            Animated.spring(translateY, {
                toValue,
                velocity: velocityY,
                useNativeDriver: true
            }).start(() => {
                if (toValue === Dimensions.get('window').height) {
                    toggleBottomSheet();
                }
            });
        }
    };


    return (
        <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Animated.View style={[styles.bottomSheet, { transform: [{ translateY }] }]}>
                <TouchableOpacity style={styles.handle} onPress={toggleBottomSheet}>
                    <View style={styles.handleBar} />
                </TouchableOpacity>
                <View style={styles.content}>
                    {children}
                </View>
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: moderateScale(16),
        borderTopRightRadius: moderateScale(16),
        padding: moderateScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    handle: {
        alignItems: 'center',
        marginTop: moderateScale(8),
    },
    handleBar: {
        width: moderateScale(40),
        height: moderateScale(4),
        borderRadius: 2,
        backgroundColor: '#ccc',
    },
    content: {
        marginTop: moderateScale(8),
    },
});

export default BottomSheet;