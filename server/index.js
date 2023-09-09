import express from "express";
import cors from "cors";
import { connectDB } from "./database/db.js";
import router from "./routes/route.js";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

const PORT = 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`server is active on port ${PORT}`);
});
