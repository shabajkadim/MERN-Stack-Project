import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem ,incrementQty,decrementQty} from "../redux/productSlice";

export const CartProduct = ({
  id,
  image,
  name,
  category,
  price,
  qty,
  total,
}) => {

  const dispatch=useDispatch()
  return (
    <div className="bg-slate-200 p-2 gap-3 md:gap-5 md:flex border border-slate-300 rounded ">
      <div className="bg-white p-3 w-[220px] rounded h-[180px] overflow-hidden">
        <img
          src={image}
          className=" w-full h-full bg-slate-white object-cover"
        />
      </div>

      <div className="md:flex  w-full flex-col gap-1 md:gap-1">
        <div className="flex justify-between">
          <p className=" font-semibold capitalize mt-3 folt-lg text-slate-700 text-xl md:text-2xl">
            {name}
          </p>
          <div className="text-xl text-slate-700 hover:text-red-600 cursor-pointer" onClick={()=>dispatch(deleteCartItem(id))}>
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
        <p className=" capitalize font-medium text-slate-500 text-lg md:text-xl ">
          {category}
        </p>
        <p className=" font-bold text-xl">
          <span className="text-red-600">₹</span>
          {price}/-
        </p>

        <div className="flex  justify-between ">
          <div className="flex item-center gap-3">
            <button  className="bg-slate-300 hover:bg-slate-400 p-1 rounded   font-bold " onClick={()=>dispatch(incrementQty(id))}>
              <i class="fa-solid fa-plus"></i>
            </button>

            <p className="font-medium text-xl">{qty}</p>

            <button className="bg-slate-300 hover:bg-slate-400  p-1  rounded font-bold red " onClick={()=>dispatch(decrementQty(id))}>
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>

          <div className="flex font-bold gap-1 md:gap-2 text-slate-600 text-lg">
            <p>Total:</p>
            <p><span className="text-red-600 font-bold">₹</span>{total}</p>
          </div>
        </div>

        {/* <p className='capitalize font-bold text-slate-700 text-2xl h-[120px] '>Description :-<p className='ml-3 capitalize font-medium text-xl text-slate-700'>{description}</p></p> */}
      </div>
    </div>
  );
};