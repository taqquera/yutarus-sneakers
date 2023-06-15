import React from 'react'
import s from './Cart.module.css'

const Cart = () => {
  return (
    <div className={s.cartOverlay}>
      <div className={s.cart}>
        <h2 className={s.cartTitle}>Кошик</h2>
        <div className={s.cartItem}>
            <img src="/img/sneakers/1.jpg" alt="sneaker" />
            <div className={s.itemInfo}>
                <p className={s.infoTitile}>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                <b className={s.infoPrice}>6499</b>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
