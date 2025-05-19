'use client'; // Client-side component

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign in with GitHub</h1>
      <button
        onClick={() => signIn("github")}
        style={{
          background: "#24292F", // GitHub button color
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign in with GitHub
      </button>
    </div>
  );
}