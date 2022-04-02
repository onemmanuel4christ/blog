import Header  from "../../header/Header"
import "./home.css"

import React from 'react'
import BlogPost from "../../component/BlogPost"
import BlogSide from "../../component/BlogSide"


const Home = () => {
  return (
    <>
      <Header  />
        <div className="home"> 
          <BlogPost />
          <BlogSide />
        </div>
    </>
  )
}

export default Home