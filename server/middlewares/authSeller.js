import jwt from 'jsonwebtoken';

const authSeller = (req, res, next) => {
    const {sellerToken} = req.cookies;

    if(!sellerToken){
        return res.status(401).json({message: 'Not authorized'});}

        try{
                    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);
                    if(tokenDecode.email === process.env.SELLER_EMAIL )  {
       next();
                        }else{
                            return res.json({success: false, message: 'Not Authorized'});
                    }
               }catch(error){
            res.json({success: false, message: error.message});
            }
}

export default authSeller;