import AllGroupsCard from '../UI/AllGroupsCard';
import AddStudentsInGroup from '../UI/AddStudentsInGroup';
import AddGroup from '../UI/AddGroup';

export default async function Dashboard(): Promise<JSX.Element> {
  return (
    <div className="flex md:flex-row flex-col gap-5">
      <div className="w-12/12 md:w-1/2">
        <AllGroupsCard />
      </div>
      <div className="w-12/12 md:w-1/2">
        <AddGroup />
        <AddStudentsInGroup />
      </div>
    </div>
  );
}
