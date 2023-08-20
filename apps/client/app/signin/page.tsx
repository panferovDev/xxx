import GoogleButton from '../../components/UI/GoogleButton';

export default async function SignIn(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <GoogleButton />
    </div>
  );
}
