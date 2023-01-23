import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisteratonSchema } from "../../schemas/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const Signup = () => {
    // const {signup}= useStateValue();

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        password: "",
        date_of_birth: new Date().getUTCDate(),
        confirmPassword: "",
        showPassword: true,
      },
      validationSchema: RegisteratonSchema,
      onSubmit: (values) => { console.log(errors);
        axios
          .post(`http://localhost:8000/auth/signup`, values)
          .then((response) => {
            toast.success("user registerd successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            
            // nav("/signin");
          })
          .catch((error) => {
            toast.error(
              "something went wrong, Please try again letter",
              {
                position: toast.POSITION.TOP_RIGHT,
              }
            );
          });
      },
    });

  return (
    <div>
      <ToastContainer />
        <div className="flex flex-row sm:justify-between">
          <form method="post" className="signup sm:space-y-3">
            <h1 className=" text-lg sm:text-2xl font-semibold ">
              Signup our <span className="text-green-700"> blog app</span>
            </h1>
            <div className="flex sm:flex-row flex-col w-full  sm:items-center items-start sm:justify-between sm:space-x-2 sm:space-y-0  space-y-5">
              <div className="flex flex-col items-start w-full">
                <input
                  id="first_name"
                  type="first_name"
                  value={values.first_name}
                  onChange={handleChange("first_name")}
                  placeholder="First name"
                />
                {errors.first_name && touched.first_name ? (
                  <p className="text-red-600 p-2 font-semibold">
                    {errors.first_name}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="flex flex-col items-start w-full">
                <input
                  id="last_name"
                  type="last_name"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  placeholder="Last name"
                />
                {errors.last_name && touched.last_name ? (
                  <p className="text-red-600 p-2 font-semibold">
                    {errors.last_name}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full  sm:items-center items-start sm:justify-between sm:space-x-2 sm:space-y-0  space-y-5 ">
              <div className="flex flex-col items-start w-full">
                <input
                  id="mobile"
                  type="mobile"
                  value={values.mobile}
                  onChange={handleChange("mobile")}
                  placeholder="mobile"
                />
                {errors.mobile && touched.mobile ? (
                  <p className="text-red-600 p-2 font-semibold">
                    {errors.mobile}
                  </p>
                ) : (
                  <p></p>
                )}
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
                  <p className="text-red-600 p-2 font-semibold">
                    {errors.email}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full  sm:items-center items-start sm:justify-between sm:space-x-2 sm:space-y-0  space-y-5 ">
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
              <div className="flex flex-col items-start w-full">
                <input
                  id="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  placeholder="confirm Password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="text-red-600 p-2 font-semibold">
                    {errors.confirmPassword}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start w-50">
              <input
                id="date"
                type="date"
                value={values.date_of_birth}
                label="date_of_birth"
                onChange={handleChange("date_of_birth")}
              />
              {errors.date_of_birth && touched.date_of_birth ? (
                <p className="text-red-600 p-2 font-semibold">
                  {errors.date_of_birth}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="footer">
              <span className="link">
                I already have an account?
                <a
                  className="text-blue-700 mr-1 hover:underline hover:text-blue-800"
                  href="/signin"
                >
                  login
                </a>
              </span>

              <button className="submit-button" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
          <div className="image-section">
            <img src="/images/signup.png" alt="" />
          </div>
        </div>
    </div>
  );
};

export default Signup;
