import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUserdata(){
    try {
        const numberOfUsers = await prisma.user.findMany();
        
        const userData = await prisma.form_addnew_cryptoasset.findMany({
            where: {
                status:"PENDING"
            }
        });
        return ({status:200, message: numberOfUsers, userData});
    } catch (error) {
        console.log(error,"the error in fetching data from db!")
        return({status:500, message:"Could not fetch data"});
    }
    


}