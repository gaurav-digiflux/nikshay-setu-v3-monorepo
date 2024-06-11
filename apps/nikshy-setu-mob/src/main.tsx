import { AppRegistry } from 'react-native';
import MainApp from './app/App';
import { Provider } from 'react-redux';
import { initStore } from '@nikshay-setu-v3-monorepo/store';

export const App = () => {
  return (
    <Provider store={initStore()}>
      <MainApp   />
    </Provider>
  );
};

AppRegistry.registerComponent('NikshySetuMob', () => App);
