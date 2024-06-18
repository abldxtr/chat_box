"use client";

import { useEmojiState } from "@/context/EmojiContext";
import classNames from "classnames";

import { useEffect, useState, useRef, FormEvent } from "react";
import dynamic from "next/dynamic";
import { Message, useMessage } from "@/context/MessageContext";
import { useOnClickOutside } from "usehooks-ts";
import ImgInput from "./img.input";

export default function InputChat() {
  const { openEmoji, setOpenEmoji, open, setOpen } = useEmojiState();
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const { messages, setMessages, imgtemp, setImgTemp } = useMessage();
  const [inputValue, setInputValue] = useState("");
  const textRef = useRef<HTMLInputElement | null>(null);
  const EmojiRef = useRef(null);

  const handleClickOutside = () => {
    setOpenEmoji(false);
  };

  useOnClickOutside(EmojiRef, handleClickOutside);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() || imgtemp.length > 0) {
      const newMessage: Message = {
        id: messages.length ? messages[messages.length - 1].id + 1 : 1,
        text: inputValue,
        timestamp: new Date(),
        images: imgtemp,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setInputValue("");
      setImgTemp([]);
    }
  };
  console.log("inputValue", inputValue);

  const handleDeleteTempImg = () => {
    setImgTemp([]);
  };

  useEffect(() => {
    if (cursorPosition !== undefined && textRef.current) {
      console.log("cursorPosition", cursorPosition);
      textRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition]);

  const handleEmoji = (emojiData: { emoji: string }) => {
    setInputValue(inputValue);

    setOpenEmoji(true);
    const ref = textRef.current;

    if (
      ref &&
      ref.selectionStart !== null &&
      ref.selectionStart !== undefined
    ) {
      ref.focus();

      console.log("inputValue", inputValue);

      const start = inputValue.substring(
        0,
        inputValue.length === 0 ? 0 : ref.selectionStart,
      );
      const end = inputValue.substring(ref.selectionStart);
      const newText = start + emojiData.emoji + end;
      // console.log(newText);
      setCursorPosition(start.length + emojiData.emoji.length);
      setInputValue(newText);
    }
  };

  return (
    <div
      className={classNames(
        " bg-white  border-t border-[#eff3f4]  sticky bottom-0  py-1 isolate ",
        // open ? "z-10 sticky bottom-0 " : "z-[-1] hidden ",
      )}
    >
      {/* temp image  */}

      {imgtemp.length > 0 && (
        <div className="flex m-[12px] ">
          <div className=" size-[150px] shrike-0 overflow-hidden relative  ">
            {/* close icon */}
            <div className=" absolute top-2 right-2   ">
              <div
                className=" size-[30px] shrink-0 bg-[#0f1419bf] rounded-full hover:bg-[#272c30bf] transition-all flex items-center justify-center "
                onClick={handleDeleteTempImg}
              >
                <svg
                  viewBox="0 0 24 24"
                  className=" size-[18px] shrink-0 fill-white  "
                >
                  <g>
                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                  </g>
                </svg>
              </div>
            </div>
            {imgtemp.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`uploaded-img-${index}`}
                className="size-[150px] bg-[#0f1419bf] shrike-0 hover:bg-[#272c30bf] object-cover "
              />
            ))}
          </div>
        </div>
      )}
      {/* <!-- input --> */}
      <div className=" my-[4px] mx-[12px] p-[4px] flex items-center justify-between bg-[#eff3f4] rounded-[16px] gap-1    ">
        {/* <!-- 1 --> */}
        <div className=" flex items-center  ">
          {/* <!-- 1 svg --> */}
          <ImgInput />
          {/* <!-- 2 svg --> */}
          <div className="  ">
            <button className=" size-[34px] hover:bg-[#1d9bf01a] flex items-center justify-center transition-all duration-300 rounded-full  ">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-[20px] shrink-0 fill-[#1d9bf0] "
              >
                <g>
                  <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                </g>
              </svg>
            </button>
          </div>
          {/* <!-- 3 svg --> */}
          <div className=" relative " onClick={() => setOpenEmoji(true)}>
            <button
              className={classNames(
                " size-[34px]  flex items-center justify-center hover:bg-[#1d9bf01a] transition-all duration-300 rounded-full  ",
              )}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-[20px] shrink-0 fill-[#1d9bf0] "
              >
                <g>
                  <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                </g>
              </svg>
            </button>
            {/* emojipicker */}

            {openEmoji && (
              <div
                className={classNames(
                  " absolute  bottom-full  right-[-13rem] z-10   ",
                  // openEmoji ? " flex " : "opacity-0 pointer-events-none hidden",
                )}
                ref={EmojiRef}
              >
                <Picker width={260} height={360} onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
        </div>

        {/* <!-- 2 --> */}
        <div className=" grow shrink w-full h-full   ">
          <div className=" w-full grow shrink h-full ">
            <form onSubmit={handleSubmit} className="flex items-center ">
              <input
                type="text"
                ref={textRef}
                value={inputValue}
                onFocus={() => openEmoji && setOpenEmoji(true)}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your message"
                className="bg-transparent focus:ring-0 w-full h-full ring-0 focus-within:outline-none focus:border-0 text-[#0F1419] text-[15px] placeholder-[#536471]   "
              />
              {/* <button type="submit">Submit</button> */}
              <button
                type="submit"
                className={classNames(
                  " shrink-0 size-[34px] hover:bg-[#1d9bf01a] flex items-center fill-[#1d9bf0] justify-center transition-all duration-300 rounded-full  ",
                  " disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none ",
                )}
                // disabled={!!!inputValue.trim()}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-[20px] shrink-0  "
                >
                  <g>
                    <path d="M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z"></path>
                  </g>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false },
);
