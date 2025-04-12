const { Model } = require("mongoose");
const UserModel = require("../Collections/User Model");

let Index = async function (req, res) {
    res.send("Index Page");
    res.end();
};

let About = async function (req, res) {
    res.send("About Page");
    res.end();
};

let Contact = async function (req, res) {
    res.send("Contact Page");
    res.end();
};

let FeedBack = async function (req, res) {
    res.send("FeedBack");
    res.end();
};

let Faq = async function (req, res) {
    res.send("Faq");
    res.end();
};

let Help = async function (req, res) {
    res.send("Help");
    res.end();
};

let PrivacyPolicy = async function (req, res) {
    res.send("PrivacyPolicy");
    res.end();
};


let save_data = async function (req, res) {
    try {
        console.log("Received Data", req.body);
        let user_give_data = new UserModel(req.body);
        let saving = await user_give_data.save();
        res.status(200).json({ msg: "Data Saved Successfully",data:saving });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {save_data,Index,About,Contact,FeedBack,Faq, Help, PrivacyPolicy}
 