import React from "react";
import { HeadBar } from "./HeadBar.jsx";
import { Messages } from "./Messages.jsx";
import { MesageInput } from "./MesageInput.jsx";

export const MessageComponent = () => {
  const selectedChat = false;

  return (
    <>
      {selectedChat ? (
        <div className="flex flex-col w-4/5 h-screen justify-center align-middle">
          <HeadBar />
          <Messages />
          <MesageInput />
        </div>
      ) : (
        <NoChatSelected />
      )}
    </>
  );
};

const NoChatSelected = () => {
  //   const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center self-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 user ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
