"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";
import { SignUpSchema } from "@/lib/validation";
import { signUp } from "@/lib/actions/auth";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        studentId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default page;
