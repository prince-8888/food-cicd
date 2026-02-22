import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import { addFood } from "./controllers/foodController.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDb();

//endPoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order", orderRouter)


app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})