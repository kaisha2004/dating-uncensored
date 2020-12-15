import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Post from "./Post"
import CreatePost from "./CreatePost"


function App() {
  const [blogPosts, updateBlogPosts] = useState([])
  const [fetchBlogPosts, updateFetchBlogPosts] = useState(false)


  useEffect(() => {
    const apiCall = async () => {
      const posts = await axios.get("https://api.airtable.com/v0/appUAePiSxyLOS8Rm/Table%201?view=Grid%20view",
        {

          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
          }
        })

      console.log(posts);
      updateBlogPosts(posts.data.records);
    }
    apiCall()
  }, [fetchBlogPosts])

  return ( 
      
     
        <main>
        <h1>Dating Advice Uncensored: Moses <br />Ladies </h1>
          {blogPosts.map(post => <Post post={post} key={post.id} fetchBlogPosts={fetchBlogPosts} updateFetchBlogPosts={updateFetchBlogPosts} />
        )}
        
        <CreatePost updateFetchBlogPosts={updateFetchBlogPosts}
            fetchBlogPosts={fetchBlogPosts}/> 
        </main>
      
    );
  }


  export default App;
