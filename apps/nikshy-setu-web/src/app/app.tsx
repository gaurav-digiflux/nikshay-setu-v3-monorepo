// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { shared } from '@nikshay-setu-v3-monorepo/shared';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title={shared()} />
    </div>
  );
}

export default App;
