import React from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'moment/locale/ru';

function Post({ item }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/posts/${item.id}`);
  };

  return (
    <div onClick={onClick}>
      <div>
        <p>{moment(new Date(item.created)).fromNow()}</p>
        <br/>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

export default Post