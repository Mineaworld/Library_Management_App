"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export const SignInWithCredentials = async (
  credentials: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = credentials;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      return { error: result.error, success: false };
    }
    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { error: "Something went wrong", success: false };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, studentId, universityCard } = params;

  //Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { error: "User already exists", success: false };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.insert(users).values({
      fullname: fullName,
      email,
      password: hashedPassword,
      studentId,
      universityCard,
    });
    //  await SignInWithCredentials({ email, password });
    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { error: "Something went wrong", success: false };
  }
};
