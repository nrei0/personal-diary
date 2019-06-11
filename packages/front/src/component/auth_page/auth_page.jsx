import React from 'react';
import { withPage } from '../page';
import { Button } from '../button';

/**
 * Auth page component.
 */
export const AuthPage = withPage()(() => {
  const googleAuthHandler = () => {
    // eslint-disable-next-line
    console.log('fire google auth handler');
  };

  return (
    <div>
      <Button text="Google auth" onClick={googleAuthHandler} />
    </div>
  );
});
