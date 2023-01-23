import React from 'react'
import Header from './Header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState ,useEffect} from 'react';
import axios from "axios";
const Post = () => { 
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('')
  const [url, setUrl] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryname, setcategoryname] = useState('')


  const sendPost = () => {
    const formdata = new FormData();
    formdata.append('title', title)
    formdata.append('summary', summary)
    formdata.append('file', file)
    formdata.append('content', content)
    formdata.append('url', url)
    formdata.append('category_name',categoryname);
    console.log(formdata);
    axios.post('http://localhost:8000/blogs/add-blog',formdata ).then((response)=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);

    })
  }
  useEffect(() => {
    axios.get('http://localhost:8000/blogs/category').then((response)=>{
      setCategories(response.data);
      console.log(response.data);
    }).catch((error)=>{
      console.error(error.error_msg);
    })
  }, [])
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center  space-y-2 w-full p-10">
        <h1 className=' text-4xl my-2 '> Add new post</h1>
        <form className='flex flex-col w-full space-y-8'>
          <select className='select-input'  name="categoryname" value={categoryname}   onChange={event=> setcategoryname(event.target.value)} >
            {
              categories.map((categoury)=>{
                return <option key={categoury.id} value={categoury.category_name}>{categoury.category_name}</option>
            

              })
            }
          </select>
          <input type="title" name='title' placeholder='title' value={title} onChange={event => setTitle(event.target.value)} />
          <input type="summary" name='summary' placeholder='summary' value={summary} onChange={event => setSummary(event.target.value)} />
          <input type="url" name="url" placeholder='enter some refferal link'   value={url}   onChange={event=> setUrl(event.target.value)}/>
          <input type="file" name='file'  onChange={event => setFile(event.target.files[0])} />
          <ReactQuill className='h-96 mb-5 ' theme="snow" value={content} onChange={event => setContent(event)} />
          <input type="button" className='ml-auto px-5 btn py-3' value='add posts' onClick={sendPost} />
        </form>

      </div>
    </>
  )
}

export default Post