import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://13.60.209.230";

    try {
        // ✅ Basic validation (VERY IMPORTANT)
        if (!req.body.userId || !req.body.items || req.body.items.length === 0) {
            return res.json({ success: false, message: "Invalid order data" });
        }

        console.log("STEP 1: Creating order");

        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });

        await newOrder.save();

        console.log("STEP 2: Order saved");

        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        console.log("STEP 3: Cart cleared");

        // ✅ Safe line items creation
        const line_items = req.body.items.map((item) => {
            if (!item.price || !item.quantity) {
                throw new Error("Invalid item data");
            }

            return {
                price_data: {
                    currency: "usd", // change to inr later
                    product_data: {
                        name: item.name || "Food Item",
                    },
                    unit_amount: Math.round(Number(item.price) * 100),
                },
                quantity: item.quantity,
            };
        });

        // ✅ Delivery charge
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 200,
            },
            quantity: 1,
        });

        console.log("STEP 4: Creating Stripe session");

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        console.log("STEP 5: Stripe session created", session.url);

        if (!session.url) {
            throw new Error("Stripe session URL not generated");
        }

        // ✅ Final response
        return res.json({
            success: true,
            session_url: session.url,
        });

    } catch (error) {
        console.error("🔥 ERROR IN PLACE ORDER:", error);

        return res.json({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
};


// Verify order
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// User orders
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Admin: list all orders
const listOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Update order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, {
            status: req.body.status,
        });
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { placeOrder, verifyOrder, userOrders, listOrder, updateStatus };