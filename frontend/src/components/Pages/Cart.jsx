import { useSelector } from "react-redux";
import { CartProduct } from "../All-products/CartProduct";
import axios from "axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  // console.log(productCartItem, "productItem");

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);


//   const handlePayment=async()=>{
//     try{
        
//         const res=await axios.post("http://localhost:8000/api/v1/check-payment",{
          
//         headers:{
//         "content-type":"application/json"
//       },
//       body:JSON.stringify(productCartItem),
      
//     })
//     if(res.statuscode === 500) return
//     const data={
//       success:true,
//       message:"payment",
//       product:productCartItem
//     }
//     toast("Redirect to payment gatway....")
//     console.log(data,"data");
// const stripePromise=await loadStripe(process.env.REACT_STRIPE_PUBLIC_KEY) 
//     stripePromise.redirectToCheckout({sessionId:data})
//       }catch(error){
//         console.log(error,"payment page");
//       }
//   }

// const handlePayment=async()=>{
//      const stripePromise=await loadStripe(process.env.REACT_STRIPE_PUBLIC_KEY)  
//       const res=await axios.post("http//:localhost:8000/check-payment",{
        
//       headers:{
//       "content-type":"application/json"
//     },
//     body:JSON.stringify(productCartItem),
    
//   })
//   if(res.statuscode === 500) return

//   const data=await res.json()
//   // const data={
//   //   success:true,
//   //   message:"payment",
//   //   product:productCartItem
//   // }
//   toast("Redirect to payment gatway....")
//   console.log(data,"data");
//   stripePromise.redirectToCheckout({sessionId:data})
    
// }

const handlePayment = async () => {
  try {
    const res = await axios.post("http://localhost:8000/api/v1/check-payment", productCartItem);
    const sessionId = res.data;
    toast("Redirecting to payment gateway...");
    const stripePromise = await loadStripe(process.env.REACT_STRIPE_PUBLIC_KEY);
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error("Error occurred while making payment:", error);
    toast.error("Payment failed. Please try again later.");
  }
};
    
  return (
    <>
      <div className="pt-20 bg-slate-100 p-2:p-4 min-h-0 min-h-[650px]">
        <div className="text-lg md:text-3xl font-bold text-slate-600 ml-2">
          Your Cart Item{" "}
        </div>

        {productCartItem[0] ?
          <div className="mt-4 ml-2 md:flex  ">
            <div className="w-full max-w-3xl  ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            <div className="ml-auto  w-96  mt-2 rounded  mr-6">
              <div className=" text-center bg-blue-600 text-white font-bold py-3 px-5 text-lg ">
                Summary
              </div>

              <div className="flex  w-full h-12 mt-2 px-5   border-b border-slate-400 text-center items-center ">
                <p className="text-lg font-medium">Total Qty :</p>
                <p className="w-[250px] ml-auto font-bold text-lg">
                  
                  <span className="text-red-600 font-bold">₹</span> {totalQty}
                </p>
              </div>

              <div className="flex  w-full h-12 mt-2 px-5    text-center ">
                <p className="text-lg font-medium">Total price :</p>
                <p className="w-[250px] ml-auto font-bold text-lg">
                  
                  <span className="text-red-600 font-bold">₹</span>
                  {totalPrice}
                </p>
              </div>

              <button className="bg-red-400 w-full p-3 text-white text-lg font-bold m-auto hover:bg-red-600" onClick={handlePayment}>
                Payment
              </button>
            </div>
          </div>
          :
          <>
          <div className="flex flex-col w-96 m-auto">
            <p><img src="https://bexcart.com/assets/images/empty-cart.gif" alt="emptycart"  className=""/></p>
            <p className="text-4xl font-bold  text-center">Empty Cart </p>
          </div>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
