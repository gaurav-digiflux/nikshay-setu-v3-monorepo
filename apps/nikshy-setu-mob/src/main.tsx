import { appTheme } from '@nikshay-setu-v3-monorepo/constants';
import { initStore } from '@nikshay-setu-v3-monorepo/store';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { AppRegistry, Appearance, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { AppNavigation } from './Stacks/AppNavigation';


export const App = () => {
  const [loader, setLoader] = useState(false);
  const [themeState, setThemeState] = useState('defaultMode');

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setLoader(true);
    }, 4000);
  }, []);
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={initStore()}>{loader &&
        <NavigationContainer theme={(themeState === 'dark' ? appTheme.darkcolors : appTheme.lightcolors)} >
          <AppNavigation />
          <StatusBar
            backgroundColor={colorScheme === 'dark' ?
              appTheme.darkcolors?.colors.white : appTheme.lightcolors.colors.white}
            barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          />
        </NavigationContainer>
      }</Provider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent('NikshySetuMob', () => App);
