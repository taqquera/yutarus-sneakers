import React from 'react'
import Card from './Card/Card'
import s from './Sneakers.module.css'

const Sneakers = (props) => {
  return (
    <div className={s.sneakers}>

          {props.sneakers.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}

        </div>
  )
}

export default Sneakers
