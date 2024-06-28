import { botHeyAnimation, logoIc } from '@nikshay-setu-v3-monorepo/assets';
import { fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import { moderateScale } from '@nikshay-setu-v3-monorepo/utils';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ToggleSwitch from '../components/ToggleSwitch';
import TypingText from '../components/TypingText';
import Button from '../components/buttons/primaryButtons';
import { Column, Row } from '../components/commonCompoents/row_column';
import ScreenContainer from '../components/defaultPage';
import { InputField } from '../components/inputComponents/inputBox';
import { DropDown } from '../components/inputComponents/inputText';
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
    animationSpeed: 60,
  },
  '0.4': {
    chatBotText: `Great ! 🎉 Now, let's get to know you better. Please enter your full name, email ID and your designation.`,
    buttonTxt: 'Continue     ❯',
    animationSpeed: 40,
  },
  '0.5': {
    chatBotText: `Almost done! 🌍 We just need to know your geographic details. 🏠📍`,
    buttonTxt: 'Continue     ❯',
    animationSpeed: 50,
  },
  '0.7': {
    chatBotText: `Awesome ! 🎉Let's make sure we have everything correct.`,
    buttonTxt: 'Confirm     ❯',
    animationSpeed: 50,
  },
  '0.8': {
    chatBotText: `Confirm your profile`,
    buttonTxt: 'Continue     ❯',
    animationSpeed: 80,
  },
  '0.9': {
    chatBotText: `OTP Verification`,
    buttonTxt: 'Verify     ❯',
    animationSpeed: 20,
  },
};

export const BoardingScreen = () => {
  const [values, setValues] = useState({
    progress: 0.1,
    phoneNumber: '',
    isNumOrEmail: 'Mobile',
    otp: "",
    fullName: "",
    email: "",
    cadreType: "",
    cadre: "",
    healthFacility: "",
    state: "",
    district: "",
    tu: "",
  });
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleToggleChange = (value: string) => {
    setValues({ ...values, isNumOrEmail: value });
  };

  const handlePhoneNumberChange = (value: string | number, key: string) => {
    setValues({ ...values, [key]: value });
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
            <InputField.Input
              error='Please Enter Valid Email'
              touched={true}
              label={'Email Address'}
              value={values.email}
              onChange={(v) => handlePhoneNumberChange(v, 'email')}
              placeholder='Enter your Email'
            />
          ) : (
            <InputField.Input
              error='Please Enter Valid Mobile Number'
              touched={true}
              label='Mobile Number'
              value={values.phoneNumber}
              onChange={(v) => handlePhoneNumberChange(v, 'phoneNumber')}
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
          <InputField.Input
            error=''
            touched={false}
            label={'Mobile number*'}
            value={values.phoneNumber}
            onChange={(v) => handlePhoneNumberChange(v, 'phoneNumber')}
          />

          <InputField.Input
            error={'fhi'}
            label={'Enter OTP'}
            touched={false}
            value={values.otp}
            onChange={(v) => handlePhoneNumberChange(v, 'otp')}
          />

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
          <InputField.Input
            label='Full Name*'
            value={values.fullName}
            onChange={(v) => handlePhoneNumberChange(v, 'fullName')}
            placeholder='Enter your Full Name'
            error=''
            touched={false}
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
            <InputField.Input
              label='Full Name*'
              value={values.fullName}
              onChange={(v) => handlePhoneNumberChange(v, 'fullName')}
              placeholder='Enter your Full Name*'
              error=''
              touched={false}
            />
            <InputField.Input
              label='Email'
              value={values.email}
              onChange={(v) => handlePhoneNumberChange(v, 'email')}
              placeholder='Enter your Full Name*'
              error=''
              touched={false}
            />
            <InputField.DropDown
              label='Cadre Type'
              options={[
                'National',
                'State',
                'District',
                'Block',
                'Health-Facility',
              ]}
              value={values.cadreType}
              onChange={(v) => handlePhoneNumberChange(v, 'cadreType')}
              placeholder='Select cadre level'
              error=''
              touched
            />
            <InputField.DropDown
              label='Cadre'
              options={[
                'National',
                'State',
                'District',
                'Block',
                'Health-Facility',
              ]}
              value={values.cadre}
              onChange={(v) => handlePhoneNumberChange(v, 'cadre')}
              placeholder='Select cadre'
              error=''
              touched
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
        ><ScrollView>
            <DropDown
              label='Health Facility**'
              options={[
                'National',
                'State',
                'District',
                'Block',
                'Health-Facility',
              ]}
              value={values.healthFacility}
              onChange={(v) => handlePhoneNumberChange(v, 'healthFacility')}
              placeholder='Select Health Facility'
            />
            <DropDown
              label='State*'
              options={[
                'Gujarat',
                'MP',
                'UP',
                'Block',
                'Health-Facility',
              ]}

              value={values.state}
              onChange={(v) => handlePhoneNumberChange(v, 'state')}
              placeholder='Select cadre'
            />
            <DropDown
              label='District*'
              options={[
                'Gujarat',
                'MP',
                'UP',
                'Block',
                'Health-Facility',
              ]}
              value={values.district}
              onChange={(v) => handlePhoneNumberChange(v, 'district')}
              placeholder='Select District'
            />
            <DropDown
              label='TU*'
              options={[
                'Gujarat',
                'MP',
                'UP',
                'Block',
                'Health-Facility',
              ]}
              value={values?.tu}
              onChange={(v) => handlePhoneNumberChange(v, 'tu')}
              placeholder='Select TU'
            />
          </ScrollView>
        </Animated.View>
      )}


      {values.progress === 0.7 && (
        <Animated.View
          style={{
            flex: 1,
            opacity: opacity,
            justifyContent: 'space-evenly',
            transform: [{ translateY: translateY }],
          }}
        >
          <ScrollView style={{
            paddingHorizontal: 20,
          }}>
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
            <InputField.Input
              error='Please Enter Valid Email'
              touched={false}
              label={'Email Address'}
              value={values.email}
              onChange={(v) => handlePhoneNumberChange(v, 'email')}
              placeholder='Enter your Email'
            />
            <Row style={{ justifyContent: 'space-between', marginVertical: 15 }}>
              <Text>Personal Details</Text>
              <Image
                source={logoIc}
                style={{
                  height: 14,
                  width: 14,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </Row>
            <Column style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingVertical: 10 }}>
              <Row style={{ justifyContent: 'space-between' }}>

                <InputField.Input
                  containerStyle={{ borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter Full Name'
                  touched={false}
                  label={'Full Name'}
                  value={values.fullName}
                  onChange={(v) => handlePhoneNumberChange(v, 'email')}
                  placeholder='Enter Full Name'
                />

                <InputField.Input
                  containerStyle={{ borderStartColor: "gray", borderStartWidth: 1, borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter Mobile Number'
                  touched={false}
                  label={'Mobile Number'}
                  value={values.phoneNumber}
                  onChange={(v) => handlePhoneNumberChange(v, 'email')}
                  placeholder='Enter Mobile'
                />

              </Row>
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter Cadre Type'
                touched={false}
                label={'Cadre Type'}
                value={values.cadreType}
                onChange={(v) => handlePhoneNumberChange(v, 'email')}
                placeholder='Enter Cadre Type'
              />
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter Valid Cadre'
                touched={false}
                label={'Cadre'}
                value={values.cadre}
                onChange={(v) => handlePhoneNumberChange(v, 'email')}
                placeholder='Enter your Cadre'
              />
            </Column>
          </ScrollView>
        </Animated.View>
      )}
      {values.progress === 0.8 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {/* <Text
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
            </Text> */}
            <Image style={{
              backgroundColor: '#E8F1FF',
              alignSelf: 'flex-start',
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              width: 50,
              height: 50
            }} source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={fontStyles.resendOTPText}>Edit Picture</Text>
            <InputField.Input
              error='Please Enter Valid Email'
              touched={false}
              label={'Email Address'}
              value={values.email}
              onChange={(v) => handlePhoneNumberChange(v, 'email')}
              placeholder='Enter your Email'
            />
            <Row style={{ justifyContent: 'space-between', marginVertical: 15 }}>
              <Text>Personal Details</Text>
              <Image
                source={logoIc}
                style={{
                  height: 14,
                  width: 14,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </Row>
            <Column style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingVertical: 10 }}>
              <Row style={{ justifyContent: 'space-between' }}>
                <InputField.Input
                  containerStyle={{ borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter Full Name'
                  touched={false}
                  label={'Full Name'}
                  value={values.fullName}
                  onChange={(v) => handlePhoneNumberChange(v, 'email')}
                  placeholder='Enter Full Name'
                />
                <InputField.Input
                  containerStyle={{ borderStartColor: "gray", borderStartWidth: 1, borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter Mobile Number'
                  touched={false}
                  label={'Mobile Number'}
                  value={values.phoneNumber}
                  onChange={(v) => handlePhoneNumberChange(v, 'email')}
                  placeholder='Enter Mobile'
                />
              </Row>
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter Cadre Type'
                touched={false}
                label={'Cadre Type'}
                value={values.cadreType}
                onChange={(v) => handlePhoneNumberChange(v, 'email')}
                placeholder='Enter Cadre Type'
              />
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter Valid Cadre'
                touched={false}
                label={'Cadre'}
                value={values.cadre}
                onChange={(v) => handlePhoneNumberChange(v, 'email')}
                placeholder='Enter your Cadre'
              />
            </Column>
            <Row style={{ justifyContent: 'space-between', marginVertical: 15 }}>
              <Text>Geographic Details</Text>
              <Image
                source={logoIc}
                style={{
                  height: 14,
                  width: 14,
                  marginHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </Row>
            <Column style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingVertical: 10 }}>
              <Row style={{ justifyContent: 'space-between' }}>
                <InputField.Input
                  containerStyle={{ borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter State'
                  touched={false}
                  label={'State'}
                  value={values.state}
                  onChange={(v) => handlePhoneNumberChange(v, 'state')}
                  placeholder='Enter State'
                />

                <InputField.Input
                  containerStyle={{ borderStartColor: "gray", borderStartWidth: 1, borderWidth: 0, flex: 1, borderRadius: 0, padding: 0, marginTop: 0 }}
                  error='Please Enter District'
                  touched={false}
                  label={'District'}
                  value={values.district}
                  onChange={(v) => handlePhoneNumberChange(v, 'district')}
                  placeholder='Enter District'
                />

              </Row>
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter TU'
                touched={false}
                label={'TU'}
                value={values.tu}
                onChange={(v) => handlePhoneNumberChange(v, 'tu')}
                placeholder='Enter TU'
              />
              <InputField.Input
                containerStyle={{ borderWidth: 0, padding: 0, marginTop: 0 }}
                error='Please Enter Health-Facility'
                touched={false}
                label={'Health-Facility'}
                value={values.healthFacility}
                onChange={(v) => handlePhoneNumberChange(v, 'healthFacility')}
                placeholder='Enter your Health-Facility'
              />
            </Column>
          </ScrollView>
        </Animated.View>
      )}


      {values.progress === 0.9 && (
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            opacity: opacity,
            transform: [{ translateY: translateY }],
          }}
        >
          <InputField.Input
            error=''
            touched={false}
            label={'Mobile number*'}
            value={values.phoneNumber}
            onChange={(v) => handlePhoneNumberChange(v, 'phoneNumber')}
          />

          <InputField.Input
            error={'fhi'}
            label={'Enter OTP'}
            touched={false}
            value={values.otp}
            onChange={(v) => handlePhoneNumberChange(v, 'otp')}
          />

          <Row style={{ justifyContent: 'space-between', margin: 4 }}>
            <Text style={fontStyles.resendOTPText}>
              Didn’t receive yet? Resend now
            </Text>
            <Text style={fontStyles.resendOTPText}>00:00</Text>
          </Row>
        </Animated.View>
      )}
      <View style={{ flex: 0.2, justifyContent: 'center', paddingHorizontal: 20 }} >
        <Button
          bgColor='#394F89'
          title={onProgressSteps[values.progress].buttonTxt}
          onPress={() => {
            if (values.progress === 0.9) {
              navigation.navigate('homeScreen')
            } else {
              setValues({
                ...values,
                progress:
                  values.progress === 0.1
                    ? 0.2 : values.progress === 0.2
                      ? 0.4 : values.progress === 0.4
                        ? 0.5 : values.progress === 0.5
                          ? 0.7 : values.progress === 0.7
                            ? 0.8 : values.progress === 0.8
                              ? 0.9 : 0.1
              });
            }
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
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginEnd: 10,
    color: '#394F89', // Use your colorCode.textColor.maisonGray value here
  },
});
