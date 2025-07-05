import { Children, createContext, useState,useContext, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext= createContext ();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller]= useState(false)
    const [showUserLogin, setShowUserLogin]= useState(false)
    const [products, setProducts]= useState([])


    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    //Fetch seller status 
    const fetchSeller = async ()=>{
        try {
            const {data} = await axios.get("/api/seller/is-auth");
            if(data.success){
           setIsSeller(true)
            }else{
                setIsSeller(false)
            }
        
        } catch (error) {
            setIsSeller(false)
            
        }
    }

    //fech user auth status , user data or cart itmes

    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get("/api/user/is-auth");
            if(data.success){
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null)
        }
    }

   //fetch all products
    const fetchProducts = async ()=>{
        try {
          const {data} = await axios.get("/api/product/list");
          if (data.success){
            setProducts(data.products)

          }else{
            toast.error(data.message)
          }
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            cartData[itemId] += 1
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }


    //update

    const updateCartItem = (itemId, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId]= quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }
    
    //remove 
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId]=== 0){
                delete cartData[itemId];
            }
        }
        toast.success("Remove From Cart")
        setCartItems(cartData)
    }


    //Cart Item Count\

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item]
        }
        return totalCount;
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((products)=> products._id === items);
            if(cartItems[items]> 0){
                totalAmount +=itemInfo.offerPrice * cartItems[items]
            }
        }

        return Math.floor(totalAmount *100) / 100;
    }




    useEffect(()=>{
        fetchSeller()
        fetchProducts()
        fetchUser()
    },[])

//UPDATE database cart items
    useEffect(()=>{
        const  updateCart = async ()=>{
            try {
                const {data} = await axios.post("/api/cart/update", { userId:user._id,cartItems})
                if(!data.success){
                   toast.error(data.message)
                } 
            } catch (error) {
                toast.error(error.message)
                
            }
        }
        // if(user){
        //     updateCart()
        // }
        if (user && user._id) {
    updateCart();
}

    }, [cartItems])

    const value = {navigate, user ,setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products, currency,
          addToCart, updateCartItem, removeFromCart,cartItems,
        searchQuery, setSearchQuery, fetchProducts,getCartAmount, getCartCount, axios, setCartItems}

   
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}