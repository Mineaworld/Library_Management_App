"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";
import { SignInSchema } from "@/lib/validation";
import { SignInWithCredentials } from "@/lib/actions/auth";

const page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={SignInWithCredentials}
    />
  );
};

export default page;
