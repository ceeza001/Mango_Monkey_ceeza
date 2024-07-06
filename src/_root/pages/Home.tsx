import { Link } from "react-router-dom"

import { Hero, Features, Anticipate, Mission, Ton } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="relative h-screen">
        <Hero />
        <div className="w-[10rem] absolute bottom-0 right-0 -rotate-90">
          <img 
            src="/assets/palm_leaf.webp"
          />
        </div>
      </div>

      <div className="relative h-[190vh] md:h-[100vh]">
        <Features />
        
        <div className="w-[10rem] absolute top-0 right-0 rotate-180">
          <img 
            src="/assets/palm_leaf.webp"
          />
        </div>
      </div>

      <div className="h-[75vh] md:h-[70vh]">
        <Anticipate />
      </div>
      
      <div className="mission h-[170vh] md:h-screen">
        <Mission />
      </div>

      <div className="h-[40rem] md:h-[30rem] bg-black">
        <Ton />
      </div>

      <footer className="bg-black w-full flex flex-col items-center justify-center p-[1rem]">
        <div className="w-full md:w-2/5">
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="mb-2"
          />
        </div>
        
          <div className="flex items-center gap-2">
            <Link to="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NjgyMjU3MjA3MCwidG9rZW5fYWRkcmVzcyI6IkVRQjc0eGluYVJ0NHB5YmszaTJtSWdOV2x6R3BzQlNYZVFIeGpoNmt3VFh5RVZLbyJ9">
              Get $Mango
            </Link>
            |
            <Link to="https://t.me/mangoworldportal">
              Telegram
            </Link>
            |
            <Link to="https://x.com/Mango_On_Ton" className="relative">
              X
            </Link>
          </div>
      </footer>
      
    </div>
  );
};

export default Home;