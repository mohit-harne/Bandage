import React from "react";
import { useCart } from "./CartContext";
import bagImage from "../images/bagImage.png";
import Breadcrumbs from "../components/Breadcrumbs";

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <img
            src={bagImage}
            alt="Empty Cart"
            className="max-w-full max-h-full mb-4"
          />
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between bg-gray-100 p-4 mb-4">
            <p className="text-lg font-semibold">
              Number of items in cart: {cart.length}
            </p>
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              Clear Cart
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={item.image || item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
