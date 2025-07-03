import { mongo } from "mongoose";
import { updateCart } from "../controllers/cartController";
import authUser from "../middlewares/authUser";

const cartRouter = mongoose.Router();

cartRouter.post("/update", authUser, updateCart)

export default cartRouter;