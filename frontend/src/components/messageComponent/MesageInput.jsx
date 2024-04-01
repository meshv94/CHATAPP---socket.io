import React from "react";

export const MesageInput = () => {
  return (
    <>
      <div className="fixed right-0 bottom-0 w-4/5 z-50">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-4/5"
        />
        <button type="submit" className="btn w-1/5 ">
          Send
        </button>
      </div>
    </>
  );
};
