import { botHeyAnimation } from '@nikshay-setu-v3-monorepo/assets';
import { BASE_URL, fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import ToggleSwitch from '../components/ToggleSwitch';
import TypingText from '../components/TypingText';
import Button from '../components/buttons/primaryButtons';
import { Column, Row } from '../components/commonCompoents/row_column';
import ScreenContainer from '../components/defaultPage';
import { InputField } from '../components/inputComponents/inputBox';
import { DropDown, InputText } from '../components/inputComponents/inputText';
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
    animationSpeed: 80,
  },
  '0.4': {
    chatBotText: `Great ! 🎉 Now, let's get to know you better. Please enter your full name, email ID and your designation.`,
    buttonTxt: 'Continue     ❯',
    animationSpeed: 80,
  },
  '0.5': {
    chatBotText: `default`,
    buttonTxt: 'default     ❯',
    animationSpeed: 80,
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
  console.log('BASE_URL mob', BASE_URL);

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  const animate = useCallback(() => {
    opacity.setValue(0);
    translateY.setValue(50);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, translateY]);

  useFocusEffect(
    useCallback(() => {
      animate();
    }, [animate, values.progress])
  );
  return (
    <ScreenContainer>
      <View style={{ flex: 0.3, justifyContent: 'center' }}>
        <View style={{ backgroundColor: '#F4FFFF', paddingHorizontal: 20 }}>
          <Row>
            <LottieView
              autoPlay
              source={botHeyAnimation}
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
      </View>

      {values.progress === 0.1 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
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
        </Animated.View>
      )}

      {values.progress === 0.2 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <InputField error={'fhi'} label={'Enter OTP'} touched={false}>
            <InputField.Input />
          </InputField>
          <InputField error={'fhi'} label={'Enter OTP'} touched={false}>
            <InputField.Input />
          </InputField>
          <Row style={{ justifyContent: 'space-between', margin: 4 }}>
            <Text style={fontStyles.resendOTPText}>
              Didn’t receive yet? Resend now
            </Text>
            <Text style={fontStyles.resendOTPText}>00:00</Text>
          </Row>
        </Animated.View>
      )}

      {values.progress === 0.3 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <InputText
            label='Full Name*'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your Full Name'
          />
        </Animated.View>
      )}

      {values.progress === 0.4 && (
        <Animated.View
          style={{
            flex: 1,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'space-evenly',
              padding: 20,
            }}
          >
            <Text
              style={{
                backgroundColor: '#E8F1FF',
                alignSelf: 'flex-start',
                padding: 10,
                paddingHorizontal: 20,
                fontSize: 20,
                fontWeight: '200',
                borderRadius: 5,
              }}
            >
              +
            </Text>
            <Text style={fontStyles.resendOTPText}>Add Profile Picture</Text>
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
            <DropDown
              label='Cadre Type*'
              value={'national'}
              options={[
                'National',
                'State',
                'District',
                'Block',
                'Health-Facility',
              ]}
              onChange={handlePhoneNumberChange}
              placeholder='Select cadre level'
            />
            <DropDown
              label='Cadre*'
              value={'national'}
              options={[
                'National',
                'State',
                'District',
                'Block',
                'Health-Facility',
              ]}
              onChange={handlePhoneNumberChange}
              placeholder='Select cadre'
            />
          </ScrollView>
        </Animated.View>
      )}

      {values.progress === 0.5 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <InputText
            label='Mobile Number 0.5'
            value={values.phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Enter your mobile number'
          />
        </Animated.View>
      )}

      <View
        style={{ flex: 0.2, justifyContent: 'center', paddingHorizontal: 20 }}
      >
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
                    : 0.1,
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
    color: '#394F89', // Use your colorCode.textColor.maisonGray value here
  },
});
