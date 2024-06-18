import { initStore } from '@nikshay-setu-v3-monorepo/store';
import { useEffect, useState } from 'react';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { BoardingScreen } from './screens/boardingScreen';

export const App = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setLoader(true);
    }, 4000);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={initStore()}>{loader && <BoardingScreen />}</Provider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent('NikshySetuMob', () => App);
