"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";
import { SignInSchema } from "@/lib/validation";

const page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      // onSubmit = {SignIn};
    />
  );
};

export default page;
