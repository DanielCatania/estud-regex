const fs = require("fs");
const DATABASE_FILE_PATH = "./dados/database.csv";

const db = fs.readFileSync(DATABASE_FILE_PATH, "utf-8");

const regex = /\(\d{2}\)\s\d{4,5}-\d{4}/g;

const match = db.match(regex);

console.log(match);
