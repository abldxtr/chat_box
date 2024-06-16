"use client";

import { useEmojiState } from "@/context/EmojiContext";
import { useMessage } from "@/context/MessageContext";
import classNames from "classnames";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useRef } from "react";

export default function Messages() {
  const { messages, setMessages } = useMessage();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const { open, setOpen } = useEmojiState();
  console.log("messages", messages);

  const deleteMessageById = (id: number) => {
    const filteredMessage = messages.filter((item, index) => item.id !== id);
    setMessages(filteredMessage);
  };

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, open, setOpen]);
  return (
    <div
      className={classNames(
        " w-full  sticky top-10  max-h-[340px]  p-2 transition-all duration-300  ",
        open ? "h-full overflow-auto " : " h-0 overflow-hidden hidden",
      )}
    >
      {/* <!-- first message --> */}
      {messages.map((item, index) => {
        const img = item.images.length > 0;
        return (
          <div
            key={index}
            className="  pb-[5px]  p-2 flex flex-col items-end w-full  "
            // ref={messages.length === index ? lastMessageRef}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            {img ? (
              <div className=" flex items-center gap-4 ">
                <div className="  ">
                  <button
                    onClick={() => deleteMessageById(item.id)}
                    className=" size-[34px] hover:bg-[#1d9bf01a] flex items-center justify-center transition-all duration-300
                   rounded-full  "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-[20px] shrink-0 fill-[#1d9bf0] "
                    >
                      <g>
                        <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {item.images.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`uploaded-img-${index}`}
                    className="size-[120px] object-cover m-2"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-reverse">
                {/* for delete messag */}
                <div className="  ">
                  <button
                    onClick={() => deleteMessageById(item.id)}
                    className=" size-[34px] hover:bg-[#1d9bf01a] flex items-center justify-center transition-all duration-300
                   rounded-full  "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-[20px] shrink-0 fill-[#1d9bf0] "
                    >
                      <g>
                        <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className=" flex items-center justify-end bg-[rgb(29,155,240)] rounded-br-sm rounded-2xl py-[12px] px-[16px] text-right text-white leading-[20px] text-[15px] hover:bg-[#1a8cd8] transition-all duration-300    ">
                  <span>{item.text}</span>
                </div>
              </div>
            )}
            {/* date */}
            <div className="w-full flex items-center justify-end text-[13px] text-[#536471]    ">
              <div>{formatDistanceToNow(new Date(item.timestamp))} ago</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
