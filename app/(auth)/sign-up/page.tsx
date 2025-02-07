"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";
import { SignUpSchema } from "@/lib/validation";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        studentId: 0,
        universityCard: "",
      }}
      // onSubmit={SignUp}
    />
  );
};

export default page;
