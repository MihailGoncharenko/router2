import React from 'react'
import { useNavigate } from 'react-router-dom';

function Content({ title, ...props }) {

  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  return (
    <>
      <div>
        <div>
          <span>{title}</span>
          <button onClick={onCancel}>×</button>
        </div>
        {props.children}
      </div>
    </>
  )
}

Content.defaultProps = {
  title: '',
  post: {
    id: 0,
    content: ''
  }
};


export default Content