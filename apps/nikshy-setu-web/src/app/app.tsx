/* eslint-disable */
import { BASE_URL } from '@nikshay-setu-v3-monorepo/constants';
import { initStore } from '@nikshay-setu-v3-monorepo/store';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
export function App() {
  console.log('BASE_URL WEB', BASE_URL);

  return (
    <Provider store={initStore() as any}>
      <NxWelcome title={''} />
    </Provider>
  );
}
/* eslint-disable */
export default App;
