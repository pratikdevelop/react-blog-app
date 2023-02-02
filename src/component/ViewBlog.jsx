import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import jwt_decode from "jwt-decode";
import { NavLink } from "react-router-dom";
const ViewBlog = () => {
  const [blog, setBlog] = useState({});
  let { blogId } = useParams();
  const decodedToken = jwt_decode(localStorage.getItem('token'));

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(`http://localhost:8000/blogs/blog/${blogId}`)
        .then((response) => {
          console.log(response.data);
          setBlog(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [blogId]);
  return (
    <>
      <Header />
      <div className="flex flex-col p-20  px-50 space-y-10 w-full">
        {blog && blog.id ? (
          <>
            <img
              className="h-96"
              src={"http://localhost:8000" + blog.file}
              alt=""
            />
            <div className="flex items-center space-x-6 w-full">
              <span className="text-lg  text-gray-500">
                39k <i class="fa fa-eye" aria-hidden="true"></i> 
              </span>
              <span className="text-lg  text-gray-500">
                29k <i class="fa fa-thumbs-up" aria-hidden="true"></i> 

              </span>
              <span className="text-lg  text-gray-500">
               
                2k <i class="fa fa-thumbs-down" aria-hidden="true"></i>  
              </span>
              <span className="text-lg  text-gray-500"> 39 comments
              </span>
              {
                blog.author ===  decodedToken.user_id? 
                <NavLink
                to={`/edit-post/${blog.id}`}
                className="capitalize font-serif text-gray-900 font-semibold "
            >
                edit blog
            </NavLink>
            : null
              }
            </div>
            <div className="flex flex-col items-start w-full space-y-6">
              <h1 className="font-bold text-2xl capitalize"> {blog.summary}</h1>
              <h1 className="text-lg font-semibold"> {blog.title}</h1>
              <p
                className="title text-gray-700"
                contentEditable="true"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></p>
              <span>
                see more
                {
                  <a
                    href={blog.referel_link}
                    className=" pl-2 text-blue-600 underline"
                  >
                    {blog.referel_link}
                  </a>
                }
              </span>
              <span>
                {" "}
                updated by : {new Date(blog.createdAt).toDateString()}
              </span>
              <span>
                author : <b>{blog.created_by}</b>
              </span>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ViewBlog;
