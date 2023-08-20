import Stseats from '../components/Pages/Stseats';
import { useServerSession } from '../hooks/useAuth';

export default async function Index(): Promise<JSX.Element> {
  const session = await useServerSession();
  return <Stseats session={session} />;
}
