import YoursPairsWithIdPage from '../../../components/Pages/YoursPairsWithIdPage';

export default function Index({ params }: { params: { id: string } }): JSX.Element {
  if (Number.isNaN(Number(params.id))) {
    return (
      <div className="text-center text-2xl uppercase mt-5">
        <span>Некорректно задан ID группы</span>
      </div>
    );
  }
  return <YoursPairsWithIdPage id={params.id} />;
}
