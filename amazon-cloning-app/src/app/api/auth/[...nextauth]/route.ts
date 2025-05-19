import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session} from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }:{ session: Session; token: any }) {
      if (token?.user) {
        session.user.id = token.user.id;
        session.user.name = token.user.name;
      }
      return session;
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };