import { AppNavigationGuest } from './GuestNavigationStack';
import { AppNavigationUser } from './UserNavigationStack';

export function AppNavigation(): JSX.Element {
  const token = false;
  return token ? <AppNavigationUser /> : <AppNavigationGuest />;
}
