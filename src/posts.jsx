import React from 'react'
import useJsonFetch from './useJsonFetch'
import List from './list';

function Posts() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/posts`);

  return (
    <div>
      {isLoading && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {data && !isLoading && (
        <div>
          {data.length < 1 ? <div>нет постов</div> : <List data={data} />}
        </div>
      )}
    </div>
  )
}


export default Posts