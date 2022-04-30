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
            />
            <CardItem
              src='/image/mate.png'
              text='Make friends to running'
              label='Mate'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/image/community.png'
              text='Communication with others'
              label='Community'
              path='/'
            />
            <CardItem
              src='/image/stopwatch.png'
              text='Show your capacity and Record yours'
              label='Record'
              path='/record'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='5'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
