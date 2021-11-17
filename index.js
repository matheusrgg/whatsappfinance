import express from "express";
import Router from './routes.js';

const app = express();
app.use(express.json());

app.use("/", Router);

app.listen(8000, () => {
  console.log("Api Started");
});