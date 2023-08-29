import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';

export default function AddGroup(): JSX.Element {
  return (
    <form>
      <div className="flex">
        <Input className="block" type="text" placeholder="add group" />
        <Button className="ml-3" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
}
