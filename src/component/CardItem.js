import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CardItem(props) {
  // const [state, setState] = useState(null);
  let state = {};
  let view_url = "";
  // const [manager, setManager] = useState(false);
  if(props.state){
    state = props.state;
    // setState(props.state);
    view_url = "/challengeview/" + state.id;
    // setManager(true);
  }
  // else{
  //   console.log(props.path);
  // }
  return (
    <>
      <li className='cards__item'>
        {props.state &&
        <Link className='cards__item__link' to={view_url}
          state={
            {grade: "manager", id: state.id, title: state.title, contents: state.contents, filename: state.filename}}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='card_cnt'>조회수 {state.count}</h5>

          </div>
        </Link>
        }
        {!props.state && <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
              // width="100" height="100"
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='main_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
}
      </li>
    </>
  );
}

export default CardItem;
