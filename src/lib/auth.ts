import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const demoUser = process.env.DEMO_USER ?? "demo@demo.com";
const demoPass = process.env.DEMO_PASS ?? "demo1234";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim();
        const password = credentials?.password;

        if (email === demoUser && password === demoPass) {
          return { id: "demo-user", name: "Demo User", email: demoUser };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
