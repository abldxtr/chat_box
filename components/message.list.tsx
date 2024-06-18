export default function Message_list() {
  return (
    <section className=" max-w-[400px] lg:flex hidden  relative flex-1 border-x-[1px] border-[#eff3f4]">
      <div className="flex  w-full flex-col">
        {/* <!-- head --> */}
        <div className=" flex w-full sticky top-0 ">
          <div className=" h-[53px] w-full bg-[#ffffffd9] backdrop-blur-md">
            <div className="flex h-full w-full flex-1 items-center justify-between px-[16px]">
              {/* <!-- 1 --> */}
              <div className="w-full flex-1">
                <h2 className="py-[2px] text-[20px] font-bold leading-[24px] text-[#0f1419]">
                  Messages
                </h2>
              </div>

              {/* <!-- 2 --> */}
              <div className="flex items-center">
                {/* <!-- 1svg --> */}
                <div className="flex size-[36px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-[#0f14191a]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-[20px]"
                  >
                    <g>
                      <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                    </g>
                  </svg>
                </div>

                {/* <!-- 2svg --> */}
                <div className="flex size-[36px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-[#0f14191a]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-[20px]"
                  >
                    <g>
                      <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- body --> */}
        <div className=" flex  flex-col grow   ">
          {/* <!-- 1 --> */}
          <div className="flex  ">
            <div className=" flex-1 ">
              {/* <!-- search bar --> */}
              <div className="min-h-[40px] p-[12px]">
                <div className="flex h-full min-h-[40px] items-center justify-between rounded-full border border-[#cfd9de]">
                  {/* <!-- icone --> */}
                  <div className="flex h-full items-center justify-center pl-[12px]">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-[16px] fill-[#536471]"
                    >
                      <g>
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                      </g>
                    </svg>
                  </div>

                  {/* <!-- input --> */}
                  <div className="flex h-full flex-1">
                    <input
                      type="text"
                      className="h-full bg-transparent pb-[1px] pl-[4px] pr-[16px] text-[14px] outline-0 w-full "
                      placeholder="Search Direct Message"
                    />
                  </div>
                </div>
              </div>
              {/* jjjj */}
              {/* <!-- message request --> */}
              <div className="min-h-[40px] w-full flex-1 cursor-pointer p-[12px] transition-all hover:bg-[#f7f9f9]">
                <div className="flex h-full min-h-[40px] items-center justify-between">
                  {/* <!-- icone --> */}
                  <div className="mr-[16px] flex size-[48px] cursor-pointer items-center justify-center rounded-full border border-[#e5eaec] bg-[#ffffff] transition-all duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-[24px]"
                    >
                      <g>
                        <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V13h-2v-2.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H11v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19.429 16l-2 2H23v2h-5.571l2 2-1.414 1.414L13.601 19l4.414-4.414L19.429 16z"></path>
                      </g>
                    </svg>
                  </div>

                  {/* <!-- text --> */}
                  <div className="flex h-full flex-1 flex-col">
                    <div className="text-[15px] font-semibold leading-[20px] text-[#0f1419]">
                      <span>Message requests</span>
                    </div>
                    <div className="text-[13px] font-normal leading-[20px] text-[#536471]">
                      <span>1 new request</span>
                    </div>
                  </div>
                  {/* <!-- online sign --> */}
                  <div className="size-[10px] rounded-full bg-[#1d9bf0]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2 --> */}
          <div className="min-h-[40px] w-full flex-1   ">
            <div className="flex  min-h-[40px] items-start cursor-pointer p-[12px] justify-between group transition-all hover:bg-[#f7f9f9] ">
              {/* <!-- icone or profile pic --> */}
              <div className="mr-[16px] flex size-[48px] cursor-pointer items-center justify-center rounded-full border border-[#e5eaec] bg-[#ffffff] transition-all duration-300  ">
                <img
                  alt="abol.dexter"
                  draggable="true"
                  src="https://pbs.twimg.com/profile_images/1564361710554734593/jgWXrher_normal.jpg"
                  className="size-full rounded-full"
                />
              </div>

              {/* <!-- text --> */}
              <div className="flex h-full grow flex-1 flex-col">
                <div className="text-[15px] font-semibold leading-[20px] text-[#0f1419] whitespace-nowrap ">
                  <span>
                    GE Aerospace
                    <span className="text-[15px] font-normal text-[#536471]">
                      @GE_Aerospace
                    </span>
                  </span>
                  {/* <!--  --> */}
                </div>
                <div className="text-[13px] font-normal leading-[20px] text-[#536471]">
                  <span>You accepted the reauest</span>
                </div>
              </div>
              {/* <!-- online sign --> */}
              <div className="flex size-[34px] cursor-pointer items-center justify-center rounded-full ml-[18px] transition-all duration-200 hover:bg-[#1d9bf01a] opacity-0 group-hover:opacity-100 shrink  ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-[19px] fill-[#536471] "
                >
                  <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
