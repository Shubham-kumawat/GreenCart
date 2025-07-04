//login seller : /api/seller/login
import jwt from 'jsonwebtoken';


export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("sellerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week cookie expiration time
      });

      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//seller auth : /api/seller/is-auth


export const isSellerAuth = async (req, res) => {
    try{
        
        return res.json({ success: true });

    }catch (error) { 
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


//sellerlogout : /api/seller/logout

export const sellerLogout = async (req, res) => {
    try{
        res.clearCookie("sellerToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'? 'none' : 'strict',
        });
        return res.json({ success: true, message: 'Logged out' });
    }catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}