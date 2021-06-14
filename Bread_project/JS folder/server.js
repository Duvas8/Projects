const express  = require("express");
const bodyParser  = require("body-parser");
const mongoose  = require("mongoose");
const shortid = require('shortid');



const app = express();
app.use(bodyParser.json());
// צריך לבדוק עוד על מונגו ואיך עובדים עם השרתים
mongoose.connect("mongodb://localhost/bread_project_db", {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});
// note: the server  name neeids to be Different  from the model name,  see the to lines under
const ShopItem = mongoose.model(
    "shopitems",
    new mongoose.Schema({
    _id: {  type: String, default: shortid.generate },
    name: String,
    image: String, 
    price: Number,
    info: String,
    flourType: [String],
}))

app.get("/api/shopitems", async (req, res)=>{

    const ShopItems = await ShopItem.find({});
    res.send(ShopItems);

});

app.post("/api/shopitems", async (req, res)=>{

    const newShopItem = new  ShopItem(req.body);
    const savedShopItem = await newShopItem.save();
    res.send(savedShopItem);
});

app.delete("/api/shopitems/:id", async (req, res) => {
    const deletedShopItem = await ShopItem.findByIdAndDelete(req.params.id);
    res.send(deletedShopItem);
  });

const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`server at http://localhost:${port}`));




/*




import express from "express";
import data from "./data.js"



const app = express();

app.get('/api/ShopItems',  (req, res)=>{
    
     res.send(data.shopItems);
});


app.get('/',  (req, res)=>{
    
    res.send("server ready");
});

const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`server at http://localhost:${port}`));
*/
