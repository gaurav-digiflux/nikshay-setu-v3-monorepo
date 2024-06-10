/* eslint-disable jsx-a11y/accessible-emoji */
import { shared } from '@nikshay-setu-v3-monorepo/shared';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const App = () => {
  const [storedValue, setLoaclStorage] = useState<string>('');
  const [asyncStorageVal, setAsyncStorageVal] = useState<string>('');

  const scrollViewRef = useRef<null | ScrollView>(null);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('TEST_KEY', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem('TEST_KEY');
      console.log('TEST_KEY value:', value);
      setAsyncStorageVal(value)
    } catch (e) {
      setAsyncStorageVal("erorr")
      console.log('TEST_KEY error:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text
              style={[styles.textXL, styles.appTitleText]}
              testID="heading"
              role="heading"
            >
              Welcome {shared(process.env.NODE_ENV)} 👋
            </Text>
          </View>
          <Text style={{color:"white"}}>
            Storage val : {asyncStorageVal}
            </Text>
          <TextInput
            editable
            multiline
            numberOfLines={2}
            maxLength={40}
            onChangeText={(text) => setLoaclStorage(text)}
            value={storedValue}
            style={{
              padding: 5,
              margin: 5,
              borderColor: 'white',
              borderWidth: 1,
            }}
          />
          <TouchableOpacity
            style={styles.listItemTextContainer}
            onPress={() => {
              storeData(storedValue)
              fetchData();
            }}
          >
            <Text style={[styles.textMd, styles.textCenter]}>
              save to local Storage
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000',
  },
  codeBlock: {
    backgroundColor: '#000000',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
    color: 'black',
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
