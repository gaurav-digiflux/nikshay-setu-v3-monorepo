// ToggleSwitch.tsx
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ToggleSwitchProps {
    options: string[];
    onChange?: (value: string) => void;
    silderWidth?: number;
    containerStyle?: ViewStyle;
}

const { width } = Dimensions.get('window');
const TOGGLE_HEIGHT = 36;


const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ options, onChange, silderWidth = 0.8, containerStyle }) => {
    const [active, setActive] = useState(options[0]);
    const [translateX] = useState(new Animated.Value(0));
    const TOGGLE_WIDTH = width * silderWidth / options.length; // Make toggle width dynamic based on options length

    useEffect(() => {
        const index = options.indexOf(active);
        Animated.timing(translateX, {
            toValue: index * TOGGLE_WIDTH,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [active, TOGGLE_WIDTH, translateX]);

    const handleToggle = (value: string) => {
        setActive(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.toggleContainer, { width: TOGGLE_WIDTH * options.length }]}>
                <Animated.View style={[
                    styles.slider,
                    { width: TOGGLE_WIDTH, transform: [{ translateX }] }
                ]} />
                {options.map(option => (
                    <TouchableOpacity
                        key={option}
                        style={styles.toggleButton}
                        onPress={() => handleToggle(option)}
                    >
                        <Text style={[styles.text, active === option && styles.activeText]}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleContainer: {
        height: TOGGLE_HEIGHT,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    slider: {
        height: TOGGLE_HEIGHT,
        borderRadius: 12,
        backgroundColor: '#3b5998',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    toggleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    activeText: {
        color: '#fff',
    },
});

export default ToggleSwitch;
