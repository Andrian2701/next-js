"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Divider } from "@mui/material";

import FormLink from "../common/FormLink";
import SubmitButton from "../common/SubmitButton";
import "../../styles/Form.scss";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-text">
          <h2>Sign in to Dash</h2>
          <p>
            Do not have an account? <Link href="sign-up">Get started</Link>
          </p>
        </div>
        <Divider sx={{ color: "rgb(99, 115, 129)" }}>Or</Divider>
        <div className="cta">
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
          <SubmitButton title="Login" />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
