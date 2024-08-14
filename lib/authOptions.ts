import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'username',
                    type: 'text',
                    placeholder: 'Useranme'
                },
                password:{
                    label:'Password',
                    type:'password',
                    placeholder:'Password',
                }
            },
            authorize: async (credentials): Promise<any> => {
                if(!credentials){
                    return null;
                }
                const {username, password} = credentials;
                
                const user = await prisma.user.findUnique({
                    where:{
                        Username: username
                    },
                });

                console.log(user,"pirninghte users")

                if(!user) {
                    throw new Error("No user found with this email");
                }
                if(user && user.password===password){
                    return user;
                }

                throw new Error("invalid password")
            }
        }),
    ]
}