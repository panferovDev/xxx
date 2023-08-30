import AddStudentsInGroup from '../UI/AddStudentsInGroup';
import AddGroup from '../UI/AddGroup';

export default function Dashboard(): JSX.Element {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold">Dashboardd</h2>
      </div>
      <div className="w-full md:w-1/2">
        <AddGroup />
        <AddStudentsInGroup />
      </div>
    </div>
  );
}
