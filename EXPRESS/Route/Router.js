let express = require("express");
let func = require("../Logics_Functions/Controller");

let route = express.Router();

route.get("/", func.Index);
route.get("/about", func.About);
route.get("/contact", func.Contact);
route.get("/feedback", func.FeedBack);
route.get("/faq", func.Faq);
route.get("/help", func.Help);
route.get("/privacypolicy", func.PrivacyPolicy);

module.exports = route;
