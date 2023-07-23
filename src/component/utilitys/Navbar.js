import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>
{
    let LSE = localStorage.getItem('token') === null
    let on_log_out_clicked = _ =>
    {
        if (!LSE) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.reload()
        }
    }
    return (
    <nav className="p-3 shadow  mb-5 bg-light d-flex justify-content-between align-items-center rounded-bottom">
        <ul className="d-flex align-items-center list-inline m-0">
            <Link to='/' className="text-decoration-none"><li role="button" className="logo text-primary fs-5 fw-bold ">facebook</li></Link> 
                <li role="button" id="home_nav" className="ps-2  fs-5 fw-bold ">home</li>
                {!LSE?<Link className='text-decoration-none text-reset ' to={`/profile/${JSON.parse(localStorage.user).id}`}><li role="button" className="ps-2  fs-5 fw-bold ">profile</li> </Link> :""}
            
        </ul>
        <div className="log_reg_btns d-flex gap-2">
                {LSE ?
                    <>
                    <button className="log btn btn-primary" type="button" id="show_log_model" data-bs-toggle="modal" data-bs-target="#exampleModal">login</button>
                    <button className="rej btn btn-secondary" type="button" id="show_rej_model" data-bs-toggle="modal" data-bs-target="#exampleModal2">register</button>
                    </>
                    :
                    < >
                    
                <div className="email_component_nav">
                            <span className="fw-bold me-1 fs-5 user_name_nav">{JSON.parse(localStorage.user).name} <i class="fa-solid fa-pen-to-square"></i></span>
                            <img className="rounded-circle user_img_nav" src={JSON.parse(localStorage.user).profile_image} alt="" />
                        </div>
            <button className="out btn btn-primary"  onClick={on_log_out_clicked}>
                <span className="me-1">
                    log out 
                </span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
            </button>
                    </>}

        </div>
    </nav>
        

  )
}

export default Navbar
