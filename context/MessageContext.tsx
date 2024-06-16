"use client";

import React, {
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type Message = {
  id: number;
  text: string;
  timestamp: Date;
  images: string[];
};

// export type TempImg = {
//   id: number;
//   images: string[];
// };

type MessageContextType = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  imgtemp: string[];
  setImgTemp: Dispatch<SetStateAction<string[]>>;
};

const MessageContext = React.createContext<MessageContextType | null>(null);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [imgtemp, setImgTemp] = useState<string[]>([]);

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, imgtemp, setImgTemp }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const Messages = React.useContext(MessageContext);
  if (Messages === null) {
    throw new Error("useMessage must be used within a CounterProvider");
  }

  return Messages;
}
