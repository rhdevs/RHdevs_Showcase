import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";

// import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const res = await fetch("http://localhost:3000/login", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // const user = await res.json();

        // FOR NOW THIS IS THE HARDCODED VERSION!!!!
        const user = {
          id: "42",
          email: "farhanmnavas@gmail.com",
          password: "password",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password == user.password
        ) {
          return user;
        }
        // END OF HARDCODED SECTION!!!! DELETE WHEN DONE

        // if (res.ok && user) {
        //   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        //   return user;
        // }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? " ",
      clientSecret: process.env.GITHUB_SECRET ?? " ",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? " ",
    //   clientSecret: process.env.GOOGLE_SECRET ?? " ",
    // }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  // pages: {
  //   signIn: "/login",
  // },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
