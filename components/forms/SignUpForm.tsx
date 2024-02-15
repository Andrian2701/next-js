"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Divider } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import AuthAlert from "../common/AuthAlert";
import FormLink from "../common/FormLink";
import SubmitButton from "../common/SubmitButton";
import { auth } from "../../pages/api/firebase/firebase";
import "../../styles/Form.scss";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authSuccess, setAuthSuccess] = useState<boolean | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential && auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      setAuthSuccess(true);
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      setAuthSuccess(false);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      {authSuccess !== null && <AuthAlert authSuccess={authSuccess} />}
      <form onSubmit={onSubmitHandler}>
        <div className="form-text">
          <h2>Sign up to Dash</h2>
          <p>Have an account? {<FormLink path="/sign-in" title="Sign in" />}</p>
        </div>
        <Divider sx={{ color: "rgb(99, 115, 129)" }}>Or</Divider>
        <div className="cta">
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            maxLength={20}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            maxLength={15}
            required
          />
          <FormLink path="#" title="Forgot password?" />
          <SubmitButton title="Signup" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
