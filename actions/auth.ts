"use server";

import { db } from "@/db";
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";

const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};

export const loginWithCreds = async (formData: FormData) => {
  
    const rawFormData = {
      email: formData.get("email") ,
      password: formData.get("password") ,
      redirectTo: "/",
    };

   const existinbUser = await getUserByEmail(formData.get("email") as string);
 
   try {await signIn("credentials", rawFormData);}
   catch(error:any){
     if( error instanceof AuthError){
        switch (error.type) {
            case "CredentialsSignin":
                return { error: "Invalid Credentials" };
                
        
            default:
              return { error: "Something went wrong" };
        }
     }
     throw error
   }
};
