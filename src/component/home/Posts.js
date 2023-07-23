import React, { useContext, useEffect, useRef, useState } from 'react'
import edit from '../../images/edit-icon-png-3596.png'
import { Post } from '../../context/Context'
import { useNavigate } from "react-router-dom";
import get_data from '../../actions/get_data';
import avtara from '../../images/default-avatar.png';
import { send_without_img } from '../../actions/post';
import update_data from '../../actions/update_data';
import delete_data from '../../actions/delete_data';


const Posts = ({ post, kayes }) =>
{
    let edit_delete_div = useRef()

    let on_add_comment =async e =>
    {
        e.preventDefault()
        if (localStorage.token)
        {
            
            let com = (e.target.elements[0].value);
            console.log(com,post.id);
            let res = await send_without_img(`posts/${post.id}/comments`, { "body": com })
            console.log(res);
            if (res.data) {
                window.location.reload()
            };
        } else
        {
            alert("log in firstly")
        }
    }
    let comments = useRef()
    
    let [comments_data,set_comments_data] = useState([])
    let navigate = useNavigate()
    let post_body = useContext(Post)

    let on_post_clicked =async e =>
    {
        if (e.target.alt==="edit img") {
            console.log(edit_delete_div.current);
            edit_delete_div.current.classList.remove('d-none')
        } else
        {
            if (localStorage.token === post.author.id) {
                edit_delete_div.current.classList.add('d-none')
                console.log(edit_delete_div.current);
            }
        }

        if (e.target.id === 'edit_icon')
        {
            post_body.set_post({body:post.body,id:post.id })
            document.querySelector('.update_post').classList.remove('d-none')
        } else if (e.target.id === 'delete_icon')
        {
            let res = await delete_data('posts/' + post.id)
            console.log(res);
        }else if (e.target.alt === 'profile img' || e.target.id === 'user_name') {
            navigate("/profile/"+post.author.id);
            
        } else if(e.target.id === 'show_comments')
        {
            if (comments.current.classList.contains("d-none"))
            {
                comments.current.classList.remove("d-none")
            } else
            {
                console.log(comments.current);
                comments.current.classList.add("d-none")
            }
            oncommentsclicked()
        }

    }

    let oncommentsclicked =async _ =>
    {
        let res = await get_data("posts/"+post.id)
        res = await res.data
        set_comments_data(res.comments);
}

    useEffect(_ =>
    {
        // console.log(post_body.post);
    }, [post_body.post])


    useEffect(_ =>
    {
        // console.log(comments_data);
        console.log(typeof post.author.profile_image);
},[comments_data])


    return (
    <div onClick={on_post_clicked} key={kayes} className="post shadow mb-5  p-3 text-dark rounded bg-light "  >
<div className="d-flex align-items-center justify-content-between py-3 gap-2 heading">
<div data-auther_id={post.author.id} className='d-flex align-items-center'>
    <img role="button"  className="to_user_profile rounded-circle me-2 user_image" src={typeof post.author.profile_image === 'string'? post.author.profile_image:avtara} alt="profile img"  />
    <span role="button" id='user_name'  className="to_user_profile fw-bold fs-3">{post.author.name}</span>
            </div>
            <i className="bi bi-4-circle"></i>
    {localStorage.token?JSON.parse(localStorage.user).id===post.author.id?
        <div  className="update_post  position-relative"  type="button" id="show_rej_model" >
                        <img  src={edit} alt='edit img' />
                        <div ref={edit_delete_div} className='position-absolute bg-secondary top-0 end-100 text-start p-2 d-none'><h6 id='edit_icon'>edit</h6><h6 id='delete_icon'>delete</h6></div>
        </div>:"":""
    }

</div>
        <p className="fs-3 text-start">{post.body}</p>
<img className="w-100" src={post.image} alt=""  />
<div className="py-3 text-start">
    <p className="fw-bold text-secondary">{post.created_at}</p>
    <div>
        <span role='button' id='show_comments' className="fw-bold fs-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen"
                viewBox="0 0 16 16">
                <path
                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
            </svg>
            {post.comments_count>0?post.comments_count>1?`(${post.comments_count}) comments`:"one comment":"no comments"}
            
        </span>
        <div className="mt-3 ms-3 d-inline-block">
            {post.tags.map(e=><button className="btn btn-secondary rounded-pill">policy</button>)}
        </div>
    </div>
</div>
            <div ref={comments} className='comments d-none'>

                        {comments_data.map((e,i)=><div key={i} className='text-start comment border-top pt-2'>
        <div className=''>
            <img src={typeof e.author.profile_image !== 'string' ? avtara:e.author.profile_image} alt='aa' style={{width:'40px',height:"40px"}} className='rounded-circle'/>
                                <span className='fw-bold ms-2'>{e.author.username}</span>
                </div>
                <p className='m-0 mb-1'>{e.body}</p>
                </div> )}
    
                <form className='w-100  d-flex justify-content-between' onSubmit={on_add_comment}>
                    <input type='text' className='form-control py-1  rounded ' style={{width:'87%',outline:"none",fontSize: '14px'}}/>
                    <button className='btn btn-primary btn-pell  text-center' style={{width:'12%',fontSize:"13px"}}>submit</button>
                </form>

</div>


</div>

)
}

export default Posts
