import type { Metadata } from "next";

import SignInForm from "@/components/forms/SignInForm";

export const metadata: Metadata = {
  title: "Sign in",
};

const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignIn;
