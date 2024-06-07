// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { shared } from '@nikshay-setu-v3-monorepo/shared';
// import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  console.log("HOO",process.env,
    process.env.NX_PUBLIC_API_URL
  );
  
  return (
    <div>
      <NxWelcome title={shared(process.env.NX_PUBLIC_API_URL&&process.env.NX_PUBLIC_API_URL||"")} />
    </div>
  );
}

export default App;
// URL_ENV=MOBILE