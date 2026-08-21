import app from "./app";
import { prisma } from "./lib/prisma";


async function bootstrap() {
    try {
        await prisma.$connect();
        console.log("✅ Database connected");
        app.listen(4000, () => {
            console.log(`Server running on port 4000`);
        })
    } catch (error) {
        console.error("❌ Database connection failed");
        console.error("Failed to start application", error);
        process.exit(1);
    }
}

bootstrap();