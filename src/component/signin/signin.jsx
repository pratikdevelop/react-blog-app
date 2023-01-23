import React, { useState } from "react";
import "./signin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
// import { useStateValue } from "../usercontext";
const Signin = () => {
  // const {signin}= useStateValue();

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",       
      },
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        console.log(errors);
        axios
          .post(`http://localhost:8000/auth/signin`, values)
          .then((response) => {
            localStorage.setItem('token',response.data.token.refresh);
            console.log(response.data.token);
            toast.success("user Login successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });

            // nav("/signin");
          })
          .catch((error) => {
            toast.error(error.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      },
    });

  return (
    <>
      <ToastContainer />

        <div className="main-section">
          <form method="post" className="signin space-y-6">
            <div className="text-xl sm:text-2xl font-serif mx-auto font-bold ">
              signin our <span className="text-green-700"> blog app</span>
            </div>

            <div className="flex flex-col items-start w-full">
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="email"
              />
              {errors.email && touched.email ? (
                <p className="text-red-600 p-2 font-semibold">{errors.email}</p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <input
                type="password"
                value={values.password}
                onChange={handleChange("password")}
                placeholder="Password"
              />

              {errors.password && touched.password ? (
                <p className="text-red-600 p-2 font-semibold">
                  {errors.password}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="footer">
            <a
                  className=" text-blue-700  ml-auto hover:underline hover:text-blue-800"
                  href="/signup"
                >
                  Forget Password ?
                </a>
              <button className="submit-button border-indigo-600" onClick={handleSubmit}>
                Register
              </button>
              <span className="text-sm  text-center text-dark">
                don't have any account?
                <a
                  className="text-blue-700 mr-1 hover:underline hover:text-blue-800"
                  href="/signup"
                >
                  create account
                </a>
              </span>
            </div>
          </form>
          <div className="image-section">
            <img src="/images/signup.png" alt="" />
          </div>
        </div>
    </>
  );
};

export default Signin;
