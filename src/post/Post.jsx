import "./post.css"

const Post = () => {
  return (
    <div className="post">
      <img className="postImg"
    src="https://leverageedu.com/blog/wp-content/uploads/2019/11/Modern-Education.png" alt="" 
    />
    <div className="postInfo">
      <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
      </div>
      <span className="postTitle">Lorem ipsum dolor</span>
      <hr />
      <span className="postDate">1 Hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum at, porro vitae, 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum at, porro vitae, 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum at, porro vitae, 
    </p>
  </div>
  )
}

export default Post