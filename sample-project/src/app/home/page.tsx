'use client';

import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session} = useSession();
  if (!session) {
    return <p>Loading...</p>;
  }
  else
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Logged in as {session.user.name}</p>
    </div>
  );
} 