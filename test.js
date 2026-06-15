require("dotenv").config();
const mongoose = require("mongoose");

console.log(process.env.ATLASDB_URL);

mongoose.connect(process.env.ATLASDB_URL)
.then(() => {
    console.log("CONNECTED");
})
.catch((err) => {
    console.log("ERROR =>", err);
});