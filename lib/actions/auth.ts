"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import ratelimit from "../ratelimit";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const SignInWithCredentials = async (
  credentials: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = credentials;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return redirect("/too-fast");
  }

  let result: { error?: string };
  try {
    result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.log(error, "Signin error");
    // If signIn throws, assign a generic error string to trigger our database check
    result = { error: "CredentialsSigninError" };
  }

  if (result?.error) {
    // Extra check: query the database to see if a user with this email exists
    const userExists = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (userExists.length === 0) {
      return {
        error: "The email address you entered does not match any account.",
        success: false,
      };
    } else {
      return {
        error: "The password you entered is incorrect.",
        success: false,
      };
    }
  }
  return { success: true };
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, studentId, universityCard } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return redirect("/too-fast");
  }

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
