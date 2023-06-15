import React from 'react'
import Sneakers from './Sneakers/Sneakers'
import s from './Content.module.css'

const Content = (props) => {
  return (
    <div className={s.content}>
      <div className={s.carousel}>
            <img src='/img/slider-item.png' alt='carousel' />
          </div>
        <div className={s.contentWrapper}>
        
          <h1 className={s.contentTitle}>Усі кросівки</h1>
          <div className={s.searchString}>
            <img className={s.searchIcon} src='/img/search.svg' alt='search' />
            <input className={s.searchInput} placeholder='Пошук...' />
          </div>
        </div>
        <Sneakers sneakers={props.sneakers} />
      </div>
  )
}

export default Content
