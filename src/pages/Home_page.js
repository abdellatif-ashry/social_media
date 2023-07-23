import React, { useEffect } from 'react'
import get_data from '../actions/get_data'
import { useState } from 'react'
import Posts from '../component/home/Posts'


const Home_page = () =>
{

    let [data, set_data] = useState([])
  let get_posts = async _ =>
  { 
    let res = await get_data('posts', 1)
    res = await res.data
    set_data(res)
    
  } 
  
  useEffect(_ =>
    {
      get_posts()
  }, [])

  
  return (
    <div >
          <div className='container'>
          {data.length ? data.map((e, i) => <Posts post={e} kayes={i} />):""}
      </div>
      {localStorage.token ?
      <button onClick={ get_posts } className="create_post btn btn-primary position-fixed" id="show_rej_model" data-bs-toggle="modal" data-bs-target="#post_modal">+</button>
      : ""}
    </div>
  )
}

export default Home_page
