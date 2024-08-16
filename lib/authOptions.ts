import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'username',
                    type: 'text',
                    placeholder: 'Username'
                },
                password:{
                    label:'Password',
                    type:'password',
                    placeholder:'password',
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
                const hashPassword = bcrypt.hash(password, 10);

                const match = bcrypt.compare(password, user.password);
                if(await match){
                    return user;
                }

                throw new Error("invalid password")
            }
        }),
    ]
}