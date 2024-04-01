import React from "react";
import { SliderBar } from "../components/sliderbar/SliderBar";
import { MessageComponent } from "../components/messageComponent/MessageComponent";

export const Home = () => {
  return (
    <>
      <div className="flex justify-between w-full absolute top-0">
        <SliderBar />
        <MessageComponent />
      </div>
    </>
  );
};
