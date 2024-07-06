import { Link } from "react-router-dom"

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="mt-[4rem] absolute z-50 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-8 p-[1rem] md:p-[6rem]">
        <div className="w-full space-y-8 md:space-y-10">
          <h1 className="font-bold text-[30px] md:text-[40px] leading-[101%] text-[#FB89C0] drop-shadow-2xl">
            A Digital Jungle on the TON Blockchain.
          </h1>
          <p>
            Join the adventure of Mango monkey and unlock digital secrets, share knowledge and go green!
          </p>

          <div className="z-[900] flex items-center gap-2">
            <Link to="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NjgyMjU3MjA3MCwidG9rZW5fYWRkcmVzcyI6IkVRQjc0eGluYVJ0NHB5YmszaTJtSWdOV2x6R3BzQlNYZVFIeGpoNmt3VFh5RVZLbyJ9" 
              className="p-[0.8rem] rounded-[30px] bg-[#315F56]"
            >
              Get $MANGO
            </Link>
            
            <Link to="https://t.me/mangoworldportal">
              <img 
                src="/assets/icons/telegram.svg"
                alt="telegram"
                width={50}
                height={50}
              />
            </Link>
            
            <Link to="https://x.com/Mango_On_Ton" className="relative">
              <span className="bg-white top-2 left-2 absolute z-[-1] h-[2rem] w-[2rem]" />
              <img 
                src="/assets/icons/x.svg"
                alt="X-twitter"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-full">
          <img 
            src="/assets/monkey.png" 
            alt="Mango monkey" 
            className="w-[15rem] md:w-[20rem] aspect-square"
          />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
