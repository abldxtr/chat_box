import Chat_text from "./chat.text";
import Message_list from "./message.list";

export default function Main() {
  return (
    <main className="flex h-full items-start w-full ">
      <div className="flex shrink grow flex-1 items-start min-w-full">
        {/* <!-- messages list --> */}
        <div className=" overflow-y-auto overflow-x-hidden flex  h-screen ">
          <Message_list />
        </div>

        {/* <!-- message input --> */}
        <div className=" overflow-auto flex flex-1 h-full ">
          <Chat_text />
        </div>
      </div>
    </main>
  );
}
