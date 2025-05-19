import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + "/home";
    },
  }
});

export { handler as GET, handler as POST };