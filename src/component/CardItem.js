import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardItem(props) {
  const view_url = "/challengeview/" + props.id;
  const [img, setImg] = useState('');
  useEffect(()=>{
    if(props.state === 'challenge_card'){
    axios({
      url: `/challenge/image/${props.id}`,
      method: 'GET',
      responseType: 'blob',
    }).then(res=>{
      console.log(res);
      const myFile = new File([res.data], 'imgName');
      const reader = new FileReader();
      reader.onload= ev=>{
        const previewImg = String(ev.target?.result)
        setImg(previewImg);
      }
      reader.readAsDataURL(myFile);
    })}
  },[]);
  return (
    <>
      <li className='cards__item'>
        {props.state === 'challenge_card' && props.id && 
        <Link className='cards__item__link' to={view_url}
          state={
            {api: "challenge", id: props.id}}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={`${img}`}
            />
          </figure>

          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='card_cnt'>조회수 {props.count}</h5>
          </div>
        </Link>}
        {props.state === 'challenge_card' && !props.id &&
        <div className="empty_list">
          <h2>!아직 챌린지가 생성되지 않았습니다!</h2>
        </div>}
        
        {props.state === 'main_card' && 
          <Link className='cards__item__link' to={props.path}>
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
