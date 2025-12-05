"use client";

import { useProducts } from "@/context/ProductContext";

export default function CartPage() {
  const { cart } = useProducts();

  return (
    <section className="cart-section">
      <h2>Your cart</h2>
      <div className="cart-container">
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item];
          console.log("Item Data ",itemData)
          const itemQuantity = itemData?.quantity;

          const imageName = itemData.name === "Medieval Dragon Planner.png" ? 

          'planner' : itemData.name.replaceAll(" Sticker.png", "").replaceAll("_", "")

          const imageUrl = 'low_res/' + imageName + '.jpeg'
          

         return (
          <div key={itemIndex} className="cart-item">
            <img src={imageUrl} alt={imageName + '-img'} />
            <div className="cart-item-info">
            <h3>{itemData.name}</h3>
            <p>{itemData.description.slice(0,100)}{itemData.description.length > 100 ? '...' : ''}</p>
            </div>

          </div>
         )
        
        })}
      </div>
      
    </section>
  );
}
