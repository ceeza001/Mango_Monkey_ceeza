const Ton = () => {
  return (
    <div className="pt-4 h-full w-screen relative">
      
      <div className="absolute z-50 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-8 p-[1rem] md:px-[6rem] pointer-events-none">
        <div className="w-full space-y-8 md:space-y-10">
          <h1 className="font-bold text-[30px] md:text-[40px] leading-[101%] text-[#FFF] drop-shadow-2xl">
            Why TON Blockchain?
          </h1>
          <p>
             TON blockchain, short for "The Open Network," is a community-driven project aiming to be a fast and scalable platform for decentralized applications (dApps).

Originally developed by Telegram, it now boasts a global community of contributors.

TON utilizes a unique multi-blockchain architecture for high transaction speeds and efficiency.
          </p>
        </div>
        <div className="w-full flex items-center justify-center h-full">
          <img 
            src="/assets/ton.png" 
            alt="Ton" 
            className="w-[15rem] md:w-[20rem] aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Ton;
