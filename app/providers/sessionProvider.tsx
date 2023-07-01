"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthSessionProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <SessionProvider>sessionProvider</SessionProvider>;
}
