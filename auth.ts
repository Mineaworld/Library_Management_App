import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./database/schema";
import { eq } from "drizzle-orm";
import { db } from "./database/drizzle";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt", // Use JWT strategy for session management
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // Check if email and password are provided
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Fetch user from database
        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email.toString()))
          .limit(1);

        // Check if user exists
        if (user.length === 0) return null;

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password.toString(),
          user[0].password
        );
        if (!isPasswordCorrect) {
          return null;
        }

        // Return user object if everything is correct
        return {
          id: user[0].id.toString(),
          email: user[0].email.toString(),
          name: user[0].fullname.toString(),
        } as User;
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    // Add user to the token
    async jwt({ token, user }) {
      // Add user information to the token if user is available
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    // Add user to the session
    async session({ session, token }) {
      // Add user information to the session if token is available
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
});
