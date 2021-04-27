

const express  = require("express");
const bodyParser  = require("body-parser");
const mongoose  = require("mongoose");
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/bread_project_db", {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});

const ShopItem = mongoose.model(
    "ShopItems",
    new mongoose.Schema({
    _id: {  type: String, default: shortid.generate },
    name: String,
    image: String, 
    price: Number,
    info: String,
    flourType: [String],
}))

app.get("/api/ShopItems", async (req, res)=>{

    const ShopItems = await ShopItem.find({});
    res.send(ShopItems);
});

app.post("/api/ShopItems", async (req, res)=>{

    const newShopItem = new  ShopItem(req.body);
    const savedShopItem = await newShopItem.save();
    res.send(savedShopItem);
});

app.delete("/api/ShopItems:id", async (req, res)=> {
    const deletedShopItem = await ShopItem.findByIdAndDelete(req.params.id);
    res.send(deletedShopItem);
})

const port = process.env.PORT || 5000;
app.listen( port, () => console.log("server at http://localhost:5000"));