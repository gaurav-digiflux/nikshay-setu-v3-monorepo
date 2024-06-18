import { colorCode } from '@nikshay-setu-v3-monorepo/constants';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToggleSwitch from '../components/ToggleSwitch';
import TypingText from '../components/TypingText';
import Button from '../components/buttons/primaryButtons';
import { Column, Row } from '../components/commonCompoents/row_column';
import ScreenContainer from '../components/defaultPage';
import InputText from '../components/inputComponents/inputText';
import ProgressBar from '../components/progressBar/ProgressBar';

const onProgressSteps = {
  '0.1': {
    chatBotText: 'Let’s start with your registration.',
    buttonTxt: 'Get OTP     ❯',
    animationSpeed: 80,
  },
  '0.2': {
    chatBotText:
      "Please enter your mobile number below. We'll send you an OTP to verify your number. 📲 ",
    buttonTxt: 'Verify     ❯',
    animationSpeed: 40,
  },
  '0.4': {
    chatBotText: `Great ! 🎉 Now, let's get to know you better. Please enter your full name, email ID and your designation.`,
    buttonTxt: 'Continue     ❯',
    animationSpeed: 30,
  },
  '0.5': {
    chatBotText: `default`,
    buttonTxt: 'default     ❯',
    animationSpeed: 30,
  },
};

export const BoardingScreen = () => {
  const [values, setValues] = useState({
    progress: 0.1,
    phoneNumber: '',
    isNumOrEmail: 'Mobile',
  });

  const handleToggleChange = (value: string) => {
    setValues({ ...values, isNumOrEmail: value });
  };
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };
  return (
    <ScreenContainer style={{ paddingHorizontal: 20, backgroundColor: 'red' }}>
      <View style={{ flex: 0.2 }}>
        <Row style={{ backgroundColor: '#F4FFFF' }}>
          <LottieView
            autoPlay
            source={require('../assets/animations/botHey.json')}
            loop={true}
            style={{ height: 80, width: 80 }}
          />
          <Column style={{ justifyContent: 'center', flex: 1 }}>
            {values.progress === 0.1 && (
              <Text style={styles1.typingText}>Hi! 😊</Text>
            )}
            <TypingText
              text={onProgressSteps[values.progress].chatBotText}
              delay={onProgressSteps[values.progress].animationSpeed}
              containerStyles={{ marginEnd: 10 }}
            />
          </Column>
        </Row>
        <ProgressBar progress={values.progress} />
      </View>

      {values.progress === 0.1 && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ToggleSwitch
            options={['Mobile', 'Email']}
            onChange={handleToggleChange}
            silderWidth={0.5}
            containerStyle={{ alignSelf: 'flex-start', marginBottom: 10 }}
          />
          {values.isNumOrEmail === 'Email' ? (
            <InputText
              label={'Email Address'}
              value={values.phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder='Enter your Email'
            />
          ) : (
            <InputText
              label='Mobile Number'
              value={values.phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder='Enter your mobile number'
            />
          )}
        </View>
      )}

      {values.progress === 0.2 && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <InputText
            label='Mobile Number'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your mobile number'
          />
          <InputText
            label='Enter OTP'
            value={'* * * *'}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your mobile number'
          />
        </View>
      )}

      {values.progress === 0.3 && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <InputText
            label='Full Name*'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name'
          />
        </View>
      )}

      {values.progress === 0.4 && (
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <InputText
            label='Full Name*'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name*'
          />
          <InputText
            label='Email'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name*'
          />
          <InputText
            label='Cadre Type*'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name*'
          />
          <InputText
            label='Cadre*'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name*'
          />
        </View>
      )}

      {values.progress === 0.5 && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <InputText
            label='Mobile Number 0.5'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your mobile number'
          />
        </View>
      )}

      <View style={{ flex: 0.2, justifyContent: 'center' }}>
        <Button
          bgColor='#394F89'
          title={onProgressSteps[values.progress].buttonTxt}
          onPress={() => {
            setValues({
              ...values,
              progress:
                values.progress === 0.1
                  ? 0.2
                  : values.progress === 0.2
                  ? 0.4
                  : 0.5,
            });
          }}
        />
      </View>
    </ScreenContainer>
  );
};
const styles1 = StyleSheet.create({
  container: {},
  row: {
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  column: {
    justifyContent: 'space-between',
  },
  typingText: {
    fontSize: 15,
    fontWeight: '500',
    marginEnd: 10,
    color: colorCode.textColor.maisonGray, // Use your colorCode.textColor.maisonGray value here
  },
});
