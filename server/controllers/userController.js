require("dotenv").config();
const Sequelize = require("sequelize");
const { CONNECTION_STRING, SERVER_PORT } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

let userArr = [];

module.exports = {
    getUserData: async (req, res) => {
        console.log("hit get user");
        res.status(200).send(userArr);
    },
    addUserEmail: async (req, res) => {
        console.log(req.body);
        userArr.push(req.body);
        console.log(userArr);
        res.status(200).send("successfully added user email");
    },
};
