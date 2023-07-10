import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Zoba jakie super!</h1>
        <div className='cards__container'>
            <ul className='cards__items'>
                <CardItem 
                    src='images/img-9.jpg'
                    text='Odwiedź tajemniczy wodospad' 
                    label='Odwiedź' 
                    path='/services'
                />
                <CardItem 
                    src='images/img-8.jpg'
                    text='Odwiedź pustynię' 
                    label='Odwiedź' 
                    path='/services'
                />
                <CardItem 
                    src='images/img-4.jpg'
                    text='Odwiedź boisko na wyspie' 
                    label='Odwiedź' 
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
            <CardItem 
                    src='images/img-2.jpg'
                    text='Ekspluruj wyspy' 
                    label='Eksploruj' 
                    path='/services'
                />
                <CardItem 
                    src='images/img-3.jpg'
                    text='Eksploruj ocean' 
                    label='Eksploruj' 
                    path='/services'
                />
            </ul>
        </div>
    </div>
  )
}

export default Cards