import { useCallback } from 'react';
import { Button } from '@mui/material';
import { GoogleLogin, useGoogleLogin, CodeResponse, CredentialResponse } from '@react-oauth/google';
import jwt_decode, { JwtPayload } from 'jwt-decode';

interface GoogleJwtPayload extends JwtPayload {
  azp?: string;
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  name?: string;
  picture?: string;
}

/**
 * @reference https://velog.io/@corinthionia/React-Google-OAuth-도입하기
 * https://velog.io/@mannmae/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EA%B5%AC%EA%B8%80-%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%BC%EB%8B%A8-%EA%B0%80%EC%A0%B8%EB%8B%A4-%EC%93%B0%EC%84%B8%EC%9A%94
 */
export const GoogleLoginButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loggingGoogleResponse = (credentialResponse: CredentialResponse) => {
    // eslint-disable-next-line no-console
    console.log(`credentialResponse`, credentialResponse);

    const payload = jwt_decode<GoogleJwtPayload>(credentialResponse.credential ?? '');
    console.log(`payload.email`, payload.email);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse: CodeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  const handleGoogleCodeClicked = useCallback(() => {
    login();
  }, []);

  return (
    <>
      <div>
        <h2>google 암시적 방식</h2>
        <GoogleLogin text="signup_with" onSuccess={loggingGoogleResponse} />
      </div>
      <div>
        <h2>google code 방식</h2>
        <Button variant="contained" onClick={handleGoogleCodeClicked}>
          google code
        </Button>
      </div>
    </>
  );
};
