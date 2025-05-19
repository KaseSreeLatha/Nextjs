'use client';

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign in with Google</h1>
      <button
        onClick={() => signIn("google")}
        style={{
          background: "#24292F",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}