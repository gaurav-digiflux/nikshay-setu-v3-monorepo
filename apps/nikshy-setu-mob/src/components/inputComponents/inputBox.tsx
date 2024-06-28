import { dropdown_IC, logoIc } from '@nikshay-setu-v3-monorepo/assets';
import { fontStyles, uiStyles } from '@nikshay-setu-v3-monorepo/constants';
import { DropDownProps, ErrorProps, InputContainerProps, InputFieldProps, InputProps, LabelProps } from '@nikshay-setu-v3-monorepo/types';
import React, { useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Row } from '../commonCompoents/row_column';


export const Label: React.FC<LabelProps> = ({ label, touched, edit }) => {
  return (
    <Row style={{ justifyContent: 'space-between' }}>
      <Text style={uiStyles.InputTextLabel}>
        {' '}
        {label}{' '}
        {touched && <Text style={fontStyles.InputTextErrorText}>*</Text>}
      </Text>
      {edit && (
        <Image
          source={logoIc}
          style={{
            height: 14,
            width: 14,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        />
      )}
    </Row>
  );
};

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <Text style={fontStyles.InputTextErrorText}>{error}</Text>
  );
};
const InputContainer: React.FC<InputContainerProps> = ({ error, touched, label, edit, children, containerStyle }) => {
  return (
    <React.Fragment>
      <View
        style={[
          uiStyles.InputTextContainer,
          {
            borderColor: error && touched ? 'red' : '#444444',
          },
          containerStyle]}
      >
        <Label label={label} touched={touched} edit={edit} />
        {children}
      </View>
      {(touched && error) && <Error error={error} />}
    </React.Fragment>
  );
};


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
      style={[styles.text, { backgroundColor: bgColor, color: color }]}
    >
      {option}
    </Animated.Text>
  );
};

export const InputField: React.FC<InputFieldProps> & {
  DropDown: React.FC<DropDownProps>;
  Input: React.FC<InputProps>;
} = ({ children }) => {
  return (
    <View>
      {children}
    </View>
  );
};

export const Input: React.FC<InputProps> = ({
  placeholder = 'Mobile Number',
  value = '',
  keyboardType = 'default',
  onChange,
  onBlur,
  error,
  touched,
  label,
  edit,
  containerStyle
}) => {
  return (
    <InputContainer
      edit={edit}
      error={error}
      touched={touched}
      label={label}
      containerStyle={containerStyle}>
      <TextInput
        placeholderTextColor={'#CCCCCC'}
        style={uiStyles.TextInputInputComponent}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        onBlur={onBlur}
      />
    </InputContainer>
  );
};

export const DropDown: React.FC<DropDownProps> = ({
  placeholder = 'Mobile Number',
  value = '',
  options = ['default'],
  onChange,
  error,
  touched,
  label,
}) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <InputContainer
      error={error}
      touched={touched}
      label={label}>
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
          <Text style={{ ...uiStyles.TextInputInputComponent, color: value && 'black' || 'gray' }}>{value && value || placeholder}</Text>
          <Image
            source={dropdown_IC}
            style={{ height: 7, width: 13, marginHorizontal: 10 }}
          />
        </Row>

        {showOption && (
          <View style={styles.row}>
            {options.map((option, index) => (
              <TouchableOpacity
                id={index + 'animTxtTouchOpacity'}
                onPress={() => onChange(option)}
              >
                <AnimatedText key={index + 'animTxt'} option={option} isSelected={value === option} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </InputContainer>
  );
};



InputField.DropDown = DropDown;
InputField.Input = Input;

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
  },
});
