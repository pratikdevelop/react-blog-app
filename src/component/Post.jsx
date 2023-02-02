import React from "react";
import Header from "./Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryname, setcategoryname] = useState("");
  let { blogId } = useParams();
  const sendPost = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("summary", summary);
    formdata.append("file", file);
    formdata.append("content", content);
    formdata.append("url", url);
    formdata.append("category_name", categoryname);
    const apiUrl = blogId
      ? "http://localhost:8000/blogs/edit-blog/" + blogId
      : "http://localhost:8000/blogs/add-blog";

    axios
      .post(apiUrl, formdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error.error_msg);
      });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(`http://localhost:8000/blogs/blog/${blogId}`)
        .then((response) => {
          if (response.data) {
            setTitle(response.data.title);
            setContent(response.data.content);
            setUrl(response.data.referel_link);
            setcategoryname(response.data.category);
            setSummary(response.data.summary);
            setFileName(response.data.file);
          }
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
      <div className="flex flex-col items-center justify-center  space-y-2 w-full p-10">
        <h1 className=" text-4xl my-2 "> Add new post</h1>
        <form className="flex flex-col w-full space-y-8">
          <select
            className="select-input"
            name="categoryname"
            value={categoryname}
            onChange={(event) => setcategoryname(event.target.value)}
          >
            {categories.map((categoury) => {
              return (
                <option key={categoury.id} value={categoury.category_name}>
                  {categoury.category_name}
                </option>
              );
            })}
          </select>
          <input
            type="title"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="summary"
            name="summary"
            placeholder="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
          <input
            type="url"
            name="url"
            placeholder="enter some refferal link"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          <input
            type="file"
            name="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
          {fileName ? (
            <img className="h-96 " src={"http://localhost:8000" + fileName} />
          ) : null}
          <ReactQuill
            className="h-96 mb-5 "
            theme="snow"
            value={content}
            onChange={(event) => setContent(event)}
          />
        </form>
          <button
            
            className="px-5 w-full mt-5 text-white  bg-blue-600 shadow shadow-blue-800  shadow-2xl  capitalize text-base font-semibold  border-blue-800  py-3"
            
            onClick={sendPost}
          >
            add posts
            </button>
      </div>
    </>
  );
};

export default Post;
