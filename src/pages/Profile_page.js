import React, { useEffect, useRef, useState } from 'react'
import dd from '../images/default-avatar.png'
import get_data from '../actions/get_data'
import Posts from '../component/home/Posts'
import { useParams } from 'react-router'
const Profile_page = () =>
{
  let { id } = useParams();
  let eddit = useRef()
  let [data, set_data] = useState([])
  let get_posts = async _ =>
  { 
    let res =  await get_data(`users/${id}/posts`, 1)
    set_data(res.data)
    
    
  }
  useEffect(_ =>
  {
    // console.log(data[0].author.profile_image);
      get_posts()
  }, [])
  

  return (
  <>
      <div className='container position-relative bg-dark p-3'>
        <button className='btn btn-light position-absolute ' style={{top:'10px' ,right:'10px'}} onClick={_=>{eddit.current.classList.remove('d-none')}}>edit</button>
      <div className=''>edit</div>
      <img src={data[0]?data[0].author.profile_image:""} style={{width:'200px',height:'200px'}} className='rounded-circle mb-5'/>
      <div className='text-light text-start'>
        <h4 className='m-0 mb-3'>name : {data[0]?data[0].author.name:""}</h4>
      </div>
        <form ref={eddit} className='mt-3 text-end d-none'>
          <input className='d-block w-100 form-control' placeholder={data[0]?data[0].author.name:""} type='text'/>
          <input className='d-block w-100 form-control mt-2' type='password' placeholder='your new password' />
          <input type='submit' className='btn btn-primary mt-2 ' value='change data' />
        </form>
      </div>
      


    <div className='container mt-4'>
    {data.length ? data.map((e, i) => <Posts post={e} kayes={i} />):""}
    </div>
  </>
  )
}

export default Profile_page
