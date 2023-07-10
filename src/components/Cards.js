import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out epic destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall' 
                        label='Adventure' 
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        text='Explore dunes' 
                        label='Desert' 
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-2.jpg'
                        text='Explore islands' 
                        label='Islands' 
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards