import { drpdwnIC, logoIc } from "@nikshay-setu-v3-monorepo/assets";
import { fontStyles, uiStyles } from "@nikshay-setu-v3-monorepo/constants";
import React, { ReactNode, useState } from "react";
import { Animated, Image, KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Row } from "../commonCompoents/row_column";

interface InputFieldProps {
    children: ReactNode,
    error: string,
    touched: boolean,
    forEdit?: Boolean,
    label: string
}
interface LabelProps { }
interface ErrorProps { }
interface InputProps {
    placeholder?: string;
    value?: string;
    keyboardType?: KeyboardTypeOptions;
    onChange?: (text: string) => void;
    onBlur?: () => void;
}
interface DropDownProps {
    placeholder?: string;
    value?: string;
    keyboardType?: KeyboardTypeOptions;
    onChange?: (text: string) => void;
    onBlur?: () => void;
    options: Array<string>;
}


const AnimatedText = ({ option, isSelected }) => {
    const backgroundColor = new Animated.Value(isSelected ? 1 : 0);
    const color = backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['black', 'white'],
    });
    const bgColor = backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', '#394F89'],
    });

    React.useEffect(() => {
        Animated.timing(backgroundColor, {
            toValue: isSelected ? 1 : 0,
            duration: 700,
            useNativeDriver: false,
        }).start();
    }, [isSelected]);

    return (
        <Animated.Text
            style={[styles.text, { backgroundColor: bgColor, color: color }]}>
            {option}
        </Animated.Text>
    );
};


export const InputField: React.FC<InputFieldProps> & {
    DropDown: React.FC<DropDownProps>;
    Input: React.FC<InputProps>;
    Label: React.FC<LabelProps>;
    Error: React.FC<ErrorProps>;
} = ({ children, error, touched, label, forEdit = false }) => {

    return (
        <React.Fragment>
            <View
                style={[
                    uiStyles.InputTextContainer,
                    {
                        borderColor: error && touched ? 'red' : '#444444',
                    },
                ]}
            >
                <Row style={{ justifyContent: "space-between" }} >
                    <Text style={uiStyles.InputTextLabel}>
                        {' '}
                        {label}{' '}
                        {touched && <Text style={fontStyles.InputTextErrorText}>*</Text>}
                    </Text>
                    {forEdit && <Image
                        source={logoIc}
                        style={{ height: 14, width: 14, marginHorizontal: 10, marginTop: 5 }} />}
                </Row>{children}</View>
        </React.Fragment>
    )
};



export const Input: React.FC<InputProps> = ({
    placeholder = 'Mobile Number',
    value = '',
    keyboardType = 'default',
    onChange,
    onBlur }) => {
    return (
        <TextInput
            placeholderTextColor={'#CCCCCC'}
            style={uiStyles.TextInputInputComponent}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            onBlur={onBlur}
        />
    );
};



export const DropDown: React.FC<DropDownProps> = ({
    placeholder = 'Mobile Number',
    value = '',
    options = ['default'],
    onChange,
    onBlur }) => {
    const [showOption, setShowOption] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                setShowOption(!showOption);
            }}
        >
            <Row
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 12,
                }}
            >
                <Text style={uiStyles.TextInputInputComponent}>{placeholder}</Text>
                <Image
                    source={drpdwnIC}
                    style={{ height: 7, width: 13, marginHorizontal: 10 }}
                />
            </Row>

            {showOption && (
                <View style={styles.row}>
                    {options.map((option, index) => (
                        <TouchableOpacity id={index + "animTxt"} onPress={() => onChange(option)}>
                            <AnimatedText option={option} isSelected={value === option} />
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </TouchableOpacity>
    );
};

export const Label: React.FC<LabelProps> = ({
}) => {
    return (
        <View style={{ backgroundColor: "blue", height: 20, width: 20 }}></View>
    );
};


export const Error: React.FC<ErrorProps> = ({
}) => {
    return (
        <View style={{ backgroundColor: "green", height: 20, width: 20 }}></View>
    );
};

InputField.DropDown = DropDown;
InputField.Input = Input;
InputField.Label = Label;
InputField.Error = Error;



const styles = StyleSheet.create({
    container: {},
    text: {
        padding: 7,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 5,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 10, // Added padding for better visualization
        width: '100%',
    }
});


