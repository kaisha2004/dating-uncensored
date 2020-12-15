import React from 'react'
// import UpdatePost from "./UpdatePost"
import axios from 'axios'

function Post(props) {
  const post = props.post
  const deletePost = async () => {
    const data = await axios.delete(`https://api.airtable.com/v0/appUAePiSxyLOS8Rm/Table%201${post.id}`,{
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    props.updateFetchBlogPosts(!props.fetchBlogPosts)
  }
  return <div> 
  <img src={post.fields.Img} alt="post img"/>
 <h2>{post.fields.Title}</h2>
    <h3>Author: {post.fields.Author} </h3>
 <h3>Created At: {post.fields.Created_At}</h3>
   <p>{post.fields.Text}</p>
   <UpdatePost post={post} fetchBlogPosts={props.fetchBlogPosts}
      updateFetchBlogPosts={props.updateFetchBlogPosts} />
     <button onClick={deletePost}>Delete</button>
</div>
}

export default Post