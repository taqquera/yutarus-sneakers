import React from 'react'
import s from './Card.module.css'

const Card = (props) => {

   

    return (
        <div className={s.card}>
            <div className={s.favourite}>
                <img src='/img/liked.svg' alt='favourite' />
            </div>
            <img className={s.cardImage} src={props.imageUrl} alt='sneaker' />
            <h5 className={s.cardName}>{props.title}</h5>
            <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                    <span className={s.priceTitle}>ЦІНА:</span>
                    <b className={s.priceValue}>{props.price} грн</b>
                </div>
                <button className={s.addButton} >
                    <img className={s.add} src='/img/add.svg' alt='add' />
                </button>
            </div>
        </div>
    )
}

export default Card
