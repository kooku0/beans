import { signIn, signOut, useSession } from 'next-auth/react';

import Button from '@/components/common/Button';

function SignInPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in
        <br />
        <Button
          type="button"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in
      <br />
      <Button
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </>
  );
}

export default SignInPage;
