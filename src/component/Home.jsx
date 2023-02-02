import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import Header from "./Header";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  // const getDate=(data)=>{
  //   const date =new Date(data)
  //   return  date.toDateString()
  // }
  return (
    <div>
      <Header />
      <div className="flex flex-col w-full">
        <Carousel showThumbs={false}>
          <div>
            <img src="images/blog1.jpg" />
          </div>
          <div>
            <img src="images/bog2.jpg" />
          </div>
          <div>
            <img src="images/blog3.jpg" />
          </div>
        </Carousel>

      </div>
      <h1 className="text-center text-3xl font-semibold"> all Blogs</h1>
      <div className="grid grid-cols-1 gap-2 w-full  p-2">
        {blogs.map((blog, index) => {
          return (
            <>
              <div className="blog flex items-start w-full  space-x-5 overflow-x-hidden" key={index}>
                <img  className="w-1/3 h-40" src={"http://localhost:8000" + blog.file} alt="" />
                <div className="flex flex-col items-start w-full space-y-1">
                  <h1 className="font-bold text-lg capitalize"> {blog.summary}</h1>
                  <h1 className="text-sm font-semibold"> {blog.title}</h1>
                  <p className="title"
                    dangerouslySetInnerHTML={{__html: blog.content.slice(0,500)
        }}>
                    
                  </p>
                    {blog.referel_link ? (
                    <div className="flex items-center flex-wrap">
                       <span>see more</span> 
                       <a  href={blog.referel_link} className="nav-link pl-2 text-blue-600 underline">{blog.referel_link}</a></div>
                    ) : null}

                  <span> updated by : {new Date(blog.createdAt).toDateString()}</span>
                  <span> author : <b>{blog.created_by}</b></span>
                 <span className="block px-6 py-2  text-base hover:text-white hover:shadow-2xl text-white font-bold rounded-full border-2 border-green-600 shadow-green-800 shadow bg-green-400"><NavLink to={'/blog/'+blog.id}  > read more</NavLink></span>  
                </div>
             </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
