import foodModel from "../models/foodModel.js";
import fs from 'fs'  //fs means file system

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        await food.save()
        res.json({ success: true, message: "food added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "food not added" })
    }
}


const listFood =async(req,res)=> {
    try {
        const foods=await foodModel.find({});
        res.json({success:true, data:foods})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error"})
        
    }
}


const removeFood = async(req, res)=> {
    try {
        const food = await foodModel.findById(req.body.id).lean();
        // console.log(food)
        fs.unlink(`uploads/${food.image}`, ()=>{});
        // console.log(food.image)
        // console.log(food.price)
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"deleted"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error"})
    }
}



export { addFood, listFood, removeFood };