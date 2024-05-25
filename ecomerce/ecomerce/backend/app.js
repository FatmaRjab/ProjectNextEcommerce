const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require("mongoose")
const categorieRouter = require("./routes/categorie.route")
const scategorieRouter = require("./routes/scategorie.route")
const articleRouter = require("./routes/article.route")
const orderRouter = require("./routes/order.route")






dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("bienvenu dans notre site");
})
app.get("/contact", (req, res) => {
    res.send("bienvenu dans notre contact");
})
app.get("/profile", (req, res) => {
    res.send("bienvenu dans notre profile");
})
//config dotenv
dotenv.config()
//Les cors
app.use(cors())
//BodyParser Middleware
app.use(express.json());
mongoose.connect(process.env.DATABASE)
    .then(() => { console.log("DataBase Successfully Connected"); })
    .catch(err => {
        console.log("Unable to connect to database", err);
        process.exit();
    });
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})
const userRouter = require("./routes/user.route")
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter); 