import React,{createContext,useState} from 'react'

const Post = createContext()
const Context = ({ children }) =>
{
    let [post, set_post] = useState({
        body: "bb",
        id:0
    })


  return (
      <Post.Provider value={{post,set_post}}>
          {children}
      </Post.Provider>
  )
}

export { Context,Post }