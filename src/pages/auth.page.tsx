import { signIn, signOut, useSession } from 'next-auth/react';

function AuthPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in
        <br />
        <button type="button" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in
      <br />
      <button
        type="button"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

export default AuthPage;
