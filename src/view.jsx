import React from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import Content from './content';

function View({ post, onEdit, title }) {
  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  function onDelete() {
    fetch(`${process.env.REACT_APP_URL}/posts/${post.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => onCancel());
  }

  return (
    <Content title={title}>
      <div>
        <p>{moment(new Date(post.created)).fromNow()}</p>
        <br />
        <p>{post.content}</p>
      </div>
      <div>
        <button onClick={() => onEdit(false)}>Изменить</button>
        <button onClick={onDelete}>Удалить</button>
      </div>
    </Content>
  )
}


export default View