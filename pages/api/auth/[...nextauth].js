import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "779433692129-5j5k00mqd8et7k670gb1jf25j386mrp6.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
