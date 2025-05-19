"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const router=useRouter()
  

  // Render nothing or a loading state if the component hasn't mounted yet
  if (!session) {
    return null; // Or render a loading spinner
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting automatically
    router.push('/signout')
  };

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
