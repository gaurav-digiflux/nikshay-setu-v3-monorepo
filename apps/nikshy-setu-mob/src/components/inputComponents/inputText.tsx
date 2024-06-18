import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    placeholder?: string;
    value?: string;
    label: string;
    onChange?: (text: string) => void;
}

const InputText: React.FC<Props> = ({ placeholder = 'Mobile Number', value = '', label = 'label', onChange }) => {
    const [number, setNumber] = useState(value);

    const handleChange = (text: string) => {
        setNumber(text);
        if (onChange) {
            onChange(text);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={number}
                onChangeText={handleChange}
                keyboardType="phone-pad"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#D9DBDB',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#495555',
    },
    input: {
        fontSize: 16,
    },
});

export default InputText;