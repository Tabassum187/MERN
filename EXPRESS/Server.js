let express = require("express");
let r = require("./Route/Router");
let db = require("./Connection");
require("dotenv").config();

let app = express();

app.use("/Tab", r);

db().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
}).catch((e) => {
    console.error("DB Connection Error:", e);
});
