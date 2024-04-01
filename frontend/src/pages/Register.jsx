import React from "react";

export const Register = () => {
  return (
    <>
      <div className="w-2/6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 flex flex-col justify-items-center align-middle text-center p-6">
        <h1 className="text-3xl font-bold text-white p-4">
          SignUp
          <span className="text-blue-600 ml-2">ChatApp</span>
        </h1>

        <form className="flex flex-col justify-center align-middle w-3/4 mx-auto my-4">
          <label className="input input-bordered flex items-center gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>

          <input
            type="number"
            placeholder="Phone "
            className="input input-bordered flex items-center gap-2 mb-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <div className="flex p-3">
            Male :
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary mx-2"
              checked
            />
            Female :
            <input
              type="radio"
              name="radio-2"
              className="radio radio-secondary mx-2"
              placeholder="Female"
            />
          </div>

          <label className="input input-bordered flex items-center gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value="password" />
          </label>
          <input type="submit" value="Submit" className="btn bg-blue-600" />
        </form>
      </div>
    </>
  );
};
