/* eslint-disable */
import { initStore } from '@nikshay-setu-v3-monorepo/store';
import { Provider } from 'react-redux';
import NxWelcome from './nx-welcome';
export function App() {
  return (
    <Provider store={initStore() as any}>
      <NxWelcome title={''} />
    </Provider>
  );
}
/* eslint-disable */
export default App;
