

//place order cod : /api/order/cod

import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body;
        if (!items.length ===0 ||!address) {
            return res.json({ success: false, message: 'Invalid order data' });

        }
        //calculate amount using Items 
        let amount = await items.reduce(async(acc,item)=>{
            const product = await Product.findById(item.product);
            retrun (await acc)+ product.offerPrice * item.quantity;
        },0);

        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            address,
            amount,
            address,
            paymentType: 'COD'
        });

       return res.json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// get orders by user id : /api/order/user

export const getUserOrders = async (req, res) => {
    try {
        
        const { userId } = req.body;
        const orders = await Order.find({ 
            userId, $or: [{paymentType: "COD"}, {isPaid:true}] 
        }).populate('items.product address').sort({ createdAt: -1 });
        return res.json({ success: true, orders});
    } catch (error) {
        res,json({ success: false, message: error.message });

        
    }
}

//Get all orders(for seller/admin) : /api/order/seller

export const getAllOrders = async (req, res) => {
    try {
     
        const orders = await Order.find({ 
     $or: [{paymentType: "COD"}, {isPaid:true}] 
        }).populate('items.product address').sort({ createdAt: -1 });
        return res.json({ success: true, orders});
    } catch (error) {
        res,json({ success: false, message: error.message });

        
    }
}