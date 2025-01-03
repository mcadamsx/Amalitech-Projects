import * as express from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/dataSoruce";
import authRoutes from "./routes/authRoutes";
import "reflect-metadata"

dotenv.config();

const app = express();

app.use(express.json());
// Routes
app.use("/api/auth", authRoutes);

// Database and Server Initialization
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((err) => console.error("Database connection error", err));
