import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";

console.log("SEED FILE STARTED");

async function main() {
    console.log("MAIN STARTED");
    const password = await bcrypt.hash("Admin1!", 10);
    await prisma.user.upsert({
        where: {
            email: `admin@yopmail.com`,
        },
        update: {},
        create: {
            email: `admin@yopmail.com`,
            name: `John Doe`,
            refresh_token: "",
            role: "admin",
            password: password,
        },
    });

    console.log("User created:");



}

main()
    .catch((error) => {
        console.error("SEED ERROR:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });