import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/image/challenge.png'
              text='Challenge Together'
              label='Challenge'
              path='/challenge'
              state = 'main_card'
            />
            <CardItem
              src='/image/mate.png'
              text='Make friends to running'
              label='Mate'
              path='/mate'
              state = 'main_card'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/image/stopwatch.png'
              text='Show your capacity and Record yours'
              label='Record'
              path='/record'
              state = 'main_card'
            />
            <CardItem
              src='/image/about.png'
              text='About us'
              label='About'
              path='/about'
              state = 'main_card'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
