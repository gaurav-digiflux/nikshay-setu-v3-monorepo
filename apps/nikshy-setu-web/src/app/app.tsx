// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';

import { fetchDataw } from '@nikshay-setu-v3-monorepo/utils';
import NxWelcome from './nx-welcome';
import { Provider } from 'react-redux';
import { initStore } from '@nikshay-setu-v3-monorepo/store';

export function App() {
  console.log("HOO",process.env);
  fetchDataw()
  return (
    <Provider store={initStore()as any}>
      <NxWelcome title={""} />
      </Provider>
    );
}

export default App;
// URL_ENV=MOBILE