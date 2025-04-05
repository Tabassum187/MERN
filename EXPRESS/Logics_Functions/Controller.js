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

module.exports = { Index, About, Contact, FeedBack, Faq,  Help, PrivacyPolicy};
