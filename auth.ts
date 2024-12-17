import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { connectToDatabase } from "./lib/Connection"
import User from "./model/user"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })

  ],
  callbacks: {
    async session({ session }) {
      await  connectToDatabase()
      const dbuser = await User.findOne({ email: session.user.email })
      if (dbuser) {
        session.user.name = dbuser.userName
      }
      else { User.create({ 
        email: session.user.email,
         userName: session.user.email.split('@')[0]}) }
      return session
    },
  }


})