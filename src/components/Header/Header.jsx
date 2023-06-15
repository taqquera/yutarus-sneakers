import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header>
        <div className={s.headerLeft}>
          <img className={s.headerLogo} src='/img/logo.svg' alt='logotype' />
          <div className={s.headerInfo}>
            <h3 className={s.infoTitle}>Yutarus Sneakers</h3>
            <p className={s.infoText}>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className={s.headerRight}>
          <li className={s.headerRightItem}>
            <img className={s.headerCart} src='/img/cart.svg' alt='cart' />
            <span className={s.accountCredit}>1205 грн.</span>
          </li>
          <li className={s.headerRightItem}>
            <img className={s.headerLike} src='/img/like.svg' alt='like' />
          </li>
          <li className={s.headerRightItem}>
            <img className={s.headerProfile} src='/img/profile.svg' alt='profile' />
          </li>
        </ul>
      </header>
  )
}

export default Header
