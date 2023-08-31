import Dashboard from '../components/Pages/Dashboard';
import Stseats from '../components/Pages/Stseats';
import { useServerSession } from '../hooks/useAuth';

export default async function Index(): Promise<JSX.Element> {
  return <Dashboard />;
}
