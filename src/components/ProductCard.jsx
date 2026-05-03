import React from 'react'
import styles from '../styles/ProductCard.module.css'; // Keep only one of these

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* TODO: Display product details */}
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      
      {/* TODO: Implement Add to Cart button functionality */}
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}



export default ProductCard
