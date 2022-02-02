import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import getRoutes from "./routes/dataRouter.js";
import path from "path";

const __dirname = path.resolve();

const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", getRoutes);

app.get("*", (req, res) => {
  res.status(404).send("No such page");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
