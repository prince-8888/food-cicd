import mongoose from 'mongoose';

export const connectDb = async () => {
    await mongoose.connect(process.env.MONGODB_URI)


    
    .then(() => {
        console.log("Database connected")
    })
}



//mongodb://princeprajapati3848:princeFoodDelivery@cluster0-shard-00-00.8r8l0.mongodb.net:27017,cluster0-shard-00-01.8r8l0.mongodb.net:27017,cluster0-shard-00-02.8r8l0.mongodb.net:27017/food-delivery?ssl=true&replicaSet=atlas-xxxxx&authSource=admin&retryWrites=true&w=majority
//mongodb+srv://princeprajapati3848:princeFoodDelivery@cluster0.8r8l0.mongodb.net/food-delivery





