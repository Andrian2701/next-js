import type { Metadata } from "next";

import SignUpForm from "@/components/forms/SignUpForm";

export const metadata: Metadata = {
  title: "Sign up",
};

const SignUp = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignUp;
