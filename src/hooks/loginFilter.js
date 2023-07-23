import { send_without_img } from "../actions/post"


export let onloginsubmit = async (name,pass,pass_label,name_label) =>
{

    console.log(name.value);
    console.log(pass.value);
    name.onchange = e=>{e.target.classList.remove("wrong-input")}
    pass.onchange = e=>{e.target.classList.remove("wrong-input")}

    if (name.value === "")
    {
        name.classList.add('wrong-input')
        name_label.textContent= "email is empty"
    }

    if (pass.value === "")
    {
        pass.classList.add('wrong-input')
        pass_label.textContent= "password is empty"
    }


if (name.value === "" ||  pass.value === "") {
    return
}

    let res = await send_without_img("login", { "username": name.value, "password": pass.value })
    console.log(res);
    if (res.token) {
        localStorage.setItem('token',res.token)
        localStorage.setItem('user', JSON.stringify(res.user))
       window.location.reload()
    }
    
}