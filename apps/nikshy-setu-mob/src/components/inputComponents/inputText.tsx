import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

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

const InputText: React.FC<Props> = ({
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
      <View style={[styles.container, {
        borderColor: error && touched ? 'red' : '#D9DBDB',
      }]}>
        <Text style={styles.label}>{label} {touched && <Text style={{ color: "red" }}>*</Text>}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          onBlur={onBlur}
        />
      </View>
      {error && touched &&
        <Text style={styles.errorTxt}>{error}</Text>
      }
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#495555',
  },
  input: {
    fontSize: 16,
  },
  errorTxt: {
    color: "red", paddingHorizontal: 5,
  }
});

export default InputText;
