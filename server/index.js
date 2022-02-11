require("dotenv").config();

const { response } = require("express");
const express = require("express");

const app = express();

const userController = require("./controllers/userController");

const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json());

let cb = () => {
    console.log("hit");
};

app.get("/", userController.getUserData);
app.get("/api/users", userController.getUserData);
app.post("/api/users", userController.addUserEmail);

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
