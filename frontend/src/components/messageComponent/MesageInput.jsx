import React, { useState } from "react";
import useConversation from "../../zustand/useConversion";

export const MesageInput = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const [text, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text)
    sendMessage(text);
    // console.log(selectedConversation);
    setText("");
  };

  const sendMessage = async (text) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text,
            jwt: localStorage.getItem("jwt"),
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        // console.log("send message" , data);
        setMessages([...messages, data]);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="z-50 w-full fixed bottom-0">
        <form onSubmit={handleSubmit} className="w-4/5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-4/6 "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-outline btn-info w-1/6">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
