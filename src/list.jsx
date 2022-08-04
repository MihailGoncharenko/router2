import React from 'react';
import Post from './post';

function List({ data }) {
   return data.map((item) => <Post item={item} key={item.id} />)
}


export default List