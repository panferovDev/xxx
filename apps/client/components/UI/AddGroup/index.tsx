import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';

export default function AddGroup(): JSX.Element {
  return (
    <>
      <h2 className="text-left text-violet-500 mb-1">Add group</h2>
      <form>
        <div className="flex">
          <Input className="block" type="text" placeholder="add group" />
          <Button className="ml-3" type="submit">
            submit
          </Button>
        </div>
      </form>
    </>
  );
}
