import AddSeatForm from '../../components/UI/AddSeatForm';

export default async function Index(): Promise<JSX.Element> {
  return (
    <div className="flex mt-10  justify-center">
      <AddSeatForm />
    </div>
  );
}
