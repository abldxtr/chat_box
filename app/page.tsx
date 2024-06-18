import ChatBox from "@/components/chat.box";
import Header from "@/components/header";
import Main from "@/components/main";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container isolate mx-auto flex h-screen  overflow-hidden">
      <div className=" overflow-auto ">
        <Header />
      </div>
      {/* <ChatBox /> */}
      <Main />
    </main>
  );
}
