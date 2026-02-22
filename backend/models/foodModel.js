import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name :{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}  
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

const food_list = [
     {
           
            name: "Greek salad",
            image: "food_1.png",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
          
            name: "Veg salad",
            image: "food_2.png",
            price: 250,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            
            name: "Clover Salad",
            image: "food_3.png",
            price: 130,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            
            name: "Chicken Salad",
            image: "food_4.png",
            price: 450,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            
            name: "Lasagna Rolls",
            image: "food_5.png",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
           
            name: "Peri Peri Rolls",
            image: "food_6.png",
            price: 180,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            
            name: "Chicken Rolls",
            image: "food_7.png",
            price: 270,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
           
            name: "Veg Rolls",
            image: "food_8.png",
            price: 110,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            
            name: "Ripple Ice Cream",
            image: "food_9.png",
            price: 145,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            
            name: "Fruit Ice Cream",
            image: "food_10.png",
            price: 190,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
          
            name: "Jar Ice Cream",
            image: "food_11.png",
            price: 160,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            
            name: "Vanilla Ice Cream",
            image: "food_12.png",
            price: 270,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            
            name: "Chicken Sandwich",
            image: "food_13.png",
            price: 220,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
          
            name: "Vegan Sandwich",
            image: "food_14.png",
            price: 130,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            
            name: "Grilled Sandwich",
            image: "food_15.png",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            
            name: "Bread Sandwich",
            image: "food_16.png",
            price: 150,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            
            name: "Cup Cake",
            image: "food_17.png",
            price: 180,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            
            name: "Vegan Cake",
            image: "food_18.png",
            price: 560,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
          
            name: "Butterscotch Cake",
            image: "food_19.png",
            price: 700,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
           
            name: "Sliced Cake",
            image: "food_20.png",
            price: 900,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
           
            name: "Garlic Mushroom ",
            image: "food_21.png",
            price: 300,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            
            name: "Fried Cauliflower",
            image: "food_22.png",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            
            name: "Mix Veg Pulao",
            image: "food_23.png",
            price: 400,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
           
            name: "Rice Zucchini",
            image: "food_24.png",
            price: 500,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
           
            name: "Cheese Pasta",
            image: "food_25.png",
            price: 350,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            
            name: "Tomato Pasta",
            image: "food_26.png",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            
            name: "Creamy Pasta",
            image: "food_27.png",
            price: 160,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            
            name: "Chicken Pasta",
            image: "food_28.png",
            price: 260,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            
            name: "Buttter Noodles",
            image: "food_29.png",
            price: 650,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            
            name: "Veg Noodles",
            image: "food_30.png",
            price: 300,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
           
            name: "Somen Noodles",
            image: "food_31.png",
            price: 500,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            name: "Cooked Noodles",
            image: "food_32.png",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }
    
];

// const seedDatabase = async () => {
//     try {
//         await foodModel.deleteMany(); // Optional: Clears previous data
//         await foodModel.insertMany(food_list);
//         console.log("Data Inserted Successfully!");
//         mongoose.connection.close();
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// };

// seedDatabase();

export default foodModel;