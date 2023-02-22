import express, { Router } from "express";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Is Running on the port ${port}.`))