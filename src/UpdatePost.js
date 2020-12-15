import React, { useState } from 'react'
import axios from 'axios'

function UpdatePost(props) {
  const [Author, updateAuthor] = useState(props.post.fields.Author)
  const [Title, updateTitle] = useState(props.post.fields.Title)
  const [Text, updateText] = useState(props.post.fields.Text)
  const [Img, updateImg] = useState(props.post.fields.Img)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`https://api.airtable.com/v0/appUAePiSxyLOS8Rm/Table%201/${props.post.id}`,
      {
        fields: {
          Title: Title,
          Author: Author,
          Text: Text,
          Img: Img
        }
      }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
        
    })
    props.updateFetchBlogPosts(!props.fetchBlogPosts)
    updateAuthor('')
    updateText('')
    updateTitle('')
    updateImg('')
  }
  return <form onSubmit={handleSubmit}>
    <h2>Edit Blog Post</h2>
      <label htmlFor="Img" >Image</label>
      <input type='text' id='Img' placeholder="URL" onChange={e => updateImg(e.target.value)} value={Img}/>
      <label htmlFor="Author" >Author</label>
      <input type='text' id='Author'onChange={e => updateAuthor(e.target.value)} value={Author}/>
      <label htmlFor="Title" >Title</label>
      <input type='text' id='Title'onChange={e => updateTitle(e.target.value)} value={Title} />
      <label htmlFor="Text" >Text</label>
      <input type='text' id='Text' onChange={e => updateText(e.target.value)} value={Text} />
    <textarea name='' id="Text" cols="30" rows="10" onChange={e => updateText(e.target.value)} value={Text}></textarea>
    <button type='submit' value='Update Post'>Update Post</button>
  </form>

    
    


}

export default UpdatePost