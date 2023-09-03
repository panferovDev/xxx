import AllGroupsCard from '../UI/AllGroupsCard';
import AddStudentsInGroup from '../UI/AddStudentsInGroup';
import AddGroup from '../UI/AddGroup';

export default async function Dashboard(): Promise<JSX.Element> {
  return (
    <div className="flex md:flex-row sm:flex-col gap-5">
      <div className="w-full md:w-1/2">
        <AllGroupsCard />
      </div>
      <div className="w-full md:w-1/2">
        <AddGroup />
        <AddStudentsInGroup />
      </div>
    </div>
  );
}
