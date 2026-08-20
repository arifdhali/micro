import app from "./app.js";




async function bootstrap() {
    try {


        
        app.listen(4000, () => {
            console.log(`Server running on port 4000`);
        })
    } catch (error) {
        console.error("Failed to start application", error);
        process.exit(1);
    }
}

bootstrap();