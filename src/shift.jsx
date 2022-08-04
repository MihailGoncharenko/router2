import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './content';

function Shift({ post, title }) {
  const [content, setContent] = useState(post.content);

  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  function handlerInput({ target }) {
    setContent(target.value);
  }

  function handlerSend() {
    if (content === '') return
    fetchPost(content);
    setContent('');
  }

  function fetchPost() {
    fetch(`${process.env.REACT_APP_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: post.id === 0 ? 0 : post.id,
        content,
      }),
    }).then(() => onCancel());
  }

  return (
    <>
      <Content title={title}>
        <textarea className='input-field' name="text" cols="6" rows="4" id="" value={content} onChange={handlerInput}></textarea>
        <div className="footer-post">
          <button className='btn-send' onClick={handlerSend}>Опубликовать</button>
        </div>  
      </Content>
    </>
  )
}

Shift.defaultProps = {
  title: '',
  post: {
    id: 0,
    content: ''
  }
};


export default Shift