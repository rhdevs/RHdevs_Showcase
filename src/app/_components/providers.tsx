"use client";

import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { getServerAuthSession } from "~/server/auth";

export function Providers(props: {
  children: React.ReactNode;
  serverSession: Session | null;
}) {
  return (
    <SessionProvider session={props.serverSession}>
      {props.children}
    </SessionProvider>
  );
}
