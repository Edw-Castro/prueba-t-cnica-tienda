import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'

function CartItem({product, addToCart}) {
  return(
  <li>
    <img 
      src={product.image}
      alt={product.title}
    />
    <div>
      <strong>{product.title}</strong> - ${product.price}
    </div>
    <footer>
      <small >
        Qty: {product.quantity}
      </small>
      <button onClick={addToCart}>+</button>
    </footer>
  </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const {cart, clearCart, addToCart} = useCart()
  return (
  <>
    <label className='cart-button' htmlFor={cartCheckboxId}>
      <CartIcon />
    </label>
    <input id={cartCheckboxId} type='checkbox' hidden />
    <aside className='cart'>
      <ul>
        {
          cart.map(product => (
            <CartItem 
              key={product.id} 
              product={product}
              addToCart={()=>addToCart(product)}
            />
          ))
        }
      </ul>

      <button onClick={clearCart}>
        <ClearCartIcon/> 
      </button>
    </aside>
  </>)
}
