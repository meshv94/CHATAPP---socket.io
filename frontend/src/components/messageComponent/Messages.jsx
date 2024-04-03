import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

export const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <>
      <div className="overflow-auto my-14">
        {!loading &&
          messages.length > 0 &&
          messages.map((item) => {
            return (
              <div key={item._id} ref={lastMessage}>
                <Message message={item} />
              </div>
            );
          })}
        {!loading && messages.length === 0 && (
          <p className="text-center text-base text-amber-100">
            send a message to start the conversion
          </p>
        )}
      </div>
    </>
  );
};
