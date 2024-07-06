import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation-flipped";
import { features } from "@/constants"

const Features = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="w-full mx-auto mt-[2rem] md:mt-0 absolute z-50 flex flex-col items-center gap-8 p-[1rem] md:p-[5rem] pointer-events-none">
        <h2 className="text-white font-bold pointer-events-none text-[28px] leading-[201%] md:text-[60px]">
          Dive into Mango World.
        </h2>

        <div className="w-full h-fit z-50 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-8 items-center">
          {features.map((feature, i) => (
            <div key={i} className="relative">
              <div className="absolute top-10 p-4 text-center space-y-6">
                <h3 className="text-[30px] font-extrabold leading-[101%] text-[#315F56]">{feature.title}</h3>
                <p className="leading-[90%] font-semibold text-[18px] text-dark-1">{feature.content}</p>
              </div>
              
              <img 
                src="/assets/paper.png" 
                alt={feature.title} 
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Features;