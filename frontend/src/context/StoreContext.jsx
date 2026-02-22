import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (prop) => {

    const [cartItems, setCartItems] = useState({});
    // const url = "http://localhost:4000";
    const url = "/server"
    const [token, setToken] = useState("")
    const [food_list, setFood_list] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }



    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])


    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         let itemInfo = food_list.find((product) => product._id === item);
    //         totalAmount += itemInfo.price * cartItems[item];
    //     }
    //     return totalAmount;
    // }


const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {

        const itemInfo = food_list.find(
            product => product._id.toString() === item.toString()
        );

        if (!itemInfo) continue;

        totalAmount += Number(itemInfo.price) * Number(cartItems[item]);
    }

    return totalAmount;
};




    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFood_list(response.data.data)

    }

    // const loadCartData = async (token) => {
    //     const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    //     console.log(response)
    //     setCartItems(response.data.cartData)

    // }

    const loadCartData = async (token) => {
        try {
            const response = await axios.get(url + "/api/cart/get", {
                headers: { token }
            });
            console.log(response);
            setCartItems(response.data.cartData);
        } catch (error) {
            console.error("Error fetching cart data:", error.response?.data || error.message);
        }
    };
    

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();

    }, [])





    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {prop.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;