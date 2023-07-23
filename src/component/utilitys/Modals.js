import React, { useContext, useEffect, useRef } from 'react'
import { Post } from '../../context/Context'
import { onloginsubmit } from '../../hooks/loginFilter'
import update_data from '../../actions/update_data'
import { send_with_img } from '../../actions/post'

const Modals = () =>
{
    
    let create_post_img_input = useRef()
    let create_post_input = useRef()
    let img_input_parent = useRef()
    let update_post = useRef()
    
    let name = useRef()
    let pass = useRef()
    let name_label = useRef()
    let pass_label = useRef()
     let post_body = useContext(Post)
    let on_update_clicked =async _ =>
    {
        if (post_body.post !== "")
        {
            let res = await update_data(`posts/${post_body.post.id}`, { "body": post_body.post.body })
            if (res.status === 200)
            {
               window.location.reload()
            }
        }
    }
    let hide = _ =>
    {
    update_post.current.classList.add('d-none')
    }
    let create_post = async _ =>
    {
        console.log(33);
        let res = await send_with_img('posts', {
            image:create_post_img_input.current.files[0],
            body: create_post_input.current.value
        })
        console.log(res);
        if (res.status === 201) {
            window.location.reload()
        }
        console.log(create_post_input.current.value);
        

    }
    let show_image =_ =>
        {
        img_input_parent.current.innerHTML = `<img class="w-100" src="${URL.createObjectURL(create_post_img_input.current.files[0])}" alt="">`;
        
    }
  return (
    <>
      {/* <!-- login --> */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="">
                    <div>
                        <label id="email_label_log" ref={name_label} className="d-block mb-2"htmlFor="email">name</label>
                        <input  className="form-control w-100" type="text" ref={name}  name="" id="email" />
                    </div>
                    <div>
                        <label id="password_label_log" className="d-block my-3"  ref={pass_label} htmlFor="password">password</label>
                        <input  className="form-control w-100" type="password" ref={pass} name="" id="password" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" id="login_btn" onClick={_ => { onloginsubmit(name.current,pass.current,pass_label.current,name_label.current) }} className="btn btn-primary" >login</button>
            </div>
        </div>
    </div>
</div>
{/* <!-- login --> */}


{/* <!-- rejester --> */}

<div className="modal fade rejester" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">create an account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="">
                    <div>
                        <label className="d-block mb-2" htmlFor="img">choose an image</label>
                        <input className="form-control w-100" type="file" name="" id="image_input" />
                    </div>
                    <div>
                        <label className="d-block mb-2" id="name_label" htmlFor="name">name</label>
                        <input className="form-control w-100" type="text" name="" id="name" />
                    </div>
                    <div>
                        <label className="d-block mb-2" id="email_label_rej" htmlFor="email2">email</label>
                        <input className="form-control w-100" type="email" name="" id="email2" />
                    </div>
                    <div>
                        <label className="d-block my-3" id="password_label_rej" htmlFor="password2">password</label>
                        <input className="form-control w-100" type="password" name="" id="password2" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" id="create" className="btn btn-primary">create</button>
            </div>
        </div>
    </div>
</div>

{/* <!-- rejester --> */}

{/* <!-- create post --> */}

<div className="modal fade rejester" id="post_modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">create an post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="">
                    <div>

                        <textarea ref={create_post_input} placeholder="type a story" className="form-control w-100" type="text" name="" id="textarea"></textarea>
                    </div>

                    <div  className="my-2 border p-2 d-flex flex-column justify-content-center align-items-center">
 
                                  <div ref={img_input_parent}>
                            
                        </div>
                        <label className="d-block btn  border py-2 px-5" htmlFor="image_post"> upload image
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload"
                                viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>
                        </label>
                        <input ref={create_post_img_input} onChange={show_image} className="form-control w-100 d-none" type="file" name="" id="image_post" />
                    </div>
                </form>
                <div className='text-end'>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancle</button>
                    <button type="button" id="publish_bnt"  className="btn ms-2 btn-primary" onClick={create_post} >post</button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- create post --> */}



{/* <!-- update post --> */}

          <div ref={update_post}className=" h-100 update_post d-none position-fixed top-0 left-0 w-100 d-flex justify-content-center align-items-center" >
              <div  onClick={hide}  className='modal_backgrond '></div>
        <div className="modal-content rounded w-50 bg-light p-2">
            <div className="modal-header">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">update post</h5>
                <button type="button" onClick={hide} className="btn-close"></button>
            </div>
            <div className="modal-body">
                <form className="my-3">
                    <div>
                                  <textarea  placeholder="type a story" value={post_body.post.body} onChange={e => { post_body.set_post({...post_body.post,body:e.target.value})}} className="form-control fs-5  w-100" type="text" name=""
                                      id="textarea_update" />
                    </div>

                </form>
                <div className=" text-start">
                    <button type="button" onClick={hide} className="btn btn-secondary me-2" >cancle</button>
                    <button type="button" id="upsate_post_bnt" onClick={on_update_clicked} className="btn btn-primary" >update</button>
                </div>
            </div>
        </div>
</div>

{/* 


*/}
    </>
  )
}

export default Modals
