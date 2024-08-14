import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
const prisma =new PrismaClient();

export async function POST(request:Request){
    try {
        const { username, password} = await request.json();
        const user = await prisma.user.findUnique({
            where: {
                Username: username
            }
        })
        if(user){
            return NextResponse.json({status:201, message:"user already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const res=await prisma.user.create({
            data: {
                Username: username,
                password:hashedPassword,
            }
        })
        if(!res){
            return NextResponse.json({status:500, message:"user registration failed in database"});
        }
        return NextResponse.json({status:200, message:"user created successfully"})
    } catch (error) {

        console.log("error:", error)
        return NextResponse.json({status:501, message:"username or password does not exist"})
    }
}