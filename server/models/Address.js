
import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({

})

const Address = mongoose.models.address || mongoose.model("address", addressSchema);