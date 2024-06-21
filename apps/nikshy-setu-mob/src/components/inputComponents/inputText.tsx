import { fontStyles, uiStyles } from '@nikshay-setu-v3-monorepo/constants';
import React, { useState } from 'react';
import {
  Animated,
  Image,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Row } from '../commonCompoents/row_column';

interface Props {
  placeholder?: string;
  value?: string;
  label: string;
  error?: string;
  touched?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (text: string) => void;
  onBlur?: () => void;
}

export const InputText: React.FC<Props> = ({
  placeholder = 'Mobile Number',
  value = '',
  label = 'label',
  error,
  touched = false,
  keyboardType = 'default',
  onChange,
  onBlur,
}) => {
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
        <Row>
          <Text style={uiStyles.InputTextLabel}>
            {' '}
            {label}{' '}
            {touched && <Text style={fontStyles.InputTextErrorText}>*</Text>}
          </Text>
          {/* <Image source={{ uri: exampleImageUri }} style={{ height: 20, width: 60 }} /> */}
        </Row>
        <TextInput
          placeholderTextColor={'#CCCCCC'}
          style={uiStyles.TextInputInputComponent}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          onBlur={onBlur}
        />
      </View>
      {error && touched && (
        <Text style={fontStyles.InputTextErrorText}>{error}</Text>
      )}
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

interface PropsDropDown {
  placeholder?: string;
  value?: string;
  label: string;
  error?: string;
  touched?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (text: string) => void;
  onBlur?: () => void;
  options: Array<string>;
}

export const DropDown: React.FC<PropsDropDown> = ({
  placeholder = 'Mobile Number',
  value = '',
  label = 'label',
  error,
  touched = false,
  keyboardType = 'default',
  onChange,
  onBlur,
  options,
}) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => {
          setShowOption(!showOption);
        }}
        style={[
          uiStyles.InputTextContainer,
          {
            borderColor: error && touched ? 'red' : '#444444',
          },
        ]}
      >
        <Row>
          <Text style={uiStyles.InputTextLabel}>
            {' '}
            {label}{' '}
            {touched && <Text style={fontStyles.InputTextErrorText}>*</Text>}
          </Text>
          {/* <Image source={{ uri: exampleImageUri }} style={{ height: 20, width: 60 }} /> */}
        </Row>
        {/* <TextInput
          placeholderTextColor={"#CCCCCC"}
          style={uiStyles.TextInputInputComponent}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          onBlur={onBlur}
        /> */}
        <Row
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 12,
          }}
        >
          <Text style={uiStyles.TextInputInputComponent}>{placeholder}</Text>
          <Image
            source={require('../../assets/images/drpdwnIC.png')}
            style={{ height: 7, width: 13, marginHorizontal: 10 }}
          />
        </Row>

        {showOption && (
          <View style={styles.row}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => onChange(option)}>
                <AnimatedText option={option} isSelected={value === option} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
      {error && touched && (
        <Text style={fontStyles.InputTextErrorText}>{error}</Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10, // Added padding for better visualization
    width: '100%',
  },
  text: {
    padding: 7,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    margin: 5,
  },
});
