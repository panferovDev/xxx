import AddStudentsInGroup from '../UI/AddStudentsInGroup';
import AddGroup from '../UI/AddGroup';

export default function Dashboard(): JSX.Element {
  return (
    <div className="w-full md:w-1/2">
      <AddGroup />
      <AddStudentsInGroup />
    </div>
  );
}
