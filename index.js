const fs = require("fs");
const DATABASE_FILE_PATH = "./dados/database.csv";

const db = fs.readFileSync(DATABASE_FILE_PATH, "utf-8");

const regex = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;

const match = db.match(regex);

console.log(match);
